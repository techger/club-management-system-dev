import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SpDashboardComponent} from "./sp-dashboard/sp-dashboard.component";

const routes: Routes = [
  {
    path: '',
    component: SpDashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpRoutingModule { }
