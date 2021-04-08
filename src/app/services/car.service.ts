
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Car } from '../models/car';
import { CarDetail } from '../models/car-detail';
import { ItemResponseModel } from '../models/itemResponseModel';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';


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
    let newPath = this.apiUrl + "cars/getcardetails"
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
  getCarDetailsByCarId(carId:number):Observable<ListResponseModel<CarDetail>>{
    let newPath =this.apiUrl + "cars/getcardetail?carId="+carId;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }
  add(car:Car):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl + "cars/add",car);
  }
  getById(carId : number):Observable<ItemResponseModel<Car>>{
    let newPath = this.apiUrl + "cars/getbyid?id=" + carId;
    return this.httpClient.get<ItemResponseModel<Car>>(newPath);
  }
  update(car:Car):Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl + "cars/update";
    return this.httpClient.post<ListResponseModel<Car>>(newPath,car);
  }
  delete(car:Car):Observable<ItemResponseModel<Car>>{
    let newPath = this.apiUrl + "cars/delete";
    return this.httpClient.post<ItemResponseModel<Car>>(newPath,car);
  }

  
}
