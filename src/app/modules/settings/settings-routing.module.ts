import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SettignsContainerComponent } from './components/settigns-container/settigns-container.component';

const routes: Routes = [{
  path: '',
  component: SettignsContainerComponent
}]

@NgModule( {
  imports: [RouterModule.forChild( routes )],
  exports: [RouterModule]
} )
export class SettingsRoutingModule { }
