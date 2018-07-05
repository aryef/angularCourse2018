import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private productsService: ProductsService) { }

 private products:Product[];
  ngOnInit() {

    this.productsService.getAllProducts().subscribe(products => this.products= products);
    
  }

}
