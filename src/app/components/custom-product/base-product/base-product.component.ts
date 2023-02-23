import { Component, Input } from '@angular/core';
import { IIncludedIngredient } from 'src/app/mocks/products';

@Component({
  selector: 'app-base-product',
  templateUrl: './base-product.component.html',
  styleUrls: ['./base-product.component.css']
})
export class BaseProductComponent {

  @Input() ingredients!: IIncludedIngredient[];

  ngOnInit(): void {
 
    console.log(this.ingredients) 
   }

  

}
