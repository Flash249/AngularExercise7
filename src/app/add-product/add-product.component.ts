import { GetProductDataService } from './../get-product-data.service';
import { Component, OnInit } from '@angular/core';
import { productsClass } from '../productsClass';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private GetProductDataService: GetProductDataService) { }
  public newItem!: productsClass;

  items: any;

  ngOnInit(): void {
    this.newItem = new productsClass();
  }
  createPost() {
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
    )
  }

}
