import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  cars : Car[] = [];
  constructor(private carService : CarService) { }

  ngOnInit(): void {
    this.getCars();
  }
  getCars(){
    this.carService.getCars().subscribe((response)=>{
      this.cars = response.data
    });
    
  }

}
