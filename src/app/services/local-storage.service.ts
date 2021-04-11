import { Injectable } from '@angular/core';
import { Customer } from '../models/customer';
import jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  
  currentCustomer: string = 'currentCustomer';
  tokenKey = "token"
  constructor() { }

  setItem(key:string, value:any){localStorage.setItem(key,value);}
  getItem(key:string){return localStorage.getItem(key);}
  deleteItem(key:string){localStorage.removeItem(key);}
  clear(){localStorage.clear();}

  get isLocalStorageSupported(): boolean{return !!localStorage}

  getLocalStorage(key:string){
    return localStorage.getItem(key);
  }
  getCurrentCustomer():Customer{
    return JSON.parse(localStorage.getItem(this.currentCustomer));
  }
  setCurrentCustomer(customer : Customer){
    localStorage.setItem(this.currentCustomer,JSON.stringify(customer));
  }
  removeCurrentCustomer(){
    localStorage.removeItem(this.currentCustomer);
  }
  setToken(token:string){
    localStorage.setItem(this.tokenKey,token);
  }
  getToken(){
    return localStorage.getItem(this.tokenKey);
  }
  removeToken(){
    localStorage.removeItem(this.tokenKey);
  }
  getUserNameDecodeToken(){
    let token = this.getLocalStorage("token");
    let name : string = String(Object.values(jwtDecode(token))[2]);
    return name;
    }
    removeLocalStorage(key:string)
    {
      return localStorage.removeItem(key);
    }
  
    getIdDecodeToken()
    {
      let token = this.getLocalStorage("token");
      let id:number = Number(Object.values(jwtDecode(token))[0]);
      return id;
    }
    
    getMailDecodeToken()
    {
      let token =this.getLocalStorage("token");
      let mail:string = String(Object.values(jwtDecode(token))[1]);
      return mail;
    }
}
