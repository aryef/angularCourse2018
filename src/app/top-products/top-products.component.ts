import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-top-products',
  templateUrl: './top-products.component.html',
  styleUrls: ['./top-products.component.css']
})
export class TopProductsComponent implements OnInit {

    public products:Product[];
  constructor() { }

  ngOnInit() {

    this.products=[];
    this.products.push(new Product(1, "Apple", 3.5,100));
    this.products.push(new Product(2, "Banana", 2.5,200));
    this.products.push(new Product(3, "Peach", 4.5,300));

  }

}
