import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-car-update',
  templateUrl: './car-update.component.html',
  styleUrls: ['./car-update.component.css']
})
export class CarUpdateComponent implements OnInit {

  brands : Brand[];
  colors : Color[];
  car : Car;
  carUpdateForm : FormGroup;

  constructor(
    private formBuilder : FormBuilder,
    private carService : CarService,
    private colorService : ColorService,
    private brandService : BrandService,
    private toastrService : ToastrService,
    private activatedRoute : ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.createCarUpdateForm();
    this.getBrands();
    this.getColors();
    this.activatedRoute.params.subscribe(params =>{
      if(params["carId"]){
        this.getCarById(params["carId"])
      }
    })
  }

  createCarUpdateForm(){
    this.carUpdateForm = this.formBuilder.group({
      description : ["",Validators.required],
      brandId : ["",Validators.required],
      modelYear : ["",Validators.required],
      dailyPrice : ["",Validators.required],
      colorId: ["",Validators.required]
    })
  }
  getCarById(carId:number){
    this.carService.getById(carId).subscribe(response =>{
      this.car = response.data;
    })
  }
  updateCar(){
    if(this.carUpdateForm.valid){
      let carModel = Object.assign({},this.carUpdateForm.value)
      carModel.carId = this.car.carId
      this.carService.update(carModel).subscribe(response =>{
        this.toastrService.success(response.messaage)
      },responseError =>{
        this.toastrService.error(responseError.messaage)
      })
    }else{
      this.toastrService.error("Form eksik","Hata")
    }
  }
  getColors(){
    this.colorService.getColors().subscribe(response=>{
      this.colors = response.data;
    })
  }
  getBrands(){
    this.brandService.getBrands().subscribe(response=>{
      this.brands = response.data;
    })
  }

}
