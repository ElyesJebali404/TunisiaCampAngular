import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ListcampsitesComponent } from './listcampsites/listcampsites.component';
import { AddcampsiteComponent } from './addcampsite/addcampsite.component';
import { LoginComponent } from './login/login.component';
import { DetailcampsiteComponent } from './detailcampsite/detailcampsite.component';
import { CrudcampsiteComponent } from './crudcampsite/crudcampsite.component';
import { BookingComponent } from './booking/booking.component';
import { AjouteruserComponent } from './ajouteruser/ajouteruser.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { ProfileComponent } from './profile/profile.component';
import { EventsComponent } from './events/events.component';
import { AddEComponent } from './add-e/add-e.component';
import { AddEventComponent } from './add-event/add-event.component';
import { UpdateEventComponent } from './update-event/update-event.component';
import { EspaceadminComponent } from './espaceadmin/espaceadmin.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomepageComponent },
  { path: 'listcampsites', component: ListcampsitesComponent },
  { path: 'addcampsite', component: AddcampsiteComponent },
  { path: 'detail/:id', component: DetailcampsiteComponent },
  { path: 'login', component: LoginComponent },
  { path: 'crudcampsite', component: CrudcampsiteComponent },
  { path: 'booking', component: BookingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'user/add', component: AjouteruserComponent },
  { path: 'listeusers', component: ListUsersComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'events', component: EventsComponent },
  { path: 'adde', component: AddEComponent },
  { path: 'details/:id', component: AddEventComponent },
  { path: 'updateevent', component: UpdateEventComponent },
  { path: 'espaceadmin', component: EspaceadminComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
