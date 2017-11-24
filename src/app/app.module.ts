import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {routing, appRoutingProviders} from './app.routing';

import { AppComponent } from './controller/app.component';
import { MenuComponent } from './controller/menu.component';
import { SliderComponent } from './controller/slider.component';
import { CategoryComponent } from './controller/category.component';
import { PromoComponent } from './controller/promo.component';
import { PackageComponent } from './controller/package.component';
import { FooterComponent } from './controller/footer.component';
import { HomeComponent } from './controller/home.component';
import { LoginComponent } from './controller/login.component';
import { RegisterComponent } from './controller/register.component';
import { UserComponent } from './controller/user.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SliderComponent,
    CategoryComponent,
    PromoComponent,
    PackageComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
