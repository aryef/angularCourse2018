import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { Page404Component } from './page404/page404.component';
import { TopProductsComponent } from './top-products/top-products.component';

const routes:Routes=[

{path:"home", component:MainComponent},
{path:"about", component:AboutComponent},
{path:"top-products", component:TopProductsComponent},
{path:"", redirectTo:"\home",pathMatch:"full"} ,  //default route

{path: '**', component: Page404Component}
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
