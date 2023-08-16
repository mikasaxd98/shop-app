import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeContainerComponent } from '../home/components/home-container/home-container.component';
import { ItemDetailsContainerComponent } from './components/item-details-container/item-details-container.component';

const routes: Routes = [{
  path: '',
  component: ItemDetailsContainerComponent
}];

@NgModule( {
  imports: [RouterModule.forChild( routes )],
  exports: [RouterModule]
} )
export class ItemDetailsRoutingModule { }
