import { Component, Input } from '@angular/core';
import { IProduct } from 'src/app/mocks/products';

@Component({
  selector: 'app-products-category',
  templateUrl: './products-category.component.html',
  styleUrls: ['./products-category.component.css']
})
export class ProductsCategoryComponent {



  @Input() products!: IProduct[];
  @Input() category!: String;

  constructor() {}

}
