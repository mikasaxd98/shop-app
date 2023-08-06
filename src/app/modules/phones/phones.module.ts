import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhonesContainerComponent } from './components/phones-container/phones-container.component';
import { PhonesRoutingModule } from './phones-routing.module';



@NgModule({
  declarations: [
    PhonesContainerComponent
  ],
  imports: [
    CommonModule,
    PhonesRoutingModule
  ]
})
export class PhonesModule { }
