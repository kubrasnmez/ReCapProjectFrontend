import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Color } from '../models/color';
import { ItemResponseModel } from '../models/itemResponseModel';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';


@Injectable({
  providedIn: 'root'
})
export class ColorService {

  apiUrl = environment.apiURL +'colors/';
  constructor(private httpClient : HttpClient) { }

  getColors():Observable<ListResponseModel<Color>>{
    let newPath = this.apiUrl + "getall"
    return this.httpClient.get<ListResponseModel<Color>>(newPath);
  }
  add(color : Color):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl + "add",color)
  }
  getbyId(colorId:number):Observable<ItemResponseModel<Color>>{
    let newPath = this.apiUrl + "getbyid?id=" + colorId;
    return this.httpClient.get<ItemResponseModel<Color>>(newPath);
  }
  update(color:Color) : Observable<ListResponseModel<Color>>{
    let newPath = this.apiUrl + "update";
    return this.httpClient.post<ListResponseModel<Color>>(newPath,color);
  }
}
