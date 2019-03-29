import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpRoutingModule } from './sp-routing.module';
import { SpDashboardComponent } from './sp-dashboard/sp-dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    SpRoutingModule
  ],
  declarations: [SpDashboardComponent]
})
export class SpModule { }
