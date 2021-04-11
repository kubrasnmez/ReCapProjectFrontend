import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from '../models/card';
import { ItemResponseModel } from '../models/itemResponseModel';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient : HttpClient) { }

  apiUrl = "https://localhost:44359/api/users/";

  getById(id:number):Observable<ItemResponseModel<User>>{
    let newPath = this.apiUrl + "getbyid?id="+id;
    return this.httpClient.get<ItemResponseModel<User>>(newPath);
  }
  updateInfos(user:User):Observable<ResponseModel>{
    let newPath = this.apiUrl+"updateinfos";
    return this.httpClient.put<ResponseModel>(newPath,user);
  }
  getUserByMail(mail:string):Observable<ItemResponseModel<User>> {
    let newPath = this.apiUrl + "getuserbymail?mail=" + mail;
    return this.httpClient.get<ItemResponseModel<User>>(newPath);
  }
  userDtoUpdate(user:User, userId:number):Observable<ResponseModel> {
    let newPath = this.apiUrl + "userdtoupdate?userId=" +userId;
    return this.httpClient.post<ResponseModel>(newPath, user);
  }
  getAllCard(customerId : number):Observable<ListResponseModel<Card>>{
    let newPath =  "https://localhost:44359/api/cards/getallcardbycustomerid?customerId=" + customerId;
    return this.httpClient.get<ListResponseModel<Card>>(newPath);
  }
  deleteCard(cardId : number):Observable<ResponseModel>{
    let newPath = "https://localhost:44359/api/cards/deletebycardid";
    return this.httpClient.post<ResponseModel>(newPath,cardId);
  }
  addCard(card:Card):Observable<ResponseModel> {
    let newPath = "https://localhost:44359/api/cards/add";
    return this.httpClient.post<ResponseModel>(newPath, card);
  }
}

