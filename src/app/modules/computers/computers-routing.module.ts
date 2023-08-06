import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ComputersContainerComponent } from './components/computers-container/computers-container.component';

const routes: Routes = [{
  path: '',
  component: ComputersContainerComponent
}]

@NgModule( {
  imports: [RouterModule.forChild( routes )],
  exports: [RouterModule]
} )
export class ComputersRoutingModule { }
