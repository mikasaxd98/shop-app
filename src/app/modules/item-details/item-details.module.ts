import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemDetailsContainerComponent } from './components/item-details-container/item-details-container.component';
import { ItemDetailsRoutingModule } from './item-details-routing.module';



@NgModule({
  declarations: [
    ItemDetailsContainerComponent,
  ],
  imports: [
    CommonModule,
    ItemDetailsRoutingModule
  ]
})
export class ItemDetailsModule { }
