import { HttpClient, HttpClientModule } from '@angular/common/http';
import { GetProductDataService } from './get-product-data.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostDataComponent } from './post-data/post-data.component';
import { AddProductComponent } from './add-product/add-product.component';

@NgModule({
  declarations: [
    AppComponent,
    PostDataComponent,
    AddProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [GetProductDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
