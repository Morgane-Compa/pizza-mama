import { Component, Input } from '@angular/core';
import { IExtraIngredient } from 'src/app/mocks/products';

@Component({
  selector: 'app-product-extra',
  templateUrl: './product-extra.component.html',
  styleUrls: ['./product-extra.component.css']
})
export class ProductExtraComponent {


  extra!: IExtraIngredient[]
  number: number = 0;


  @Input() extras!: IExtraIngredient;

  ngOnInit(): void {
 
    console.log(this.extras) 
   }

  //pour ajouter un extra
  addExtra() {

    this.number++;
  }


  //pour enlever un extra
  removeExtra() {

    if (this.number >= 0) {
      this.number--;
    }
  }

}
