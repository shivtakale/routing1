import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../model/data';
import { ProductService } from '../shared/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
 products!: Iproduct[]
  activeId:number=1;
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.products = this.productService.getAllProducts()
  }

}
