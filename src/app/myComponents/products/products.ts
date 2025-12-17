import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

type Product = { id: number; name: string; price: number };

@Component({
  selector: 'app-products',
  imports: [RouterLink],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  products: Product[] = [
    { id: 1, name: 'Ateşleyici', price: 1000 },
    { id: 2, name: 'Koruma kalkanı', price: 10000 },
    { id: 3, name: 'Isınlayıcı', price: 20000 },
  ];
}
