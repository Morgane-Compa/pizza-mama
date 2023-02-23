import { Component, OnInit } from '@angular/core';
import { IProduct, IProductsByCategory, PRODUCTS } from 'src/app/mocks/products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public products: IProductsByCategory[] = PRODUCTS;
  public newProducts!: IProduct[];

  public allTags: any[] = [
    {
      title: "tomato",
      isSelected: false,
     },
    {
      title: "white",
      isSelected: false,
     },
    {
      title: "drink",
      isSelected: false,
     },
    {
      title: "veggie",
      isSelected: false,
     },
    {
      title: "dessert",
      isSelected: false,
     },
  ];

  constructor() { }

  ngOnInit(): void {
    console.log('PRODUCT INSIDE OF ONINIT : ',this.products);
  }

  init(products: IProduct[]) {
    this.newProducts = products;
  }

  public filterProductsWithTag(value: any) {
    //Changer la fonction pour vérifier si le produit comporte un des tags sélectionnés
    // filter((product) => product.products.every(product => product.tags.includes(value.title)));

    console.log('VALUE : ', value.title);

    this.newProducts = this.products.map(element => element.products.filter(product => product.tags.some(t => t == value.title))) as unknown as IProduct[];


    console.log("ALL PRODUCTS : ", this.newProducts);

    // this.init(newProducts);

    //this.products = this.newProducts;

    return this.products

    for (let i = 0; i < this.products.length; i++) {
      const element = this.products[i].products;
    }

    //this.newProducts.push(filterProducts);


    //console.log("ALL FILTER: ", filterProducts);

  }

}
