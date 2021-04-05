import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder, FormControl, Validators} from "@angular/forms"
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';
/*
FormBuilder : HTML'deki form ile ts'dekini yapılandırmamızı sağlar.
FormControl : HTML'deki giriş yapılabilecek her bir alana takabül etmektedir.
FormGroup : FormControlleri içeren bir formGroup.

*/
@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css']
})
export class CarAddComponent implements OnInit {

  carId : number;
  brands:Brand[];
  colors:Color[];
  carAddForm : FormGroup;

  constructor(private formBuilder:FormBuilder, 
    private carService:CarService,
    private toastrService : ToastrService,
    private brandService : BrandService,
    private colorService : ColorService) { }

  ngOnInit(): void {
    this.getBrands();
    this.getColors();
    this.createCarAddForm();
  }
  //Araba eklerken formda olmasını istediğimiz araçları buraya entegre edicez.
  createCarAddForm(){
    this.carAddForm = this.formBuilder.group({
      description : ["",Validators.required],
      dailyPrice : ["",Validators.required],
      brandId:["",Validators.required],
      colorId:["",Validators.required],
      modelYear:["",Validators.required],
      imagePath : ["",Validators.required]
    })
  }
  add(){
    if(this.carAddForm.valid){
      let carModel = Object.assign({}, this.carAddForm.value)
      this.carService.add(carModel).subscribe(response=>{
        this.toastrService.success(response.messaage,"Başarılı")
      },responseError=>{
        if(responseError.error.Errors.length>0){
          for(let i=0; i<responseError.error.Errors.length; i++){
            this.toastrService.error(responseError.error.Errors[i].ErrorMessage,"Doğrulama Hatası");
          }
        }
      });
    }else{
      this.toastrService.error("Formunuz Eksik","Dikkat");
    }
  }
  getBrands(){
    this.brandService.getBrands().subscribe(response=>{
      this.brands = response.data;
    })
  }
  getColors(){
    this.colorService.getColors().subscribe(response=>{
      this.colors = response.data;
    })
  }
}
