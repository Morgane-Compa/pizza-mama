import { Component } from '@angular/core';
import { IIngredient, INGREDIENTS } from 'src/app/mocks/ingredients';
import { IProductsByCategory, PRODUCTS } from 'src/app/mocks/products';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-custom-product',
  templateUrl: './custom-product.component.html',
  styleUrls: ['./custom-product.component.css']
})
export class CustomProductComponent {

  // je récupère les donnes de mes mocks
  product: IProductsByCategory[] = PRODUCTS;
  extras: IIngredient[] = INGREDIENTS;

  constructor( private cartService: CartService) {}


  ngOnInit(): void {

    this.product= this.cartService.getProduct()
  }


  addProduct(){

    this.product= this.cartService.getProduct()
    console.log(this.product);
  }



  removeProduct(idProduct: number): void{

    this.cartService.removeProduct(idProduct);
    this.product= this.cartService.getProduct()
  }


}
