import { HttpClient } from '@angular/common/http';
import { identifierModuleUrl } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Brand } from '../models/brand';
import { ItemResponseModel } from '../models/itemResponseModel';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';


@Injectable({
  providedIn: 'root'
})
export class BrandService {

  apiUrl = environment.apiURL +'brands/';;


  constructor(private httpClient:HttpClient) { }

  getBrands():Observable<ListResponseModel<Brand>>{
    let newPath = this.apiUrl + "getall";
    return this.httpClient.get<ListResponseModel<Brand>>(newPath);
  }
  add(brand : Brand):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl + "add",brand)
  }
  getById(brandId : number):Observable<ItemResponseModel<Brand>>{
    let newPath = this.apiUrl + "getbyid?id=" + brandId;
    return this.httpClient.get<ItemResponseModel<Brand>>(newPath);
  }
  update(brand : Brand) : Observable<ListResponseModel<Brand>>{
    let newPath = this.apiUrl + "update";
    return this.httpClient.post<ListResponseModel<Brand>>(newPath,brand);
  }
}
