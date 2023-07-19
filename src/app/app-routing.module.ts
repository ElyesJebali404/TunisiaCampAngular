import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { DetailsfilmComponent } from './detailsfilm/detailsfilm.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ListcampsitesComponent } from './listcampsites/listcampsites.component';
import { AddcampsiteComponent } from './addcampsite/addcampsite.component';
import { ListactivitiesComponent } from './listactivities/listactivities.component';
import { LoginComponent } from './login/login.component';
import { DetailcampsiteComponent } from './detailcampsite/detailcampsite.component';
import { CrudcampsiteComponent } from './crudcampsite/crudcampsite.component';
import { BookingComponent } from './booking/booking.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomepageComponent},
  {path:'listcampsites',component:ListcampsitesComponent},
  {path:'addcampsite',component:AddcampsiteComponent},
  {path:'detail/:id',component:DetailcampsiteComponent},
  {path:'listactivities',component:ListactivitiesComponent},
  {path:'login',component:LoginComponent},
  {path:'crudcampsite',component:CrudcampsiteComponent},
  {path:'booking',component:BookingComponent},
  {path:'**',component:DetailsfilmComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
