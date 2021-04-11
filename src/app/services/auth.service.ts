import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemResponseModel } from '../models/itemResponseModel';
import { loginModel } from '../models/loginModel';
import { PasswordChange } from '../models/passwordChange';
import { RegisterModel } from '../models/registerModel';
import { TokenModel } from '../models/tokenModel';
import { LocalStorageService } from './local-storage.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  
  apiUrl = "https://localhost:44359/api/auth/";

  constructor(private httpClient : HttpClient,
    private localStorageService : LocalStorageService) { }

  login(loginModel : loginModel):Observable<ItemResponseModel<TokenModel>>{
    return this.httpClient.post<ItemResponseModel<TokenModel>>(this.apiUrl+"login",loginModel);
  }
  register(registerModel:RegisterModel):Observable<ItemResponseModel<TokenModel>>{
    return this.httpClient.post<ItemResponseModel<TokenModel>>(this.apiUrl+"register",registerModel);
  }
  
  isAuthenticated(): boolean{
    if(this.localStorageService.getToken()){return true;}
    else{return false;}
  }
  passwordChange(userPassword : PasswordChange) : Observable<ItemResponseModel<PasswordChange>>{
    let newPath = this.apiUrl + "changepassword";
    return this.httpClient.put<ItemResponseModel<PasswordChange>>(newPath,userPassword);
  }
}
