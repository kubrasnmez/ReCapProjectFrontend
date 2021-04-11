import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer';
import { ItemResponseModel } from '../models/itemResponseModel';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  apiUrl = "https://localhost:44359/api/"

  constructor(private httpClient : HttpClient) { }

  getCustomers():Observable<ListResponseModel<Customer>>{
    let newPath = this.apiUrl + 'customers/getcustomerdetail';
    return this.httpClient.get<ListResponseModel<Customer>>(newPath);
  }
  getCustomerById(customerId : number) : Observable<ListResponseModel<Customer>>{
    let newPath = this.apiUrl + 'customers/getcustomerdetailbyid?customerId=' + customerId;
    return this.httpClient.get<ListResponseModel<Customer>>(newPath);
  }
  getCustomerByEmail(email:string):Observable<ItemResponseModel<Customer>>{
    let newPath=this.apiUrl+"getcustomerbyemail?email="+email;
    return this.httpClient.get<ItemResponseModel<Customer>>(newPath);
  }
  customerUpdate(customer:Customer):Observable<ResponseModel>{
    let newPath="https://localhost:44342/api/customers/updatecustomer";
    return this.httpClient.put<ResponseModel>(newPath,customer);
}
}