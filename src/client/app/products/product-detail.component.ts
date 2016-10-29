import { Component, OnInit } from '@angular/core';
import { Router,Params, ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';

import { IProduct } from './product';
import { ProductService } from './product.service';
import { StarComponent } from '../shared/star.component';

@Component({
    templateUrl: '/products/product-detail.component.html',
    providers: [ProductService]
})
export class ProductDetailComponent implements OnInit {
    pageTitle: string = 'Product Detail';
    product: IProduct;
    errorMessage: string;

    constructor(private _productService: ProductService,
        private _router: Router,
        private _route: ActivatedRoute) {
    }

    ngOnInit() {
        if (!this.product) {
            this._route.params.forEach((params: Params) => {
                let id = params["id"];
                this.getProduct(id);
            })
        }
    }

    getProduct(id: number) {
        this._productService.getProduct(id)
            .subscribe(
            product => this.product = product,
            error => this.errorMessage = <any>error);
    }

    onBack(): void {
        this._router.navigate(['Products']);
    }

}
