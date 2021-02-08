import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Movie } from '../shared/movie';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../shared/movie.service';

@Component({
  selector: 'app-movie-new',
  templateUrl: './movie-new.component.html',
  styleUrls: ['./movie-new.component.css']
})
export class MovieNewComponent implements OnInit {

  pageTitle = 'Movie New';
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
    this.movieId = parseInt(this.activatedroute.snapshot.params['movieId']);
  }

  saveMovie(): void {
    if (this.movieForm.valid) {
      if (this.movieForm.dirty) {
        this.movie = this.movieForm.value;
        this.movie.id = this.movieId;
        
        this.movieService.createMovie(this.movie)
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
