/*
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarDetail } from 'src/app/models/car-detail';
import { CarImage } from 'src/app/models/carImage';
import { CarService } from 'src/app/services/car.service';
import { environment } from 'src/environments/environment';
import { CarDetailComponent } from './car-detail/car-detail.component';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  cars : Car[] = [];
  carDetails : CarDetail[] = [];
  carDetail: CarDetail;
  carImages : CarImage[] = [];
  currentCar : Car;
  imageBasePath = environment.baseURL;
  apiURL:'https://localhost:44359/api/';

  //private - sadece bu class'da geçerli
  constructor(private carService : CarService,
    private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
       if(params["brandId"]){
        this.getCarsByBrand(params["brandId"])
      }
      else if (params["colorId"]){
        this.getCarsByColor(params["colorId"])
      }
      else{
        this.getCars();
      }
    })
    
  }
  
  getCars(){
    this.carService.getCars().subscribe(response=>{
      this.cars = response.data 
    })
  }
  getCarsByBrand(brandId:number){
    this.carService.getCarsByBrand(brandId).subscribe(response=>{
      this.cars = response.data 
    })
  }
  getCarsByColor(colorId:number){
    this.carService.getCarsByColor(colorId).subscribe(response=>{
      this.cars = response.data
    })
  }
  getCarClass(car:Car){
    if(car == this.currentCar){
      return "table-info cursorPointer"
    }else{
      return "cursorPointer"
    }
  }
  setCurrentCar(car:Car){
    this.currentCar=car;
    
  }
}
*/
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  cars : Car[] = [];
  imageBasePath  = environment.imageUrl;
  

  constructor(private carService: CarService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

      this.activatedRoute.params
        .subscribe((params) => {
          if(params["brandId"]){
            this.getCarsByBrand(params["brandId"]);
          }
          else if(params["colorId"]){
            this.getCarsByColor(params["colorId"]);
          }
          else{
            this.getCars();
          }
        });
  }

  getCars(){
    this.carService.getCars()
      .subscribe(response => {
        this.cars = response.data;
      });
  }

  getCarsByBrand(brandId: number){
    this.carService.getCarsByBrand(brandId)
      .subscribe((response) => {
        this.cars = response.data;
      });
  }

  getCarsByColor(colorId: number){
    this.carService.getCarsByColor(colorId)
      .subscribe((response) => {
        this.cars = response.data;
      });
  }

  getCarImage(car:Car){

    if(car.imagePath){
      return car.imagePath
    }
    else{
      return 'default.jpg'
    }
  }

}