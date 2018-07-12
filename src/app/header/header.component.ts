import { Component, OnInit, OnDestroy } from '@angular/core';
import { LikeService } from '../services/like.service';
import { Subscription } from 'rxjs';
import { ProductsService } from '../services/products.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
   

    public likes: number=0;
  constructor(private likeService:LikeService, private productsService:ProductsService) { }

  private subscription: Subscription;


  public addProduct():void{

    this.productsService.addOneProduct(this.getRandomProduct());

  }
  ngOnInit() {
      this.subscription = this.likeService.likesReporter.subscribe(count=>{
          if(count===undefined)
          {
              this.likes = 0;
          }
          else{
          this.likes+=count;

          }
      });
  }

  ngOnDestroy(): void {
        
    this.subscription.unsubscribe();
  }

  private getRandomProduct(): Product {
    let letters: string[] = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];
    let id: number = Math.floor(Math.random() * 77 + 1);
    let name: string = "";
    for (let i = 0; i < 5; i++) {
        name += letters[Math.floor(Math.random() * letters.length)];
    }
    let price: number = parseFloat((Math.random() * 200).toFixed(2));
    let stock: number = Math.floor(Math.random() * 200);
    let product: Product = new Product(id, name, price, stock);
    return product;
}

}
