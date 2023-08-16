import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsRoutingModule } from './settings-routing.module';
import { SettignsContainerComponent } from './components/settigns-container/settigns-container.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    SettignsContainerComponent
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    SharedModule
  ]
})
export class SettingsModule { }
