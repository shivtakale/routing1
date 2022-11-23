import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Iproduct } from 'src/app/model/data';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  product:Iproduct | undefined;
  productId:number= 1;
  constructor(private productService:ProductService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.productId= +this.route.snapshot.params['id'];
    // console.log(this.productId);
    this.route.params.subscribe((myParams:Params)=>{
      this.productId= +myParams['id']
    this.product=this.productService.getProduct(this.productId)

    })
  }

}
