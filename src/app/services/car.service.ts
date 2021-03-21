
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Car } from '../models/car';
import { CarDetails } from '../models/carDetails';
import { ListResponseModel } from '../models/listResponseModel';


//Service
@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl = environment.apiURL;

  constructor(private httpClient:HttpClient) { }

  //subscribe olunabilir bir response model dönüceksin
  getCars():Observable<ListResponseModel<Car>>{
    //gelen datayı CarResponseModel ' a map edeceksin.
    let newPath = this.apiUrl + "cars/getcardetail"
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
  getCarsByBrand(brandId:number):Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl + "cars/getcarsbybrandid?brandId="+brandId
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
  getCarsByColor(colorId:number):Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl + "cars/getcarsbycolorid?colorId="+colorId
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
  getCarByBrandAndColor(brandId:Number,colorId:Number):Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl +`cars/getbybrandandcolor?brandId=${brandId}&colorid=${colorId}`;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
  getCarDetailsByCarId(carId:number){
    let newPath = this.apiUrl + "cars/getcardetailsbycarid?carid=" + carId;
    return this.httpClient
      .get<ListResponseModel<CarDetails>>(newPath);
  }
  getCarDetails(brandId:number, colorId:number){
    let newPath = this.apiUrl + "cars/getcarsdetails?brandId=" + brandId + "&colorId=" + colorId;
    return this.httpClient
      .get<ListResponseModel<CarDetails>>(newPath);
  }
  getAllCarDetails():Observable<ListResponseModel<CarDetails>> {
    let newPath = this.apiUrl + "cars/getcarsdetails"
    return this.httpClient
      .get<ListResponseModel<CarDetails>>(newPath);
  }

}
