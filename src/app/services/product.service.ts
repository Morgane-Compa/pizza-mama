import { Injectable } from '@angular/core';
import { IProductsByCategory, PRODUCTS } from '../mocks/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  // on retourne la liste des produits
  getProducts(): IProductsByCategory[] {
    return PRODUCTS;
  }

  //On récupère un seul produits
  getProduct(id: number) {
    
return PRODUCTS.map(element => {
  return element.products.find(product => product.id === id);
})
   
  } 

  public price(value: number) {
    return Number(value/100).toFixed(2)
  }

  

}
