import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Product } from '../models/product';
import { LikeService } from '../services/like.service';
import { NgRedux } from 'ng2-redux';
import { AppState } from '../redux/app.state';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {
   

  constructor(private productsService: ProductsService, private likesService:LikeService, private ngRedux:NgRedux<AppState>) { }

    private products:Product[];

  ngOnInit() {

    this.ngRedux.subscribe( () => {
        this.products=this.ngRedux.getState().products;
    });

    //if there are pruducts in the store
    if(this.ngRedux.getState().products)
    {
        this.products=this.ngRedux.getState().products;

    }
    //store is empty
    else{

        this.productsService.downloadAllProduct();
    }
    //this.productsService.getAllProducts().subscribe(products => this.products= products);
    
  }

  ngOnDestroy(): void {

    this.likesService.resetLikes(); 
      
}

}
