import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { ListFilmComponent } from './list-film/list-film.component';
import { AddFilmComponent } from './add-film/add-film.component';
import { DetailsfilmComponent } from './detailsfilm/detailsfilm.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomepageComponent},
  {path:'list',component:ListFilmComponent},
  {path:'add',component:AddFilmComponent},
  {path:'detail',component:DetailsfilmComponent},
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
