import { Component, OnInit, AfterViewInit, OnDestroy, ViewChildren, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators, FormControlName } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Movie } from '../shared/movie';
import { MovieService } from '../shared/movie.service';

@Component({
  templateUrl: './movie-edit.component.html'
})
export class MovieEditComponent implements OnInit{

  pageTitle = 'Movie Edit';
  errorMessage: string;
  movieForm: FormGroup;

  movieId:number;
  movie: Movie;

  constructor(private fb: FormBuilder,
    private activatedroute: ActivatedRoute,
    private router: Router,
    private movieService: MovieService) {  }

  ngOnInit(): void {
    this.movieForm = this.fb.group({
      title: ['', [Validators.required,
      Validators.minLength(3),
      Validators.maxLength(50)]],
      description: '',
      image: '',
      type: '',
      price: ''
    });

    // Read the movie Id from the route parameter
    this.movieId = parseInt(this.activatedroute.snapshot.params['id']);
    this.getMovie(this.movieId);
  }

  getMovie(id: number): void {
    this.movieService.getMovieById(id)
      .subscribe(
        (movie: Movie) => this.displayMovie(movie),
        (error: any) => this.errorMessage = <any>error
      );
  }

  displayMovie(movie: Movie): void {
    if (this.movieForm) {
      this.movieForm.reset();
    }
    this.movie = movie;
    this.pageTitle = `Edit Movie: ${this.movie.title}`;

    // Update the data on the form
    this.movieForm.patchValue({
      title: this.movie.title,
      description: this.movie.description,   
      image: this.movie.image,
      price: this.movie.price,
      type: this.movie.type
    });
  }

  deleteMovie(): void {
    if (this.movie.id === 0) {
      // Don't delete, it was never saved.
      this.onSaveComplete();
    } else {
      if (confirm(`Really delete the movie: ${this.movie.title}?`)) {
        this.movieService.deleteMovie(this.movie.id)
          .subscribe(
            () => this.onSaveComplete(),
            (error: any) => this.errorMessage = <any>error
          );
      }
    }
  }


  saveMovie(): void {
    if (this.movieForm.valid) {
      if (this.movieForm.dirty) {
        this.movie = this.movieForm.value;
        this.movie.id = this.movieId;
        
        this.movieService.updateMovie(this.movie)
        .subscribe(
          () => this.onSaveComplete(),
          (error: any) => this.errorMessage = <any>error
        );
      
        
      } else {
        this.onSaveComplete();
      }
    } else {
      this.errorMessage = 'Please correct the validation errors.';
    }
  }

  onSaveComplete(): void {
    // Reset the form to clear the flags
    this.movieForm.reset();
    this.router.navigate(['']);
  }
}
