import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../services/products.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

    public product: Product;
  constructor(private activatedRoute: ActivatedRoute, private productsService:ProductsService) {


   }

  ngOnInit() {
      let id: number = parseInt( this.activatedRoute.snapshot.params["id"]);
      console.log(id);
      this.productsService.getAllProducts().subscribe(
          products =>{
              this.product = products.find(p=> p.id === id);
          }
      );
      }
  

}
