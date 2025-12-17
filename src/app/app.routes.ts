import { Routes } from '@angular/router';
import { Home } from './myComponents/home/home';
import { Products } from './myComponents/products/products';
import { ProductDetail } from './myComponents/product-detail/product-detail';
import { NotFound } from './myComponents/not-found/not-found';


//Routelarımızın tanımlamaları asagıda yapılır
export const routes: Routes = [
//1) Ana sayfa
//path:'' => root url (örn : http://localhost:4200/)
{path:'',component:Home},

{path:'products',component:Products},


//:id => dinamik segment demektir. Bu sekilde verdiginiz  degerler ActivateRoute ile okunur...
{path:'products/:id',component:ProductDetail},

//Opsiyoneldir ama olacaksa en son olarak tanımlanması gerekir

{path:'**',component:NotFound}





];
