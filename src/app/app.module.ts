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
import { ProductsCategoryComponent } from './components/products/products-category/products-category.component';
import { TagsComponent } from './components/products/tags/tags.component';
import { ProductCardComponent } from './components/products/product-card/product-card.component';

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
    ProductsCategoryComponent,
    TagsComponent,
    ProductCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
