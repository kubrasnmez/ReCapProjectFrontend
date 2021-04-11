import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Card } from 'src/app/models/card';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  cards : Card[] = [];

  constructor(private userService : UserService,
    private toastrService : ToastrService,
    private localStorageService : LocalStorageService) { }

  ngOnInit(): void {
    this.getAllCard();
  }
  getAllCard(){
    let customerId = this.localStorageService.getIdDecodeToken();
    this.userService.getAllCard(customerId).subscribe(response => {
      this.cards = response.data;
    })
  }
  deleteCard(cardId : number){
    console.log(cardId);
    this.userService.deleteCard(cardId).subscribe(response => {
      this.toastrService.success(response.messaage, "success");
      window.location.reload();
    }, responseError =>{
        this.toastrService.error(responseError.error.message, "error");
    });
  }

}
