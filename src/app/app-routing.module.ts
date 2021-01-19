import { UpdateDataComponent } from './update-data/update-data.component';
import { PostDataComponent } from './post-data/post-data.component';
import { AddProductComponent } from './add-product/add-product.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'addProduct', component:AddProductComponent},
  {path: 'productData', component:PostDataComponent},
  {path: 'productData/updateData', component:UpdateDataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
