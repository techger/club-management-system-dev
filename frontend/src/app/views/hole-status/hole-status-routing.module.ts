import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HoleStatusComponent} from "./hole-status/hole-status.component";

const routes: Routes = [
  {
    path: '',
    component: HoleStatusComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HoleStatusRoutingModule { }
