import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from '../models/product';
import { ProductsService } from '../services/products.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-top-products',
    templateUrl: './top-products.component.html',
    styleUrls: ['./top-products.component.css']
})
export class TopProductsComponent implements OnInit, OnDestroy {



    public products: Product[] = [];

    private subscription: Subscription;

    constructor(private productsService: ProductsService) { }

    ngOnInit() {
        //suing Observable technique

        this.subscription = this.productsService.getTopProductsAsync3().subscribe(products => {
            for (let i = 0; i < products.length; i++) {
                this.products.push(products[i]);
            }
        }, error => alert("vasya ein ntumin" + error.message),
            () => console.log("DOne!")
        );
    }

    ngOnDestroy(): void {

        this.subscription.unsubscribe();
    }

}
