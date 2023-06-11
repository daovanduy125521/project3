import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  @Input() product: Product = {
    id: 0,
    name: '',
    price: 0,
    url: '',
    description: '',
  };
  selectedOption: number = 1;
  options: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit() {
    const id = parseInt(this.route.snapshot.paramMap.get('id') as string);
    this.productService.getData().subscribe((value) => {
      this.product = value.filter((product) => product.id === id)[0];
    });
  }

  addProductToCart(product: Product, amount: number) {
    this.productService.addProductToCart(product, amount);
    alert('Added to cart!');
  }

}
