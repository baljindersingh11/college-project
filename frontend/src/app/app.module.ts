import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CarsComponent } from './cars/cars.component';
import { ServicesComponent } from './services/services.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { ContactComponent } from './contact/contact.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ManageUserComponent } from './user/manage-user/manage-user.component';
import { SingleUserComponent } from './user/single-user/single-user.component';
import { AddBrandComponent } from './brand/add-brand/add-brand/add-brand.component';
import { ManageBrandComponent } from './brand/manage-brand/manage-brand/manage-brand.component';
import { SingleBrandComponent } from './brand/single-brand/single-brand/single-brand.component';
import { AddCarComponent } from './cars-manager/add-car/add-car.component';
import { ManageCarComponent } from './cars-manager/manage-car/manage-car.component';
import { SingleCarComponent } from './cars-manager/single-car/single-car.component';
import { AddReservationComponent } from './reservation/add-reservation/add-reservation.component';
import { ManageReservationComponent } from './reservation/manage-reservation/manage-reservation.component';
import { SingleReservationComponent } from './reservation/single-reservation/single-reservation.component';
import { UserService } from './shared/user/user.service';
import { AdminauthService } from './shared/adminauth/adminauth.service';
import { UpdateBrandComponent } from './brand/update-brand/update-brand.component';
import { UpdateCarComponent } from './cars-manager/update-car/update-car.component';
import { UserViewCarsComponent } from './user-view-cars/user-view-cars.component';
import { UserReservationsComponent } from './user-reservations/user-reservations.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    CarsComponent,
    ServicesComponent,
    AdminloginComponent,
    UserloginComponent,
    ContactComponent,
    AddUserComponent,
    ManageUserComponent,
    SingleUserComponent,
    AddBrandComponent,
    ManageBrandComponent,
    SingleBrandComponent,
    AddCarComponent,
    ManageCarComponent,
    SingleCarComponent,
    AddReservationComponent,
    ManageReservationComponent,
    SingleReservationComponent,
    UpdateBrandComponent,
    UpdateCarComponent,
    UserViewCarsComponent,
    UserReservationsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      preventDuplicates: true
    }),
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
