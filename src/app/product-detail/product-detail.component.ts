import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) {


   }

  ngOnInit() {
      let id: number = parseInt( this.activatedRoute.snapshot.params["id"]);
      console.log(id);
  }

}
