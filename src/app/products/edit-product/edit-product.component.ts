import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Iproduct } from 'src/app/model/data';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
  product: Iproduct | undefined;
  productId : number = 123;
  constructor(private productService:ProductService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    // this.productId = this.productService.snapshot.params['id']
    this.route.params.subscribe((params:Params)=>{
      this.productId= +params['id'];
      this.product = this.productService.getProduct(this.productId)
    })
  }

}
