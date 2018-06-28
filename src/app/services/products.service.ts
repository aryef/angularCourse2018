import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
 


  public getTopProducts(): Product[]{

    let products:Product[] =[];
    products.push(new Product(1, "Apple", 3.5,100));
    products.push(new Product(2, "Banana", 2.5,200));
    products.push(new Product(3, "Peach", 4.5,300));
        return products;
  }
}
