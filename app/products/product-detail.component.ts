import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from './product';

@Component({
  selector:  'pm-product',
  moduleId: module.id,
  templateUrl: 'product-detail.component.html'
})

export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Detail';
  product: IProduct;

  constructor(private _route: ActivatedRoute,
              private _router: Router) {
  }

  onBack(): void {
    this._router.navigate(['/products']);
  }

  ngOnInit(): void {
    let id = +this._route.snapshot.params['id'];
    this.pageTitle += `: ${id}`
  }
}
