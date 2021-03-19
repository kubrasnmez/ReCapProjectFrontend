import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Color } from '../models/color';
import { ListResponseModel } from '../models/listResponseModel';


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
  getById(id:number):Observable<ListResponseModel<Color>> {
    let newPath = this.apiUrl + "getbyid?id=" + id;
    return this.httpClient.get<ListResponseModel<Color>>(newPath);
  }
}
