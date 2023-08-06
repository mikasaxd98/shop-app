import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComputersContainerComponent } from './components/computers-container/computers-container.component';
import { ComputersRoutingModule } from './computers-routing.module';



@NgModule({
  declarations: [
    ComputersContainerComponent
  ],
  imports: [
    CommonModule,
    ComputersRoutingModule
  ]
})
export class ComputersModule { }
