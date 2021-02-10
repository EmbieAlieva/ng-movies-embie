import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

import { Movie } from './movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  // private moviesUrl = 'localhost:8000/movies'; solo funciona si trabaja con la bbdd de storage
  private moviesUrl = 'http://localhost:8000/movies';
  constructor(private http: HttpClient) { }

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.moviesUrl)
      .pipe(
        tap(data => console.log(JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  getMaxMovieId(): Observable<Movie> {
    return this.http.get<Movie[]>(this.moviesUrl)
    .pipe(
      // Get max value from an array
      map(data => Math.max.apply(Math, data.map(function(o) { return o.id; }))   ),
      catchError(this.handleError)
    );
  }

  getMovieById(id: number): Observable<Movie> {
    const url = `${this.moviesUrl}/${id}`;
    return this.http.get<Movie>(url)
      .pipe(
        tap(data => console.log('getMovie: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  createMovie(movie: Movie): Observable<Movie> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    movie.id = null;
    return this.http.post<Movie>(this.moviesUrl, movie, { headers: headers })
      .pipe(
        tap(data => console.log('createMovie: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  deleteMovie(id: number): Observable<{}> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.moviesUrl}/${id}`;
    return this.http.delete<Movie>(url, { headers: headers })
      .pipe(
        tap(data => console.log('deleteMovie: ' + id)),
        catchError(this.handleError)
      );
  }

  updateMovie(movie: Movie): Observable<Movie> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.moviesUrl}/${movie.id}`;
    return this.http.put<Movie>(url, movie, { headers: headers })
      .pipe(
        tap(() => console.log('updateMovie: ' + movie.id)),
        // Return the Movie on an update
        map(() => movie),
        catchError(this.handleError)
      );
  }

  private handleError(err) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }

}
