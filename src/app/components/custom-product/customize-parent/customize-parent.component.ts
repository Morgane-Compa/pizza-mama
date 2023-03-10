import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IIngredient, INGREDIENTS } from 'src/app/mocks/ingredients';
import { IProduct, IProductsByCategory, PRODUCTS } from 'src/app/mocks/products';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-customize-parent',
  templateUrl: './customize-parent.component.html',
  styleUrls: ['./customize-parent.component.css']
})


export class CustomizeParentComponent {

   // je récupère les donnes de mes mocks
   product: IProductsByCategory[] = PRODUCTS;
  //  products: IProductsByCategory[] = [];
   productDetail?: IProductsByCategory;
   extras: IIngredient[] = INGREDIENTS;

   singleProduct!: any;

   //on importe nos services
   constructor(
    private cartService: CartService,
    public productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private router: Router
    ) {}


   // on initialise nos deux services
   ngOnInit(): void {

    //  this.products = this.pruductService.getProducts()
     this.getProduct();

   }

   public getProduct() {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.singleProduct = this.productService.getProduct(id);
    console.log(this.singleProduct);

   }




   addProduct(){

   }


}
