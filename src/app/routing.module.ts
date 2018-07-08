import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { Page404Component } from './page404/page404.component';
import { TopProductsComponent } from './top-products/top-products.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes:Routes=[

{path:"home", component:MainComponent},
{path:"about", component:AboutComponent},
{path:"top-products", component:TopProductsComponent},
{path:"product-list", component:ProductListComponent},
{path:"one-product/:id", component:ProductDetailComponent},
{path:"contact-us", component:ContactUsComponent},
{path:"", redirectTo:"\home",pathMatch:"full"} ,  //default route
{path: '**', component: Page404Component},

];

@NgModule({
  imports: [
    CommonModule,
    //importing the above routes as a module to this module
    RouterModule.forRoot(routes)
  ],
  declarations: []
})

export class RoutingModule { }
