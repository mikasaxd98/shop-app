import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: '',
  loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
},
  {
    path: 'category/phones',
    loadChildren: () => import('./modules/phones/phones.module').then(m => m.PhonesModule)
  },
  {
    path: 'category/computers',
    loadChildren: () => import('./modules/computers/computers.module').then(m => m.ComputersModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./modules/settings/settings.module').then(m => m.SettingsModule)
  },
  {
    path: 'details/:id',
    loadChildren: () => import('./modules/item-details/item-details.module').then(m => m.ItemDetailsModule)
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
