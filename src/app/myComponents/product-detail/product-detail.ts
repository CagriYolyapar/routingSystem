import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  imports: [RouterLink],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css',
})
export class ProductDetail {
  private route = inject(ActivatedRoute);

  //Snapshot sayfa acıldıgı anda parametreyi tek sefer alır...
  id = this.route.snapshot.paramMap.get('id');
}
