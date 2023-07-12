import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { DetailsfilmComponent } from './detailsfilm/detailsfilm.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ListcampsitesComponent } from './listcampsites/listcampsites.component';
import { AddcampsiteComponent } from './addcampsite/addcampsite.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomepageComponent},
  {path:'listcampsites',component:ListcampsitesComponent},
  {path:'addcampsite',component:AddcampsiteComponent},
  {path:'detail',component:DetailsfilmComponent},
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
