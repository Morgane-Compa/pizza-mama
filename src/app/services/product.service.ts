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
  getProduct(id: number):  IProductsByCategory | void  {
    console.log(id);
    
    return PRODUCTS.forEach(element => {
     const elem = element.products.find(product => product.id === id
      );
      
      console.log(elem);
      return element;
      
      
    });
  } 

  

}
