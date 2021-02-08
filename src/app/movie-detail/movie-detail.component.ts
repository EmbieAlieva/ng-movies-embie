import {Component, OnInit} from '@angular/core';
import {MovieService} from '../shared/movie.service';
import {Movie} from '../shared/movie';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  movie: Movie;
  movieId: number;

  constructor(private activatedroute: ActivatedRoute, private router: Router, private movieService: MovieService) {}

  ngOnInit() {
    this.movieId = parseInt(this.activatedroute.snapshot.params['movieId']);
    this.movieService.getMovieById(this.movieId).subscribe(
      (data: Movie) => this.movie = data
    );
  }
  goEdit():void{
    this.router.navigate(['/movies', this.movieId, 'edit']);
  }
  onBack(): void {
    this.router.navigate(['']);
  }

}
