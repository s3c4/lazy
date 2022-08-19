import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RightsComponent } from './rights.component';

const routes: Routes = [{ path: '', component: RightsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RightsRoutingModule { }
