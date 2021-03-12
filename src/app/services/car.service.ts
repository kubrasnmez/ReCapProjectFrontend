import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarResponseModel } from '../models/carResponseModel';

//Service
@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl = "https://localhost:44359/api/cars/getall";

  constructor(private httpClient:HttpClient) { }

  //subscribe olunabilir bir response model dönüceksin
  getCars():Observable<CarResponseModel>{
    //gelen datayı CarResponseModel ' a map edeceksin.
    return this.httpClient.get<CarResponseModel>(this.apiUrl);
  }
}
