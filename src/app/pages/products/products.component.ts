import { Component, OnInit } from '@angular/core';
import { IProduct, PRODUCTS } from 'src/app/mocks/products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public products: IProduct[] = PRODUCTS;

  // public categories: String[] = ["pizza", "dessert", "boisson"];

  public pizzaProduct: IProduct[] = [];
  public dessertProduct: IProduct[] = [];
  public boissonProduct: IProduct[] = [];

  public allCategories: String[] = [];

  public allTags: string[] = ["tomato" , "white" , "drink" , "veggie" , "dessert"];
// Creer un tableau de tags
// tags = [{
 // title: "tomato",
 // isSelected: false,
// }]
  public allFilteredProducts: IProduct[] = [];


  constructor() { }

  ngOnInit(): void {
    console.log(this.products);

    this.getProductByCategory();

    this.allFilteredProducts = this.products;

    this.allCategories = Array.from(new Set(this.allCategories));
  }



  public filterProductsWithTag(value: any) {
    // Changer la fonction pour vérifier si le produit comporte un des tags sélectionnés
    this.allFilteredProducts = this.products.filter(product => {
      return product.tags.includes(value);
    });


    console.log("ALL : ", this.allFilteredProducts);

  }


  public getProductByCategory() {

    for (let i = 0; i < this.products.length; i++) {
      const element = this.products[i];
      this.allCategories.push(element.category);

      if(element.category == "pizza") {
        this.pizzaProduct.push(element);
      }

      if(element.category == "dessert") {
        this.dessertProduct.push(element);
      }

      if(element.category == "drink") {
        this.boissonProduct.push(element);
      }

      }
    }


}
