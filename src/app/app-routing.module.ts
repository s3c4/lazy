import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

let routes: Routes = [
  { path: '', loadChildren: () => import('./components/dashboard/dashboard.module').then(m => m.DashboardModule)},
];

const routesEn: Routes = [
  { path: 'dashboard', loadChildren: () => import('./components/dashboard/dashboard.module').then(m => m.DashboardModule)},
  { path: 'user', loadChildren: () => import('./components/user/user.module').then(m => m.UserModule)},
  { path: 'rights', loadChildren: () => import('./components/rights/rights.module').then(m => m.RightsModule)}
];

const routesRo: Routes = [
  { path: 'bord', loadChildren: () => import('./components/dashboard/dashboard.module').then(m => m.DashboardModule)},
  { path: 'utilizator', loadChildren: () => import('./components/user/user.module').then(m => m.UserModule)},
  { path: 'drepturi', loadChildren: () => import('./components/rights/rights.module').then(m => m.RightsModule)}
];

routes.push(...routesEn, ...routesRo);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
