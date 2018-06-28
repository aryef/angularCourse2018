import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-top-products',
  templateUrl: './top-products.component.html',
  styleUrls: ['./top-products.component.css']
})
export class TopProductsComponent implements OnInit {

    public products:Product[];
  constructor( private productsService: ProductsService) { }

   ngOnInit() {

    this.products=this.productsService.getTopProducts()

  }

}
