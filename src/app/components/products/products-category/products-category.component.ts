import { Component, Input, OnInit } from '@angular/core';
import { IProductsByCategory, IProduct } from 'src/app/mocks/products';

@Component({
  selector: 'app-products-category',
  templateUrl: './products-category.component.html',
  styleUrls: ['./products-category.component.css']
})
export class ProductsCategoryComponent implements OnInit{


  @Input() productsCategories!: IProductsByCategory[];
  @Input() newProducts!: IProduct[];

  constructor() {}
  ngOnInit(): void {

    console.log('category : ', this.productsCategories);

  }


}
