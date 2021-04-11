import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemResponseModel } from '../models/itemResponseModel';
import { loginModel } from '../models/loginModel';
import { RegisterModel } from '../models/registerModel';
import { TokenModel } from '../models/tokenModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = "https://localhost:44359/api/auth/";

  constructor(private httpClient : HttpClient) { }

  login(loginModel : loginModel){
    return this.httpClient.post<ItemResponseModel<TokenModel>>(this.apiUrl+"login",loginModel);
  }
  register(registerModel:RegisterModel):Observable<ItemResponseModel<TokenModel>>{
    return this.httpClient.post<ItemResponseModel<TokenModel>>(this.apiUrl+"register",registerModel);
  }
  isAuthenticated(){
    if(localStorage.getItem("token")){
      return true;
    }
    else{
      return false;
    }
  }
}
