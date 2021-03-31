import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Car } from '../models/car';
import { CarDetail } from '../models/car-detail';
import { ItemResponseModel } from '../models/itemResponseModel';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarDetailService {

  constructor(private httpClient:HttpClient) { }

  /*
  getCarDetail(carId:number):Observable<ListResponseModel<CarDetail>>{
    let newPath = environment.apiURL + 'cars/getcardetail?carId=' + carId
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }
  getCarDetails(carId:number):Observable<ItemResponseModel<Car>>{
    let newPath = environment.apiURL + "cars/getcardetail?carId="+carId
    return this.httpClient.get<ItemResponseModel<Car>>(newPath)
  }
  */
}
