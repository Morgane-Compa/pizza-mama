import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { CustomProductComponent } from './pages/custom-product/custom-product.component';
import { CartComponent } from './pages/cart/cart.component';
import { CommandComponent } from './pages/command/command.component';
import { HeaderComponent } from './components/header/header.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { BuonAppetitoComponent } from './components/buon-appetito/buon-appetito.component';
import { CustomizeParentComponent } from './components/custom-product/customize-parent/customize-parent.component';
import { ProductExtraComponent } from './components/custom-product/product-extra/product-extra.component';
import { BaseProductComponent } from './components/custom-product/base-product/base-product.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    CustomProductComponent,
    CartComponent,
    CommandComponent,
    HeaderComponent,
    NavBarComponent,
    BuonAppetitoComponent,
    CustomizeParentComponent,
    ProductExtraComponent,
    BaseProductComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
