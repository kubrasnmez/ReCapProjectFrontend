import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from 'src/app/models/car';
import { Customer } from 'src/app/models/customer';
import { Rental } from 'src/app/models/rental';
import { CarService } from 'src/app/services/car.service';
import { CustomerService } from 'src/app/services/customer.service';


@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {

  customers:Customer[];
  chosenCustomer:Customer;
  chosenCar : Car;
  rentDate: Date;
  returnDate : Date;
  private order : Rental;

  constructor(
    private router:Router,
    private customerService:CustomerService,
    private carService : CarService,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.getCarDetails(params['carId']);
    });
    this.getCustomers();
  }
  getCustomers(){
    this.customerService.getCustomers().subscribe((response)=>{
      this.customers = response.data;
    });
  }
  getCarDetails(id:number){
    this.carService.getCarDetail(id).subscribe((response)=>{
      this.chosenCar = response.data;
    });
  }
  initialDate(day:number){
    var today = new Date();
    today.setDate(today.getDate() + day);
    return today.toISOString().slice(0,10);
  }
  
  goToPayment(){
    /*
    this.order = {
      carId : this.chosenCar.carId,
      customerId : this.chosenCustomer.customerId,
      rentDate : this.rentDate,
      returnDate : this.returnDate,
    };
    if(!this.order.rentDate){
      this.router.navigate(['cars/detail/{{carId}}']);
    }
    this.router.navigate(['/payment/',JSON.stringify(this.order)]);
    */
  }
}

