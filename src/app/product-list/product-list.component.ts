import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Product } from '../models/product';
import { LikeService } from '../services/like.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {
   

  constructor(private productsService: ProductsService, private likesService:LikeService) { }

 private products:Product[];
  ngOnInit() {

    this.productsService.getAllProducts().subscribe(products => this.products= products);
    
  }

  ngOnDestroy(): void {

    this.likesService.resetLikes(); 
      
}

}
