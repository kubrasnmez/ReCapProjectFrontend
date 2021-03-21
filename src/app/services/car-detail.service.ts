import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetails } from '../models/carDetails';
import { ItemResponseModel } from '../models/itemResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarDetailService {

  apiUrl: 'https://localhost:44337/api/'
  constructor(private httpClient:HttpClient) { }
/*
  getCarDetail(carId:Number):Observable<ItemResponseModel<CarDetails>>{
    let newPath = this.apiUrl +'cars/getcardetail?carId='+carId;
    return this.httpClient.get<ItemResponseModel<CarDetails>>(newPath);
  }
  */
}
