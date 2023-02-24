import { Component, OnInit } from '@angular/core';
import { IProduct, IProductsByCategory, PRODUCTS, TagType } from 'src/app/mocks/products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public products!: IProductsByCategory[];
  public newProducts!: IProductsByCategory[];

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

  public filteredTags: TagType[] = [];

  constructor() { }

  ngOnInit(): void {

    this.products = PRODUCTS;

   }

   init(tabs: IProductsByCategory[]) {
    this.products = tabs
  }

  public filterProductsWithTag() {
    //Changer la fonction pour vérifier si le produit comporte un des tags sélectionnés

    // this.newProducts = this.products.flatMap(element => element.products.filter(product => product.tags.some(t => t == value.title))) as unknown as IProduct[];

  const copiedTag = this.allTags.filter((tag, index) => {
    return tag.isSelected == true;
  })

    const copy = PRODUCTS.map(category => {
      return {
        ...category,
        products: category.products.filter(product => {
           return copiedTag.some(tag => product.tags.includes(tag.title))
         })
      }
    });

    const copiedProduct = Object.assign([], copy);

    console.log(copiedProduct);

    this.products = copiedProduct;

  }

}
