import {Component, OnInit} from '@angular/core';
import {Movie} from '../shared/movie';
import {MovieService} from '../shared/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  movies: Movie[]=[];
  constructor(private movieService: MovieService) { }

  ngOnInit() {
   this.movieService.getMovies().subscribe(
    (data: Movie[]) => this.movies = data
   );
  }
}
