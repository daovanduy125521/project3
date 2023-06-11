import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.css']
})
export class OrderConfirmationComponent implements OnInit {

  totalMoney = 0;
  name = '';

  constructor() { }

  ngOnInit() {
    this.totalMoney = history.state.totalMoney;
    this.name = history.state.name;
  }

}
