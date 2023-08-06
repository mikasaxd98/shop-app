import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeContainerComponent } from './components/home-container/home-container.component';

const routes: Routes = [{
  path: '',
  component: HomeContainerComponent
}];

@NgModule( {
  imports: [RouterModule.forChild( routes )],
  exports: [RouterModule]
} )
export class HomeRoutingModule {
}
