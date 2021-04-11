import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm : FormGroup;
  constructor(
    private formBuilder : FormBuilder,
    private authService : AuthService,
    private toastrService : ToastrService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.createRegisterForm();
  }
  createRegisterForm(){
    this.registerForm = this.formBuilder.group({
      firstName : ["",Validators.required],
      lastName : ["",Validators.required],
      email : ["",Validators.required],
      password : ["",Validators.required]
    })
  }

  register(){
    if(this.registerForm.valid){
      console.log(this.registerForm.value)
      let registerModel = Object.assign({},this.registerForm.value)
      this.authService.register(registerModel).subscribe(response=>{
        this.toastrService.success(response.messaage)
        this.router.navigate(['/login']);
      },errorResponse=>{
        this.toastrService.error(errorResponse.error);      })
    }
  }

}
