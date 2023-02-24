import { Component, Input } from '@angular/core';
import { IExtraIngredient, IProduct, PRODUCTS } from 'src/app/mocks/products';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-product-extra',
  templateUrl: './product-extra.component.html',
  styleUrls: ['./product-extra.component.css']
  
})
export class ProductExtraComponent {


  extra!: IExtraIngredient[];

// j'aurais aimé récupérer le quantity du mock dans cette variable mais je n'y arrove pas
  number: number = 0;
 
  // je créer un input pour récupérer le mock et le transmettre dans mon html (pour faire une boucle sur mes extras)
  @Input() extras!: IExtraIngredient[];
  product: any;

constructor(public productService: ProductService) {}

  ngOnInit(): void {
 
    // this.alphabetOrder();
    console.log(this.extras) 
   }


   // Trie du tableau par ordre alphabétique des noms de produits (enfin j'essaie parce que ça fonctionne pas mais je la laisse pour te montrer que j'ai essayé, je le met juste en commentaire parce que ça ne fonctionne pas)
  // alphabetOrder() {
  //   return this.product.extras.sort((a: { ingredient: { title: string; }; }, b: { ingredient: { title: any; }; }) => a.ingredient.title.localeCompare(b.ingredient.title));
  // }



  //pour ajouter un extra
  // je pense qu'il aurait fallut que je récupère la quantity dans ma variable number ainsi que la maxQuantity dans une autre variable et qu'en suite je rajoute une condition pour que number ne dépasse pas maxQuantity
  addExtra() {
    this.number++;
  }


  //pour enlever un extra
  // la encore jaurai aimé récupérer la valeur de quantity du mock mais je n'ai pas réussi
  removeExtra() {

    if (this.number >= 0) {
      this.number--;
    }
  }

}
