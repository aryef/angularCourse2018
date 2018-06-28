import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';

const routes:Routes=[

{path:"home", component:MainComponent},
{path:"about", component:AboutComponent}

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
