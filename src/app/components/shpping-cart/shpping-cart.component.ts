import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartItem } from 'src/app/models/model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-shpping-cart',
  templateUrl: './shpping-cart.component.html',
  styleUrls: ['./shpping-cart.component.css']
})
export class ShppingCartComponent implements OnInit {

  cartList: CartItem[] = [];
  name = '';
  address = '';
  cardNumber = '';
  totalMoney = 0;

  constructor(private router: Router, private productService: ProductService) { }

  ngOnInit() {
    this.cartList = this.productService.cartList;
    this.totalMoney = this.getTotalMoney(this.cartList);
  }

  onSubmit() {
    const navigationData = { total: this.totalMoney, name: this.name };
    this.router.navigate(['/confirmation'], { state: navigationData });
    this.productService.clearCart();
  }

  changeAmount(item: CartItem) {
    this.totalMoney = this.getTotalMoney(this.cartList);
  }

  getTotalMoney(cartList: CartItem[]) {
    let totalMoney = 0;
    cartList.forEach((item) => {
      totalMoney += item.amount * item.price;
    });
    return Number(totalMoney.toFixed(2));
  }

  changeCardNumberValidate(e: { key: any; }) {
    const pattern = /^[0-9]*$/;
    return pattern.test(e.key);
  }

}
