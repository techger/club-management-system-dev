import {BrowserModule} from '@angular/platform-browser';
import {NgModule, LOCALE_ID} from '@angular/core';
import localeJa from '@angular/common/locales/ja';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SharedModule} from './shared/shared.module';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './shared/inmemory-db/inmemory-db.service';
import {HttpClientModule} from '@angular/common/http';
import {registerLocaleData} from "@angular/common";
import {CustomersModule} from "./views/customers/customers.module";

registerLocaleData(localeJa, 'ja');


@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        SharedModule,
        HttpClientModule,
        BrowserAnimationsModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService, {passThruUnknownUrl: true}),
        AppRoutingModule,
        CustomersModule
    ],
    providers: [{provide: LOCALE_ID, useValue: 'ja'}],
    bootstrap: [AppComponent]
})
export class AppModule {

}
