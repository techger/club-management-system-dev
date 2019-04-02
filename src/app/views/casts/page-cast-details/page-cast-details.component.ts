import {Component, OnInit, ViewChild} from '@angular/core';
import {FormGroup, FormControl} from "@angular/forms";
import {format, startOfMonth, endOfMonth} from "date-fns";
import {VisitHistoryComponent} from "../visit-history/visit-history.component";
import {ActivatedRoute} from "@angular/router";
import {DouhanHistoryComponent} from "../douhan-history/douhan-history.component";
import {Cast} from "../../../shared/interfaces/cast";
import {CastService} from "../../../shared/services/cast.service";

@Component({
    selector: 'app-page-cast-details',
    templateUrl: './page-cast-details.component.html',
    styleUrls: ['./page-cast-details.component.scss']
})
export class PageCastDetailsComponent implements OnInit {
    rangeForm: FormGroup;
    fromDate: string = format(startOfMonth(new Date()), "YYYY-MM-DD");
    loadingHistories: boolean = false;
    toDate: string = format(endOfMonth(new Date()), "YYYY-MM-DD");
    castId: number;
    cast: Cast;

    @ViewChild(VisitHistoryComponent)
    protected visitHistoryComponent: VisitHistoryComponent;

    @ViewChild(DouhanHistoryComponent)
    protected douhanHistoryComponent: DouhanHistoryComponent;

    constructor(private activatedRoute: ActivatedRoute,
                private castService: CastService) {
    }

    ngOnInit() {
        this.rangeForm = this.buildRangeForm();
        this.castId = parseInt(this.activatedRoute.snapshot.paramMap.get('castId'));
        this.cast = this.castService.findCast(this.castId);
    }

    buildRangeForm(range = {
        fromDate: format(startOfMonth(new Date()), "YYYY-MM-DD"),
        toDate: format(endOfMonth(new Date()), "YYYY-MM-DD")
    }) {
        return new FormGroup({
            fromDate: new FormControl(range.fromDate),
            toDate: new FormControl(range.toDate),
        })

    }

    onFilterRange(formData) {
        this.loadingHistories = true;
        this.visitHistoryComponent.filterVisitHistory(formData);
        this.douhanHistoryComponent.filterDouhanHistory(formData);
        setTimeout(() => {
            this.loadingHistories = false;
        }, 1000)


    }


}
