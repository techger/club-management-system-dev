import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CastListComponent} from "./cast-list/cast-list.component";
import {PageCastDetailsComponent} from "./page-cast-details/page-cast-details.component";

const routes: Routes = [
  {
    path: '',
    component: CastListComponent
  },
  {
    path: 'cast-details/:castId',
    component: PageCastDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CastsRoutingModule { }
