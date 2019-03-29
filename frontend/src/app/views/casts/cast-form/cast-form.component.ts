import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl} from "@angular/forms";
import {Cast} from "../../../shared/interfaces/cast";
import {format} from "date-fns";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
    selector: 'app-cast-form',
    templateUrl: './cast-form.component.html',
    styleUrls: ['./cast-form.component.scss']
})
export class CastFormComponent implements OnInit {
    castForm: FormGroup;
    cast: Cast;
    birthplaceOptions = [
        {label: '東京都', value: 1},
        {label: '福岡県', value: 2},
        {label: '大阪府', value: 3},
        {label: '北海道', value: 4},
    ];

    constructor(private activeModal: NgbActiveModal) {
    }

    ngOnInit() {
        this.castForm = this.buildCastForm(this.cast);
    }

    buildCastForm(castForm: Cast = {entryDate: format(new Date(), "YYYY-MM-DD")}) {
        return new FormGroup({
            name: new FormControl(castForm.name),
            kana: new FormControl(castForm.kana),
            birthday: new FormControl(castForm.birthday),
            birthplace: new FormControl(castForm.birthplace),
            entryDate: new FormControl(castForm.entryDate)

        });
    }

    submitCastForm(castForm) {
        console.log(castForm);
    }

    closeModal(){
        this.activeModal.close();
    }
}
