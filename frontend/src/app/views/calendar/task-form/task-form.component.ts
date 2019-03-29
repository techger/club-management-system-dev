import {Component, OnInit, ViewChild, Input} from '@angular/core';
import {FormGroup, FormBuilder, FormControl, Validators} from "@angular/forms";
import {CalendarAppEvent} from "../../../shared/models/calendar-event.model";
import {Utils} from "../../../shared/utils";
import {Observable, ReplaySubject, Subject} from "rxjs";
import {startWith, map, debounceTime, takeUntil, take} from "rxjs/internal/operators";
import {MatSelect} from "@angular/material";
import {Cast} from "../../../shared/interfaces/cast";
import {Customer} from "../../../shared/interfaces/customer"
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {SelectItem} from "primeng/components/common/selectitem";
import {CustomerService} from "../../../shared/services/customer.service";
import {CastService} from "../../../shared/services/cast.service";
import {format} from 'date-fns';

@Component({
    selector: 'app-task-form',
    templateUrl: './task-form.component.html',
    styleUrls: ['./task-form.component.scss']
})


export class TaskFormComponent implements OnInit {
    loadingTaskForm: boolean = false;

    taskForm: FormGroup;
    task: CalendarAppEvent;
    customerOptions: SelectItem[];
    castOptions: SelectItem[];


    constructor(private formBuilder: FormBuilder,
                private modalService: NgbActiveModal,
                private customerService: CustomerService,
                private castService: CastService) {
    }

    ngOnInit() {
        this.taskForm = this.buildTaskForm(this.task);
        this.customerOptions = this.customerService.getCustomerOptions();
        this.castOptions = this.castService.getCastOptions();
    }


    buildTaskForm(task: CalendarAppEvent = {start:new Date(), time: '19:00', title: null,}) {
        return new FormGroup({
            start: new FormControl(task.start || format(new Date(),"YYYY-MM-DD")),
            time: new FormControl(task.time),
            mainCast: new FormControl(task.mainCast),
            customer: new FormControl(task.customer,),
            douhanCasts: new FormControl(task.douhanCasts,),
            note: new FormControl(task.note,),
        });
    }


    submitTaskForm(form) {
        this.loadingTaskForm = true;
        console.log(form);

    }

    public onSelectCustomer(customer) {
        console.log('tag selected: value is ' + customer);
    }

    public onSelectDouhanCast(cast) {
        console.log('tag selected: value is ' + cast);
    }

    closeModal() {
        this.modalService.close();
    }
}
