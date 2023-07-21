import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ListcampsitesComponent } from './listcampsites/listcampsites.component';
import { AddcampsiteComponent } from './addcampsite/addcampsite.component';
import { LoginComponent } from './login/login.component';
import { DetailcampsiteComponent } from './detailcampsite/detailcampsite.component';
import { CrudcampsiteComponent } from './crudcampsite/crudcampsite.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { BookingComponent } from './booking/booking.component';
import { ProfileComponent } from './profile/profile.component';
import { ModifieruserComponent } from './modifieruser/modifieruser.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { AjouteruserComponent } from './ajouteruser/ajouteruser.component';
import { UpdateEventComponent } from './update-event/update-event.component';
import { EventsComponent } from './events/events.component';
import { EspaceadminComponent } from './espaceadmin/espaceadmin.component';
import { AddEventComponent } from './add-event/add-event.component';
import { AddEComponent } from './add-e/add-e.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NotFoundComponent,
    FooterComponent,
    HomepageComponent,
    ListcampsitesComponent,
    AddcampsiteComponent,
    LoginComponent,
    DetailcampsiteComponent,
    CrudcampsiteComponent,
    BookingComponent,
    ProfileComponent,
    ModifieruserComponent,
    ListUsersComponent,
    AjouteruserComponent,
    UpdateEventComponent,
    EventsComponent,
    EspaceadminComponent,
    AddEventComponent,
    AddEComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
