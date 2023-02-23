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

   singleProduct!: IProduct | void;
 
   //on importe nos services
   constructor( 
    private cartService: CartService, 
    private pruductService: ProductService,
    private activatedRoute: ActivatedRoute,
    private router: Router
    ) {}
 
 
   // on initialise nos deux services
   ngOnInit(): void {
 
    //  this.products= this.pruductService.getProducts()
     this.getProduct() 

   }
 
   

   getProduct() {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    // const foundProduct = this.productService.getProductById(id);

    this.pruductService.getProduct(id);

   }

   
   
   //initialisation des methodes du panier via le service
   //pour ajouter un produit au panier
   addProduct(){
 
    //  this.product= this.cartService.getProduct() 
    //  console.log(this.product); 
   }
 
 



}
