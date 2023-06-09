import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CarsComponent } from './cars/cars.component';
import { ServicesComponent } from './services/services.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { ContactComponent } from './contact/contact.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { ManageUserComponent } from './user/manage-user/manage-user.component';
import { ManageCarComponent } from './cars-manager/manage-car/manage-car.component';
import { AddCarComponent } from './cars-manager/add-car/add-car.component';
import { SingleUserComponent } from './user/single-user/single-user.component';
import { SingleCarComponent } from './cars-manager/single-car/single-car.component';
import { AddBrandComponent } from './brand/add-brand/add-brand/add-brand.component';
import { ManageBrandComponent } from './brand/manage-brand/manage-brand/manage-brand.component';
import { SingleBrandComponent } from './brand/single-brand/single-brand/single-brand.component';
import { AddReservationComponent } from './reservation/add-reservation/add-reservation.component';
import { ManageReservationComponent } from './reservation/manage-reservation/manage-reservation.component';
import { SingleReservationComponent } from './reservation/single-reservation/single-reservation.component';
import { UpdateBrandComponent } from './brand/update-brand/update-brand.component';
import { UpdateCarComponent } from './cars-manager/update-car/update-car.component';
import { UserViewCarsComponent } from './user-view-cars/user-view-cars.component';
import { UserReservationsComponent } from './user-reservations/user-reservations.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/layout/home', pathMatch: 'full'
  },
  {
    path: 'layout', component: LayoutComponent,

    children: [
      {
        path: 'home', component: HomeComponent
      },
      {
        path: 'contact', component: ContactComponent
      },
      {
        path: 'about', component: AboutComponent
      },
      {
        path: 'cars', component: CarsComponent
      },
      {
        path: 'services', component: ServicesComponent
      },
      {
        path: 'adminlogin', component: AdminloginComponent
      },
      {
        path: 'userlogin', component: UserloginComponent
      },
      {
        path: 'add-user', component: AddUserComponent
      },
      {
        path: 'manage-user' , component: ManageUserComponent
      },
      {
        path: 'manage-car' , component: ManageCarComponent
      },
      {
        path: 'add-car' , component: AddCarComponent
      },
      {
        path: 'single-user/:_id' , component: SingleUserComponent
      },
      {
        path: 'single-car/:_id', component: SingleCarComponent
      },
      {
        path:'add-brand', component: AddBrandComponent
      },
      {
        path:'manage-brand', component: ManageBrandComponent
      },
      {
        path:'single-brand/:_id', component: SingleBrandComponent
      },
      {
        path:'update-brand/:_id', component: UpdateBrandComponent
      },
      {
        path:'add-reservation/:_id',component: AddReservationComponent 
      },
      {
        path:'manage-reservation',component: ManageReservationComponent 
      },
      {
        path:'single-reservation',component: SingleReservationComponent 
      },
      {
        path:'update-car/:_id',component:UpdateCarComponent
      },
      {
        path:'user-view-cars/:brand_id',component:UserViewCarsComponent
      },
      {
        path:'user-reservations',component:UserReservationsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
