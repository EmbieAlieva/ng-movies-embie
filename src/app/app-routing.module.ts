import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieEditComponent } from './movie-edit/movie-edit.component';
import { MovieNewComponent } from './movie-new/movie-new.component';

const routes: Routes = [
    {path: '',                    component: HomeComponent},
    {path: 'movies/:id/new', component: MovieNewComponent},
    {path: 'movies/:movieId', component: MovieDetailComponent},
    {path: 'movies/:id/edit', component: MovieEditComponent}
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ], 
    exports: [ RouterModule ]
})
export class AppRoutingModule {

}
