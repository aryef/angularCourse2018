import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Observable, Observer } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { NgRedux } from 'ng2-redux';
import {AppState} from '../redux/app.state';
import { ActionType } from '../redux/actions';

@Injectable({
    providedIn: 'root'  ///makes it global singleton
})
export class ProductsService {

    public constructor(private httpClent: HttpClient, private ngRedux: NgRedux<AppState>) { }

    public downloadAllProduct():void{

        this.httpClent.get<Product[]>("/assets/json/products.json").subscribe(products =>
        {
            this.ngRedux.dispatch({ type:ActionType.AllProductsDownloaded, payload: products
            });
        });
    }

    public addOneProduct(product: Product):void {

        //sending product to the server
        //adding product to the local store
        this.ngRedux.dispatch({type: ActionType.OneProductAdded, payload: product
        });
    }

    public getTopProducts(): Product[] {

        let products: Product[] = [];
        products.push(new Product(1, "Apple", 3.5, 100));
        products.push(new Product(2, "Banana", 2.5, 200));
        products.push(new Product(3, "Peach", 4.5, 300));
        return products;
    }

    public getAllProducts(): Observable<Product[]> {
        return this.httpClent.get<Product[]>("/assets/json/products.json");
    }

    public getTopProductsAsync3(): Observable<Product[]> {
        let observable = Observable.create((observer: Observer<Product[]>) => {
            setInterval(function () {
                try {

                    let products: Product[] = new Array<Product>();
                    products.push(new Product(1, "Apple", 3.5, 100));
                    products.push(new Product(2, "Banana", 2.5, 200));
                    products.push(new Product(3, "Peach", 4.5, 300));
                    observer.next(products);

                }
                catch (error) {
                    observer.error(error);
                }
            }, 2000);
        });
        return observable;
    }


}
