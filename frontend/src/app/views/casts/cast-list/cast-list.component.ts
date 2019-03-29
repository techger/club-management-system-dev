import {Component, OnInit} from '@angular/core';
import {Cast} from "../../../shared/interfaces/cast";
import {CastService} from "../../../shared/services/cast.service";
import {Router} from "@angular/router";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {CastFormComponent} from "../cast-form/cast-form.component";

@Component({
    selector: 'app-cast-list',
    templateUrl: './cast-list.component.html',
    styleUrls: ['./cast-list.component.scss']
})
export class CastListComponent implements OnInit {
    casts: Cast[];
    columns = [
        {field: 'name', header: 'name'},
        {field: 'birthday', header: 'birthday'},
        {field: 'birthplace', header: 'birthplace'},
    ];

    constructor(private castService: CastService,
                private router: Router,
                private modalService: NgbModal) {
    }

    ngOnInit() {
        this.casts = this.castService.getCastList();
    }

    goToCastDetails(data) {
        const castId = data.castId;
        console.log(data);
        this.router.navigate(['cast-list/cast-details', castId]);
    }

    openCastFormModal() {
        const castFormModal = this.modalService.open(CastFormComponent, {centered: true});
    }

}
