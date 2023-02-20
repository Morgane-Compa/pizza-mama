import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '/', component: HomeComponent },
  { path: '/products', component: ProductsComponent },
  { path: '/custom-product/:id', component: CustomProductComponent },
  { path: '/cart', component: CartComponent },
  { path: '/command', component: CommandeComponent },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
