import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CartItem, Product } from 'src/app/models/model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList: Product[] = []
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getData().subscribe((valule) => {
      this.productList = valule;
    });
  }

  addProductToCart(item: CartItem) {
    this.productService.cartList.push(item);
  }
}
