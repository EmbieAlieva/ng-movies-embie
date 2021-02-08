import { Component, OnInit } from '@angular/core';
import { MovieService } from '../shared/movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  id : any;

  constructor(private movieService: MovieService, private router: Router) { }

  ngOnInit() {
  }

  newMovie(){
      // Get max movie Id from the movie list
      this.movieService.getMaxMovieId().subscribe(
        data => this.id = data
      );
      this.router.navigate(['/movies', this.id, 'new'])

  }

}
