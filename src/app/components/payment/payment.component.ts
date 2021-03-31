import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { Card } from 'src/app/models/card';
import { Customer } from 'src/app/models/customer';
import { Rental } from 'src/app/models/rental';
import { CarService } from 'src/app/services/car.service';
import { CardService } from 'src/app/services/card.service';
import { CustomerService } from 'src/app/services/customer.service';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  rental : Rental;
  cars : Car;
  customer : Customer;
  getCustomerId : number;
  amountOfPayment : number = 0;
  nameOnTheCard : string;
  cardNumber : string;
  cardCvv : string;
  expirationDate : string;
  card : Card;
  cardExist : Boolean = false; 

  constructor(
    private activatedRoute : ActivatedRoute,
    private carService : CarService,
    private customerService : CustomerService,
    private router : Router,
    private toastrService : ToastrService,
    private rentalService : RentalService,
    private cardService : CardService
   
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) =>{
      if(params['rental']){
        this.rental = JSON.parse(params['rental']);
        this.getCustomerId = JSON.parse(params['rental']).customerId;
        this.getCustomerDetailById(this.getCustomerId);
        this.getCarDetail();
      }
    })
  }
  getCustomerDetailById(customerId:number){
    this.customerService.getCustomerById(customerId).subscribe((response) =>{
      this.customer = response.data[0];
      console.log(response);
    });
  }
  getCarDetail(){
    this.carService.getCarDetailsByCarId(this.rental.carId).subscribe((response) =>{
      this.cars = response.data[0];
      this.paymentCalculator();
    });
  }
  paymentCalculator(){
    if(this.rental.returnDate != null){
      var dateReturn = new Date(this.rental.returnDate.toString());
      var dateRent = new Date(this.rental.rentDate.toString());
      var difference = dateReturn.getTime() - dateRent.getTime();

      var numberOfDays = Math.ceil(difference / (1000*3600*24));

      this.amountOfPayment = numberOfDays * this.cars.dailyPrice;
      if(this.amountOfPayment <= 0){
        this.router.navigate(['/cars']);
        this.toastrService.error(
          "Araç listesine yönlendiriliyorsunuz.",
          "Hatalı işlem"
        );
      }
    }
  }
  async rentACar(){
    let paymentCard : Card = {
      nameOnTheCard : this.nameOnTheCard,
      cardNumber : this.cardNumber,
      expirationDate : this.expirationDate,
      cardCvv : this.cardCvv,
    };
    this.cardExist = await this.isCardExist(paymentCard);
    if(this.cardExist){
      this.card = await this.getCardByCardNumber(this.cardNumber);
      if(paymentCard.moneyInTheCard >= this.amountOfPayment){
        paymentCard.moneyInTheCard - this.amountOfPayment;
        this.updateCard(paymentCard);
        this.rentalService.addRental(this.rental);
        this.toastrService.success('Arabayı kiraladınız.' , 'İşlem başarılı');
      }
      else{
        this.toastrService.error("Kartınızda yeterli bakiye bulunmamaktadır." , "Hata");
      }
    }
    else{
      this.toastrService.error('Bankanız bilgilerinizi onaylamadı.',"Hata");
    }
  }
  async isCardExist(card : Card){
    return (await this.cardService.isCardExist(card).toPromise()).success;
  }
  async getCardByCardNumber(cardNumber:string){
    return (await this.cardService.getCardByNumber(cardNumber).toPromise()).data[0];
  }
  updateCard(card:Card){
    this.cardService.updateCard(card);
  }

}
