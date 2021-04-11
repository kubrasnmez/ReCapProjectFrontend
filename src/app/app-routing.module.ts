import { RouterModule, Routes } from '@angular/router';
import {Component, NgModule} from '@angular/core';
import { CarComponent } from './components/car/car.component';
import { BrandComponent } from './components/brand/brand.component';
import { ColorComponent } from './components/color/color.component';
import { CustomerComponent } from './components/customer/customer.component';
import { RentalComponent } from './components/rental/rental.component';
import { CarDetailComponent } from './components/car/carDetail/car-detail.component';
import { PaymentComponent } from './components/payment/payment.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { BrandAddComponent } from './components/brand/brand-add/brand-add.component';
import { ColorAddComponent } from './components/color/color-add/color-add.component';
import { BrandUpdateComponent } from './components/brand/brand-update/brand-update.component';
import { BrandListComponent } from './components/brand/brand-list/brand-list.component';
import { ColorUpdateComponent } from './components/color/color-update/color-update.component';
import { ColorListComponent } from './components/color/color-list/color-list.component';
import { CarListComponent } from './components/car/car-list/car-list.component';
import { CarUpdateComponent } from './components/car/car-update/car-update.component';
import { LoginComponent } from './components/login/login.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  {path:"" , pathMatch:"full", component:CarComponent},
  {path:"cars",component:CarComponent},
  {path:"cars/brand/:brandId", component:CarComponent},
  {path:"cars/color/:colorId", component:CarComponent},
  {path:"cars/brand/:brandId/color:colorId", component:CarComponent},
  {path:"brands",component:BrandComponent},
  {path:"colors",component:ColorComponent},
  {path:"customers",component:CustomerComponent},
  {path:"rentals",component:RentalComponent},
  {path:"cars/detail/:carId",component:CarDetailComponent},
  {path:"cars/filter/:brandId/:colorId",component:CarComponent},
  {path:"rental/:carId", component:RentalComponent},
  {path:"payment/:rental",component:PaymentComponent},
  {path:"cars/add",component:CarAddComponent, canActivate:[LoginGuard]},
  {path:"brands/add",component:BrandAddComponent},
  {path:"colors/add",component:ColorAddComponent},
  {path:"brands/update/:brandId",component:BrandUpdateComponent},
  {path:"brandlist",component:BrandListComponent},
  {path:"colors/update/:colorId",component:ColorUpdateComponent},
  {path:"colorlist",component:ColorListComponent},
  {path:"carlist",component:CarListComponent},
  {path:"cars/update/:carId",component:CarUpdateComponent},
  {path:"login",component:LoginComponent}
  
];
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
