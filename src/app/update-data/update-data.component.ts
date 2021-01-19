import { productsClass } from './../productsClass';
import { GetProductDataService } from './../get-product-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-data',
  templateUrl: './update-data.component.html',
  styleUrls: ['./update-data.component.css']
})
export class UpdateDataComponent implements OnInit {

  ProductNames!: string;
  ProductCode!: string;
  BranchName!: string;
  BranchCode!: string;
  ShippingAddress!: string;
  newItem!: productsClass;
  items: any;
  constructor(private GetProductDataService: GetProductDataService) { }

  ngOnInit(): void {
  }
  updateData(event: any){
    this.ProductNames = event.productName;
    this.ProductCode = event.productCode;
    this.BranchName = event.branchName;
    this.BranchCode = event.branchCode;
    this.ShippingAddress = event.shippingAddress;
  }
  updatePost() {
    let post = {
       productName : this.newItem.productName,
       productCode : this.newItem.productCode,
       branchName : this.newItem.branchName,
       branchCode : this.newItem.branchCode,
       shippingAddress : this.newItem.shippingAddress
    }
console.log("adding");
this.GetProductDataService.addProduct(post).subscribe(
   (response : any) => {
    this.items.splice(0, 0, post);
    console.log(response);
  }
  )}

}
