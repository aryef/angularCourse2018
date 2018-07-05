import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Observable, Observer } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'  ///makes it global singleton
})
export class ProductsService {
 
    public constructor (private httpClent: HttpClient){}

  public getTopProducts(): Product[]{

    let products:Product[] =[];
    products.push(new Product(1, "Apple", 3.5,100));
    products.push(new Product(2, "Banana", 2.5,200));
    products.push(new Product(3, "Peach", 4.5,300));
        return products;
  }

  public getAllProducts(): Observable<Product[]>
  {
    return this.httpClent.get<Product[]>("/assets/json/products.json");
  }

  public getTopProductsAsync3() : Observable<Product[]> {
      let observable = Observable.create((observer:Observer<Product[]>) =>
      setInterval(function()
      {
          try{

            let products:Product[] = new Array<Product>();
            products.push(new Product(1, "Apple", 3.5,100));
            products.push(new Product(2, "Banana", 2.5,200));
            products.push(new Product(3, "Peach", 4.5,300));
            observer.next(products);

          }
          catch(error)
          {
            observer.error(error);
          }
        }, 2000)
    );
    
          

          return observable;
      }
     
  
}
