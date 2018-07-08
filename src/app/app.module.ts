import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { HeadlineComponent } from './headline/headline.component';
import{FormsModule} from '@angular/forms';
import { AboutComponent } from './about/about.component'
import { RoutingModule } from './routing.module';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { Page404Component } from './page404/page404.component';
import { ThumbnailComponent } from './thumbnail/thumbnail.component';
import { TopProductsComponent } from './top-products/top-products.component';
import { ProductComponent } from './product/product.component';
import { HttpClientModule } from "@angular/common/http";
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { LikeComponent } from './like/like.component';
import { ZeroToSymbolPipe } from './pipes/zero-to-symbol.pipe';
import { ColoredDirective } from './directives/colored.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    HeadlineComponent,
    AboutComponent,
    MenuComponent,
    Page404Component,
    ThumbnailComponent,
    TopProductsComponent,
    ProductComponent,
    ProductListComponent,
    ProductDetailComponent,
    LikeComponent,
    ZeroToSymbolPipe,
    ColoredDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RoutingModule,  //importing our routing module
    RouterModule ,//infra needed for routing
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
