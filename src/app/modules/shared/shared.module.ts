import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ProductItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [ProductItemComponent]
})
export class SharedModule { }
