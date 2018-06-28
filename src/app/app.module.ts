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
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    HeadlineComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RoutingModule,  //importing our routing module
    RouterModule //infra needed for routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
