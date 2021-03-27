import { RouterModule, Routes } from '@angular/router';
import {NgModule} from '@angular/core';
import { CarComponent } from './components/car/car.component';
import { BrandComponent } from './components/brand/brand.component';
import { ColorComponent } from './components/color/color.component';
import { CustomerComponent } from './components/customer/customer.component';
import { RentalComponent } from './components/rental/rental.component';
import { CarDetailComponent } from './components/car/carDetail/car-detail.component';

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
  {path:"cars/detail/:carId",component:CarDetailComponent}
];
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
