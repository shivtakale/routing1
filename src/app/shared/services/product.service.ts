import { Injectable } from '@angular/core';
import { Iproduct } from 'src/app/model/data';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
productArray: Iproduct[]=[
  {
    pName:"Samsung",
    pid:1,
    pStatus:"In process",
    canEdit:1
  },
  {
    pName:"Apple",
    pid:2,
    pStatus:"Dispatched",
    canEdit:0
  },
  {
    pName:"Asus",
    pid:3,
    pStatus:"Shipped",
    canEdit:1
  }
]
  snapshot: any;
  constructor() { }
  getAllProducts():Iproduct[]{
    return this.productArray
  }

  getProduct(id:number){
    return this.productArray.find(prod=>prod.pid===id)
  }
}
