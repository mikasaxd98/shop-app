import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PhonesContainerComponent } from './components/phones-container/phones-container.component';

const routes: Routes = [
  {
    path: '',
    component: PhonesContainerComponent
  }
]

@NgModule( {
  imports: [RouterModule.forChild( routes )],
  exports: [RouterModule]
} )
export class PhonesRoutingModule { }
