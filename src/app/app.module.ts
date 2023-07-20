import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DetailsfilmComponent } from './detailsfilm/detailsfilm.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ListcampsitesComponent } from './listcampsites/listcampsites.component';
import { ListactivitiesComponent } from './listactivities/listactivities.component';
import { AddcampsiteComponent } from './addcampsite/addcampsite.component';
import { LoginComponent } from './login/login.component';
import { DetailcampsiteComponent } from './detailcampsite/detailcampsite.component';
import { CrudcampsiteComponent } from './crudcampsite/crudcampsite.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { BookingComponent } from './booking/booking.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

@NgModule({
  declarations: [		
    AppComponent,
    NavbarComponent,
    NotFoundComponent,
    DetailsfilmComponent,
    FooterComponent,
    HomepageComponent,
    ListcampsitesComponent,
    ListactivitiesComponent,
    AddcampsiteComponent,
    LoginComponent,
    DetailcampsiteComponent,
    CrudcampsiteComponent,
    BookingComponent,
    ProductCardComponent,
      ShoppingCartComponent
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
