import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CarDetail } from '../models/car-detail';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarDetailService {

  constructor(private httpClient:HttpClient) { }

  getCarDetail(carId:number):Observable<ListResponseModel<CarDetail>>{
    let newPath = environment.apiURL + 'cars/getcardetail?carId=' + carId
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }
}
