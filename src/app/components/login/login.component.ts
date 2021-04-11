import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from "@angular/forms"
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Customer } from 'src/app/models/customer';
import { AuthService } from 'src/app/services/auth.service';
import { CustomerService } from 'src/app/services/customer.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup;
  customer : Customer;
  isAuth : boolean;
  
  constructor(private formBuilder:FormBuilder,
    private authService : AuthService,
    private toastrService : ToastrService,
    private customerService : CustomerService,
    private localStorageService : LocalStorageService,
    private router : Router) { }

  ngOnInit(): void {
    this.createLoginForm();
  }
  createLoginForm(){
    this.loginForm = this.formBuilder.group({
      email : ["",Validators.required],
      password : ["",Validators.required]

    })
  }
  login(){
    if(this.loginForm.valid){
      console.log(this.loginForm.value);
      let loginModel  = Object.assign({},this.loginForm.value)
      
      this.authService.login(loginModel).subscribe(response =>{
        this.getCustomerByEmail(loginModel.email);
        this.localStorageService.setToken(response.data.token)
        this.toastrService.success(response.messaage);
       
        return this.router.navigate(['/cars'])
      },responseError=>{
        this.toastrService.error(responseError.error);
      });
    }
  }
  
  getCustomerByEmail(email:string){
    this.customerService.getCustomerByEmail(email).subscribe(response =>{
      this.customer = response.data;
      console.log(response.data.firstName);
      this.localStorageService.setCurrentCustomer(this.customer);
      
    })
  }
}
