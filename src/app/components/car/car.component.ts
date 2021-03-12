import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  
  product1 = {
    productId: 1,
    productName: 'Bardak',
    categoryId: 1,
    unitPrice: 5
  };
  product2 = {
    productId: 2,
    productName: 'Çatal',
    categoryId: 2,
    unitPrice: 4
  };
  product3 = {
    productId: 3,
    productName: 'Kupa',
    categoryId: 1,
    unitPrice: 10
  };

  products = [this.product1, this.product2, this.product3];
  constructor() { }

  ngOnInit(): void {
  }

}
