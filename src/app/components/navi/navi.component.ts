import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Customer } from 'src/app/models/customer';
import { AuthService } from 'src/app/services/auth.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {

  control : any;
  userName : string;

  constructor(private router : Router,
    private toastrService : ToastrService,
    private authService : AuthService,
    private localStorageService : LocalStorageService
   ) { }

  ngOnInit(): void {
    this.control = this.localStorageService.getItem("isauth");
    this.getUserName();
    
  }
  isAuth(): boolean {
    return this.authService.isAuthenticated();
  }
  logout(){
    this.localStorageService.removeToken();
    this.localStorageService.removeCurrentCustomer();
    return this.router.navigate(["/login"]);
  }
  getCurrentCustomer(): Customer {
    return this.localStorageService.getCurrentCustomer();
  }
  getUserName(){
    this.userName = this.localStorageService.getUserNameDecodeToken();
  }
}
