import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsRoutingModule } from './settings-routing.module';
import { SettignsContainerComponent } from './components/settigns-container/settigns-container.component';



@NgModule({
  declarations: [
    SettignsContainerComponent
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule
  ]
})
export class SettingsModule { }
