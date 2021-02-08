import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Import for loading & configuring in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MovieItemComponent } from './movie-item/movie-item.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieService } from './shared/movie.service';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { MovieEditComponent } from './movie-edit/movie-edit.component';
import { MovieData } from './shared/movie-data';
import { HttpClientModule } from '@angular/common/http';
import { MovieNewComponent } from './movie-new/movie-new.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    MovieItemComponent,
    MovieDetailComponent,
    MovieEditComponent,
    MovieNewComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(MovieData)
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
