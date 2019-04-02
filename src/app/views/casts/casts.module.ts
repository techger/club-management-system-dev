import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CastsRoutingModule} from './casts-routing.module';
import {CastFormComponent} from "./cast-form/cast-form.component";
import {CastListComponent} from "./cast-list/cast-list.component";
import {ReactiveFormsModule} from "@angular/forms";
import {NgbModule, NgbDatepicker} from "@ng-bootstrap/ng-bootstrap";
import {TableModule} from "primeng/components/table/table";
import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import {DropdownModule} from "primeng/components/dropdown/dropdown";
import { PageCastDetailsComponent } from './page-cast-details/page-cast-details.component';
import { VisitHistoryComponent } from './visit-history/visit-history.component';
import {SharedComponentsModule} from "../../shared/components/shared-components.module";
import { DouhanHistoryComponent } from './douhan-history/douhan-history.component';
import { PerformanceGraphComponent } from './performance-graph/performance-graph.component';

@NgModule({
    imports: [
        CommonModule,
        CastsRoutingModule,
        ReactiveFormsModule,
        NgbModule,
        TableModule,
        NgxDatatableModule,
        DropdownModule,
        SharedComponentsModule
    ],
    declarations: [CastFormComponent, CastListComponent, PageCastDetailsComponent, VisitHistoryComponent, DouhanHistoryComponent, PerformanceGraphComponent],
    entryComponents: [CastFormComponent]
})
export class CastsModule {
}
