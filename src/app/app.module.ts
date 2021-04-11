import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import{ToastrModule} from 'ngx-toastr';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FileUploadModule} from 'ng2-file-upload';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './components/car/car.component';
import { BrandComponent } from './components/brand/brand.component';
import { NaviComponent } from './components/navi/navi.component';
import { ColorComponent } from './components/color/color.component';
import { CustomerComponent } from './components/customer/customer.component';
import { RentalComponent } from './components/rental/rental.component';
import { TabComponent } from './components/tab/tab.component';
import { CarDetailComponent } from './components/car/carDetail/car-detail.component';
import { CarFilterPipePipe } from './pipes/car-filter-pipe.pipe';
import { FilterComponent } from './components/filter/filter.component';
import { BrandFilterPipePipe } from './pipes/brand-filter-pipe.pipe';
import { ColorFilterPipePipe } from './pipes/color-filter-pipe.pipe';
import { PaymentComponent } from './components/payment/payment.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { BrandAddComponent } from './components/brand/brand-add/brand-add.component';
import { ColorAddComponent } from './components/color/color-add/color-add.component';
import { BrandUpdateComponent } from './components/brand/brand-update/brand-update.component';
import { BrandListComponent } from './components/brand/brand-list/brand-list.component';
import { ColorListComponent } from './components/color/color-list/color-list.component';
import { ColorUpdateComponent } from './components/color/color-update/color-update.component';
import { CarListComponent } from './components/car/car-list/car-list.component';
import { CarUpdateComponent } from './components/car/car-update/car-update.component';
import { CarImageComponent } from './components/car/car-image/car-image.component';
import { LoginComponent } from './components/login/login.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { RegisterComponent } from './components/register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    BrandComponent,
    NaviComponent,
    ColorComponent,
    CustomerComponent,
    RentalComponent,
    TabComponent,
    CarDetailComponent,
    CarFilterPipePipe,
    FilterComponent,
    BrandFilterPipePipe,
    ColorFilterPipePipe,
    PaymentComponent,
    CarAddComponent,
    BrandAddComponent,
    ColorAddComponent,
    BrandUpdateComponent,
    BrandListComponent,
    ColorListComponent,
    ColorUpdateComponent,
    CarListComponent,
    CarUpdateComponent,
    CarImageComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    }),
    BrowserAnimationsModule,
    FileUploadModule
  ],
  providers: [{
    provide : HTTP_INTERCEPTORS, useClass : AuthInterceptor, multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
