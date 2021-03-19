import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarImage } from 'src/app/models/carImage';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarService } from 'src/app/services/car.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {


  cars:Car[];
  images : CarImage[];
  imageUrl = environment.baseURL;
  
  constructor(private carService:CarService,
    private activatedRoute:ActivatedRoute,
    private carImageService:CarImageService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if(params["carId"]){
        this.getCarDetails(params["carId"]);
        this.getCarImagesByCarId(params["carId"]);
      }
    })
    
  }
  getCarDetails(carId:number){
    this.carService.getCarDetail(carId).subscribe(response=>{
      this.cars=response.data
    })
  }
  getCarImagesByCarId(carId:number){
    this.carImageService.getCarImagesByCarId(carId).subscribe(response=>{
      this.images=response.data;
    })

  }
  getBack(){
    this.carService.getCars();
  }
  getSliderClassName(index:number){
    if(index==0){
      return "carousel-item active"
    }
    else{
      return "carousel-item"
    }
  }

}
