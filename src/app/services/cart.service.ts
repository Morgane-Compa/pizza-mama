import { Injectable } from '@angular/core';
import { IProduct } from '../mocks/products';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }



  // on récupère nos données, en l'occurence les plats, les boissons et les desserts
  public getProduct() {
    const product = localStorage.getItem("product");

    // si product existe, le retourner si non créer un nouvel élève et recommencer
    if(product) {
      return JSON.parse(product);
    } else {
      this.createProduct(); 
      this.getProduct(); 
    }

  }




      //on créé nos produits 
      private createProduct() {

        const newProduct = JSON.stringify([]);
        localStorage.setItem('IProduct', newProduct);
      }

      



    //on créé une fonction pour sauvegarder nos produits
    private saveProduct(products: IProduct) {

      localStorage.setItem('student', JSON.stringify(products));
    }




  //on ajoute nos produits a notre localStorage et on savegarde
  public addProduct(addedProducts: IProduct){

    const product= this.getProduct() 
    product.push(addedProducts)

    this.saveProduct(product) 
  }


  // si on veut supprimer un produit de notre student et on sauvegarde notre modification
  public removeProduct(idProduct: number){
    const product = this.getProduct() 
    product .splice(idProduct, 1)
    this.saveProduct(product);
  }


}



