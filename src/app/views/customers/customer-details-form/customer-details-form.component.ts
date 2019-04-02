import {Component, OnInit, Input} from '@angular/core';
import {Customer} from "../../../shared/interfaces/customer";
import {FormGroup, FormControl} from "@angular/forms";
import {isUndefined} from "util";

@Component({
    selector: 'app-customer-details-form',
    templateUrl: './customer-details-form.component.html',
    styleUrls: ['./customer-details-form.component.scss']
})
export class CustomerDetailsFormComponent implements OnInit {
    customerDetailsForm: FormGroup;
    @Input() customer: Customer;
    @Input() customerId: number;

    constructor() {
    }

    ngOnInit() {
        console.log(this.customer);
        console.log(this.customerDetailsForm);
        this.customerDetailsForm = this.buildCustomerDetailsForm(this.customer);
    }

    buildCustomerDetailsForm(customerDetails:Customer={}){
        if(this.customer !== undefined){
            return new FormGroup({
                name: new FormControl(customerDetails.name || this.customer.name),
                nameKana: new FormControl(customerDetails.nameKana || this.customer.nameKana),
                phone: new FormControl(customerDetails.phone || this.customer.phone),
                email: new FormControl(customerDetails.email || this.customer.email),
                lineId: new FormControl(customerDetails.lineId || this.customer.lineId),
                girlfriend: new FormControl(customerDetails.girlfriend || this.customer.girlfriend),
                birthday: new FormControl(customerDetails.birthday || this.customer.birthday),
                birthdayPresent: new FormControl(customerDetails.birthdayPresent || this.customer.birthdayPresent),
                birthPlace: new FormControl(customerDetails.birthPlace),
                feature: new FormControl(customerDetails.feature),
                tabacco: new FormControl(customerDetails.tabacco),
                doGolf: new FormControl(customerDetails.doGolf),
                commonThings: new FormControl(customerDetails.commonThings),
                note: new FormControl(customerDetails.note),
                company: new FormControl(customerDetails.company),
                client: new FormControl(customerDetails.client),
                anniversaryOfCompany: new FormControl(customerDetails.anniversaryOfCompany),
                summerGift: new FormControl(customerDetails.summerGift),
                yearEndGift: new FormControl(customerDetails.yearEndGift),
                size: new FormControl(customerDetails.size),
                favoriteDrink: new FormControl(customerDetails.favoriteDrink),
                unfavoriteDrink: new FormControl(customerDetails.unfavoriteDrink),
                favoriteSports: new FormControl(customerDetails.favoriteSports),
                unfavoriteSports: new FormControl(customerDetails.unfavoriteSports),
                favoriteWoman: new FormControl(customerDetails.favoriteWoman),
                unfavoriteWoman: new FormControl(customerDetails.unfavoriteWoman),
                favoriteColor: new FormControl(customerDetails.favoriteColor),
                unfavoriteColor: new FormControl(customerDetails.unfavoriteColor),
                favoriteBrand: new FormControl(customerDetails.favoriteBrand),
                unfavoriteBrand: new FormControl(customerDetails.unfavoriteBrand),
            });
        }
        return new FormGroup({
            name: new FormControl(customerDetails.name ),
            nameKana: new FormControl(customerDetails.nameKana ),
            phone: new FormControl(customerDetails.phone ),
            email: new FormControl(customerDetails.email ),
            lineId: new FormControl(customerDetails.lineId ),
            girlfriend: new FormControl(customerDetails.girlfriend ),
            birthday: new FormControl(customerDetails.birthday ),
            birthdayPresent: new FormControl(customerDetails.birthdayPresent ),
            birthPlace: new FormControl(customerDetails.birthPlace),
            feature: new FormControl(customerDetails.feature),
            tabacco: new FormControl(customerDetails.tabacco),
            doGolf: new FormControl(customerDetails.doGolf),
            commonThings: new FormControl(customerDetails.commonThings),
            note: new FormControl(customerDetails.note),
            company: new FormControl(customerDetails.company),
            client: new FormControl(customerDetails.client),
            anniversaryOfCompany: new FormControl(customerDetails.anniversaryOfCompany),
            summerGift: new FormControl(customerDetails.summerGift),
            yearEndGift: new FormControl(customerDetails.yearEndGift),
            size: new FormControl(customerDetails.size),
            favoriteDrink: new FormControl(customerDetails.favoriteDrink),
            unfavoriteDrink: new FormControl(customerDetails.unfavoriteDrink),
            favoriteSports: new FormControl(customerDetails.favoriteSports),
            unfavoriteSports: new FormControl(customerDetails.unfavoriteSports),
            favoriteWoman: new FormControl(customerDetails.favoriteWoman),
            unfavoriteWoman: new FormControl(customerDetails.unfavoriteWoman),
            favoriteColor: new FormControl(customerDetails.favoriteColor),
            unfavoriteColor: new FormControl(customerDetails.unfavoriteColor),
            favoriteBrand: new FormControl(customerDetails.favoriteBrand),
            unfavoriteBrand: new FormControl(customerDetails.unfavoriteBrand),
        });
    }

    submitCustomerDetailsForm(formData){
        console.log(formData)
    }

}
