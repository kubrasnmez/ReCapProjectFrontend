import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CarImage } from '../models/carImage';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {
  
  apiUrl = environment.apiURL;

  constructor(private httpClient:HttpClient) { }

  getCarImages(carId:number):Observable<ListResponseModel<CarImage>>{
    let newPath = environment.apiURL + "carimages/getimagesbycarid?carId=" + carId
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath)
  }

  add(image: File): Observable<ResponseModel> {
    var formData: FormData = new FormData();
    formData.append('carId', '3');
    formData.append('file', image);
    console.log(image);
    return this.httpClient.post<ResponseModel>(
      this.apiUrl + 'carimages/add',
      formData
    );
  }}
