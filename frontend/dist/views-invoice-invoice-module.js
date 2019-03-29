(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-invoice-invoice-module"],{

/***/ "./src/app/views/invoice/invoice-detail/invoice-detail.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/views/invoice/invoice-detail/invoice-detail.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-12\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <div class=\"d-flex mb-5\" *ngIf=\"viewMode === 'edit'\">\n                    <span class=\"m-auto\"></span>\n                    <button class=\"btn btn-outline-secondary mr-3\" (click)=\"viewMode = 'print'\">Cancel</button>\n                    <btn-loading btnClass=\"btn-primary\" [loading]=\"saving\" (click)=\"saveInvoice()\">Save</btn-loading>\n                </div>\n                <div class=\"d-sm-flex mb-5\" *ngIf=\"viewMode !== 'edit'\">\n                    <span class=\"m-auto\"></span>\n                    <button class=\"btn btn-outline-secondary mr-3 mb-sm-0 mb-3\" routerLink=\"/invoice\">Back To Invoices</button>\n                    <button class=\"btn btn-outline-secondary mr-3 mb-sm-0 mb-3\" (click)=\"viewMode = 'edit'\">Edit Invoice</button>\n                    <button class=\"btn btn-primary mb-sm-0 mb-3\" (click)=\"print()\">Print Invoice</button>\n                </div>\n                <!---===== Print Area =======-->\n                <div id=\"print-area\" *ngIf=\"viewMode !== 'edit'\">\n                    <div class=\"row\">\n                        <div class=\"col-md-6\">\n                            <h4 class=\"font-weight-bold\">Order Info</h4>\n                            <p>#{{invoice.orderNumber}}</p>\n                        </div>\n                        <div class=\"col-md-6 text-sm-right\">\n                            <p><strong>Order status: </strong> {{invoice?.orderStatus}}</p>\n                            <p><strong>Order date: </strong> {{invoice?.orderDate | date}}</p>\n                        </div>\n                    </div>\n                    <div class=\"mt-3 mb-4 border-top\"></div>\n                    <div class=\"row mb-5\">\n                        <div class=\"col-md-6 mb-3 mb-sm-0\">\n                            <h5 class=\"font-weight-bold\">Bill From</h5>\n                            <p>{{invoice?.billFrom?.name}}</p>\n                            <span style=\"white-space: pre-line\">\n                                {{invoice?.billFrom?.address}}\n                            </span>\n                        </div>\n                        <div class=\"col-md-6 text-sm-right\">\n                            <h5 class=\"font-weight-bold\">Bill To</h5>\n                            <p>{{invoice?.billTo?.name}}</p>\n                            <span style=\"white-space: pre-line\">\n                                {{invoice?.billTo?.address}}\n                            </span>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-md-12\">\n                            <table class=\"table table-hover mb-4\">\n                                <thead class=\"bg-gray-300\">\n                                    <tr>\n                                        <th scope=\"col\">#</th>\n                                        <th scope=\"col\">Item Name</th>\n                                        <th scope=\"col\">Unit Price</th>\n                                        <th scope=\"col\">Unit</th>\n                                        <th scope=\"col\">Cost</th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr *ngFor=\"let item of invoice?.items; let i = index\">\n                                        <th scope=\"row\">{{i + 1}}</th>\n                                        <td>{{item.name}}</td>\n                                        <td>{{item.unitPrice}}</td>\n                                        <td>{{item.unit}}</td>\n                                        <td>{{item.unit * item.unitPrice}}</td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n\n                        <div class=\"col-md-12\">\n                            <div class=\"invoice-summary float-right\">\n                                <p>Sub total: <span>{{invoice.currency}}{{subTotal}}</span></p>\n                                <p>Vat: <span>\n                                    {{invoice.currency}}{{(invoice.vat/100 * subTotal).toFixed(2)}}\n                                </span></p>\n                                <h5 class=\"font-weight-bold\">Grand Total: <span>\n                                    {{invoice.currency}}{{(invoice.vat/100 * subTotal + subTotal)}}\n                                </span></h5>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <!--==== / Print Area =====-->\n\n                <!--==== Edit Area =====-->\n                <div *ngIf=\"viewMode === 'edit'\">\n                    <form [formGroup]=\"invoiceForm\">\n                        <div class=\"row justify-content-between\">\n                            <div class=\"col-md-6\">\n                                <h4 class=\"font-weight-bold\">Order Info</h4>\n                                <div class=\"col-sm-4 form-group mb-3 pl-0\">\n                                    <label for=\"orderNo\">Order Number</label>\n                                    <input formControlName=\"orderNumber\" type=\"text\" class=\"form-control\" id=\"orderNo\"\n                                        placeholder=\"Enter order number\">\n                                </div>\n                            </div>\n                            <div class=\"col-md-3 text-right\">\n                                <label class=\"d-block text-12 text-muted\">Order Status</label>\n                                <div class=\"pr-0 mb-4\">\n                                    <label class=\"radio radio-reverse radio-danger\">\n                                        <input type=\"radio\" name=\"orderStatus\" value=\"Pending\" formControlName=\"orderStatus\">\n                                        <span>Pending</span>\n                                        <span class=\"checkmark\"></span>\n                                    </label>\n                                    <label class=\"radio radio-reverse radio-warning\">\n                                        <input type=\"radio\" name=\"orderStatus\" value=\"Processing\" formControlName=\"orderStatus\">\n                                        <span>Processing</span>\n                                        <span class=\"checkmark\"></span>\n                                    </label>\n                                    <label class=\"radio radio-reverse radio-success\">\n                                        <input type=\"radio\" name=\"orderStatus\" value=\"Delivered\" formControlName=\"orderStatus\">\n                                        <span>Delivered</span>\n                                        <span class=\"checkmark\"></span>\n                                    </label>\n\n                                </div>\n                                <div class=\"form-group mb-3\">\n                                    <label for=\"picker1\">Order Date</label>\n                                    <div class=\"input-group\">\n                                        <input formControlName=\"orderDate\" id=\"picker1\" class=\"form-control text-right\"\n                                            placeholder=\"yyyy-mm-dd\" name=\"dp\" ngbDatepicker #orderDatePicker=\"ngbDatepicker\">\n                                        <div class=\"input-group-append\">\n                                            <button class=\"btn btn-secondary\" (click)=\"orderDatePicker.toggle()\" type=\"button\">\n                                                <i class=\"icon-regular i-Calendar-4\"></i>\n                                            </button>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"mt-3 mb-4 border-top\"></div>\n                        <div class=\"row mb-5\">\n                            <div class=\"col-md-6\" [formGroup]=\"invoiceForm.controls['billFrom']\">\n                                <h5 class=\"font-weight-bold\">Bill From</h5>\n                                <div class=\"col-md-10 form-group mb-3 pl-0\">\n                                    <input formControlName=\"name\" type=\"text\" class=\"form-control\" id=\"billFrom\"\n                                        placeholder=\"Bill From\">\n                                </div>\n                                <div class=\"col-md-10 form-group mb-3 pl-0\">\n                                    <textarea formControlName=\"address\" class=\"form-control\" id=\"\" placeholder=\"Bill From Address\"></textarea>\n                                </div>\n                            </div>\n\n                            <div class=\"col-md-6 text-right\" [formGroup]=\"invoiceForm.controls['billTo']\">\n                                <h5 class=\"font-weight-bold\">Bill To</h5>\n                                <div class=\"col-md-10 offset-md-2 form-group mb-3 pr-0\">\n                                    <input formControlName=\"name\" type=\"text\" class=\"form-control text-right\" id=\"billFrom\"\n                                        placeholder=\"Bill From\">\n                                </div>\n                                <div class=\"col-md-10 offset-md-2 form-group mb-3 pr-0\">\n                                    <textarea formControlName=\"address\" class=\"form-control text-right\" id=\"\"\n                                        placeholder=\"Bill From Address\"></textarea>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-md-12 table-responsive\">\n                                <table class=\"table table-hover mb-3\">\n                                    <thead class=\"bg-gray-300\">\n                                        <tr>\n                                            <th scope=\"col\">#</th>\n                                            <th scope=\"col\">Item Name</th>\n                                            <th scope=\"col\">Unit Price</th>\n                                            <th scope=\"col\">Unit</th>\n                                            <th scope=\"col\">Cost</th>\n                                            <th scope=\"col\"></th>\n                                        </tr>\n                                    </thead>\n                                    <tbody formArrayName=\"items\">\n                                        <tr *ngFor=\"let item of invoiceForm.controls['items'].controls; let i = index;\"\n                                            [formGroupName]=\"i\">\n                                            <th scope=\"row\">{{i + 1}}</th>\n                                            <td>\n                                                <input formControlName=\"name\" type=\"text\" class=\"form-control\"\n                                                    placeholder=\"Item Name\">\n                                            </td>\n                                            <td>\n                                                <input formControlName=\"unitPrice\" type=\"number\" class=\"form-control\"\n                                                    placeholder=\"Unit Price\">\n                                            </td>\n                                            <td>\n                                                <input formControlName=\"unit\" type=\"number\" class=\"form-control\"\n                                                    placeholder=\"Unit\">\n                                            </td>\n                                            <td>\n                                                {{invoiceForm.controls['items'].controls[i].controls['unitPrice'].value\n                                                * invoiceForm.controls['items'].controls[i].controls['unit'].value}}\n                                            </td>\n                                            <td>\n                                                <button class=\"btn btn-outline-secondary float-right\" (click)=\"removeItem(i)\">Delete</button>\n                                            </td>\n                                        </tr>\n                                    </tbody>\n                                </table>\n                                <button class=\"btn btn-primary float-right mb-4\" (click)=\"addItem()\">Add Item</button>\n                            </div>\n\n                            <div class=\"col-md-12\">\n\n                                <div class=\"invoice-summary invoice-summary-input float-right\">\n                                    <p>Sub total: <span>{{invoiceForm.controls['currency'].value}}{{subTotal}}</span></p>\n                                    <p class=\"d-flex align-items-center\">Vat(%):<span>\n                                            <input type=\"text\" class=\"form-control small-input\" formControlName=\"vat\">\n                                            {{invoiceForm.controls['currency'].value}}\n                                            {{(invoiceForm.controls['vat'].value/100 * subTotal).toFixed(2)}}\n                                        </span></p>\n                                    <h5 class=\"font-weight-bold d-flex align-items-center\">Grand Total:\n                                        <span>\n                                            <input type=\"text\" class=\"form-control small-input\" formControlName=\"currency\">\n                                            {{invoiceForm.controls['currency'].value}}\n                                            {{(invoiceForm.controls['vat'].value/100 * subTotal + subTotal)}}\n                                        </span>\n                                    </h5>\n                                </div>\n                            </div>\n\n                        </div>\n                    </form>\n                </div>\n                <!--==== / Edit Area =====-->\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/views/invoice/invoice-detail/invoice-detail.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/views/invoice/invoice-detail/invoice-detail.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/invoice/invoice-detail/invoice-detail.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/views/invoice/invoice-detail/invoice-detail.component.ts ***!
  \**************************************************************************/
/*! exports provided: InvoiceDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceDetailComponent", function() { return InvoiceDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/utils */ "./src/app/shared/utils.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_services_data_layer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/data-layer.service */ "./src/app/shared/services/data-layer.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var InvoiceDetailComponent = /** @class */ (function () {
    function InvoiceDetailComponent(route, router, fb, dl, toastr) {
        this.route = route;
        this.router = router;
        this.fb = fb;
        this.dl = dl;
        this.toastr = toastr;
        this.viewMode = 'edit';
        this.invoice = {};
    }
    InvoiceDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.route.snapshot.params['id'];
        this.isNew = !this.id;
        this.buildInvoiceForm(this.invoice);
        if (this.id) {
            this.viewMode = 'print';
            this.dl.getInvoice(this.id)
                .subscribe(function (res) {
                _this.invoice = res;
                _this.buildInvoiceForm(_this.invoice);
                _this.subTotal = _this.calculateSubtotal(_this.invoiceForm.value);
            });
        }
    };
    InvoiceDetailComponent.prototype.buildInvoiceForm = function (i) {
        var _this = this;
        if (i === void 0) { i = {}; }
        this.invoiceForm = this.fb.group({
            id: [i.id],
            orderNumber: [i.orderNumber],
            orderStatus: [i.orderStatus],
            currency: [i.currency],
            vat: [i.vat],
            orderDate: [i.orderDate ? src_app_shared_utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].dateToNgbDate(i.orderDate) : {}],
            billFrom: this.fb.group({
                name: [i.billFrom ? i.billFrom.name : ''],
                address: [i.billFrom ? i.billFrom.address : '']
            }),
            billTo: this.fb.group({
                name: [i.billTo ? i.billTo.name : ''],
                address: [i.billTo ? i.billTo.address : '']
            }),
            items: this.fb.array((function () {
                if (!i.items) {
                    return [];
                }
                return i.items.map(function (item) { return _this.createItem(item); });
            })())
        });
        // LINSTEN FOR VALUE CHANGES AND CALCULATE TOTAL
        if (this.invoiceFormSub) {
            this.invoiceFormSub.unsubscribe();
        }
        this.invoiceFormSub = this.invoiceForm.valueChanges
            .subscribe(function (formValue) {
            _this.subTotal = _this.calculateSubtotal(formValue);
        });
    };
    InvoiceDetailComponent.prototype.createItem = function (item) {
        if (item === void 0) { item = {}; }
        return this.fb.group({
            name: [item.name],
            unit: [item.unit],
            unitPrice: [item.unitPrice]
        });
    };
    InvoiceDetailComponent.prototype.addItem = function () {
        var control = this.invoiceForm.controls['items'];
        control.push(this.createItem());
    };
    InvoiceDetailComponent.prototype.removeItem = function (i) {
        var control = this.invoiceForm.controls['items'];
        control.removeAt(i);
    };
    InvoiceDetailComponent.prototype.saveInvoice = function () {
        var _this = this;
        this.saving = true;
        this.invoice = this.invoiceForm.value;
        this.invoice.orderDate = src_app_shared_utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].ngbDateToDate(this.invoiceForm.value.orderDate);
        this.dl.saveInvoice(this.invoiceForm.value)
            .subscribe(function (savedInvoice) {
            _this.viewMode = 'print';
            _this.saving = false;
            _this.toastr.success('Invoice Saved!', 'Success!', { timeOut: 3000 });
            if (_this.isNew) {
                _this.router.navigateByUrl('/invoice/edit/' + savedInvoice.id);
            }
        });
    };
    InvoiceDetailComponent.prototype.calculateSubtotal = function (invoice) {
        var total = 0;
        invoice.items.forEach(function (i) {
            total += (i.unit * i.unitPrice);
        });
        return total;
    };
    InvoiceDetailComponent.prototype.print = function () {
        if (window) {
            window.print();
        }
    };
    InvoiceDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-invoice-detail',
            template: __webpack_require__(/*! ./invoice-detail.component.html */ "./src/app/views/invoice/invoice-detail/invoice-detail.component.html"),
            styles: [__webpack_require__(/*! ./invoice-detail.component.scss */ "./src/app/views/invoice/invoice-detail/invoice-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            src_app_shared_services_data_layer_service__WEBPACK_IMPORTED_MODULE_4__["DataLayerService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
    ], InvoiceDetailComponent);
    return InvoiceDetailComponent;
}());



/***/ }),

/***/ "./src/app/views/invoice/invoice-list/invoice-list.component.html":
/*!************************************************************************!*\
  !*** ./src/app/views/invoice/invoice-list/invoice-list.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"breadcrumb\">\n    <h1>Invoice</h1>\n    <ul>\n        <li><a href=\"\">Apps</a></li>\n        <li>Invoice</li>\n    </ul>\n</div>\n\n<div class=\"separator-breadcrumb border-top\"></div>\n\n<div class=\"row mb-3\">\n    <div class=\"col-md-12 mb-3\">\n        <button class=\"btn btn-primary float-right\" [routerLink]=\"['/invoice/new']\">Create New Invoice</button>\n    </div>\n    <div class=\"col-md-12\">\n        <div class=\"card o-hidden\">\n            <ngx-datatable *ngIf=\"invoices?.length\" style=\"box-shadow: none\" class=\"material fullscreen\" [style.height]=\"60*invoices.length+60+'px'\" [columnMode]=\"'force'\"\n                [headerHeight]=\"50\" [footerHeight]=\"0\" [rowHeight]=\"60\" [scrollbarV]=\"true\" [scrollbarH]=\"true\" [rows]=\"invoices\">\n                <ngx-datatable-column name=\"photo\" [maxWidth]=\"100\">\n                    <ng-template ngx-datatable-header-template>\n                        Number\n                    </ng-template>\n                    <ng-template ngx-datatable-cell-template let-value=\"value\" let-row=\"row\">\n                        {{row.orderNumber}}\n                    </ng-template>\n                </ngx-datatable-column>\n                <ngx-datatable-column>\n                    <ng-template ngx-datatable-header-template>\n                        Bill From\n                    </ng-template>\n                    <ng-template ngx-datatable-cell-template let-value=\"value\" let-row=\"row\">\n                        {{row.billFrom.name}}\n                    </ng-template>\n                </ngx-datatable-column>\n                <ngx-datatable-column>\n                    <ng-template ngx-datatable-header-template>\n                        Bill To\n                    </ng-template>\n                    <ng-template ngx-datatable-cell-template let-value=\"value\" let-row=\"row\">\n                        {{row.billTo.name}}\n                    </ng-template>\n                </ngx-datatable-column>\n                <ngx-datatable-column [flexGrow]=\"1\">\n                    <ng-template ngx-datatable-header-template>\n                        Status\n                    </ng-template>\n                    <ng-template ngx-datatable-cell-template let-value=\"value\" let-row=\"row\">\n                        <div class=\"badge\" [ngClass]=\"{\n                            'badge-success': row.orderStatus === 'Delivered',\n                            'badge-warning': row.orderStatus === 'Processing',\n                            'badge-danger': row.orderStatus === 'Pending'\n                        }\">\n                            {{row.orderStatus}}\n                        </div>\n                    </ng-template>\n                </ngx-datatable-column>\n                <ngx-datatable-column [width]=\"120\">\n                    <ng-template ngx-datatable-header-template>\n                        Actions\n                    </ng-template>\n                    <ng-template ngx-datatable-cell-template let-value=\"value\" let-row=\"row\">\n                        <button class=\"btn btn-wide btn-outline-secondary mr-3\" [routerLink]=\"['/invoice/edit', row.id]\">View</button>\n                        <button class=\"btn btn-outline-danger\" (click)=\"deleteInvoice(row.id, deleteConfirmModal)\">\n                            Delete\n                        </button>\n                    </ng-template>\n                </ngx-datatable-column>\n            </ngx-datatable>\n        </div>\n    </div>\n</div>\n\n<ng-template #deleteConfirmModal let-modal>\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title\" id=\"modal-title\">Invoice deletion</h4>\n        <button type=\"button\" class=\"close\" aria-label=\"Close button\" aria-describedby=\"modal-title\" (click)=\"modal.dismiss('Cross click')\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body\">\n        <p><strong>Are you sure?</strong></p>\n        \n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-outline-secondary btn-rounded\" (click)=\"modal.dismiss('cancel')\">Cancel</button>\n        <button type=\"button\" ngbAutofocus class=\"btn btn-wide btn-danger btn-rounded\" (click)=\"modal.close('Ok')\">Ok</button>\n    </div>\n</ng-template>"

/***/ }),

/***/ "./src/app/views/invoice/invoice-list/invoice-list.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/views/invoice/invoice-list/invoice-list.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/invoice/invoice-list/invoice-list.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/views/invoice/invoice-list/invoice-list.component.ts ***!
  \**********************************************************************/
/*! exports provided: InvoiceListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceListComponent", function() { return InvoiceListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_data_layer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/data-layer.service */ "./src/app/shared/services/data-layer.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InvoiceListComponent = /** @class */ (function () {
    function InvoiceListComponent(dl, modalService, toastr) {
        this.dl = dl;
        this.modalService = modalService;
        this.toastr = toastr;
    }
    InvoiceListComponent.prototype.ngOnInit = function () {
        this.loadInvoices();
    };
    InvoiceListComponent.prototype.loadInvoices = function () {
        var _this = this;
        this.dl.getInvoices()
            .subscribe(function (res) {
            _this.invoices = res;
        });
    };
    InvoiceListComponent.prototype.deleteInvoice = function (id, modal) {
        var _this = this;
        this.modalService.open(modal, { ariaLabelledBy: 'modal-basic-title', centered: true })
            .result.then(function (result) {
            _this.dl.deleteInvoice(id)
                .subscribe(function (res) {
                _this.toastr.success('Invoice Deleted!', 'Success!', { timeOut: 3000 });
                _this.loadInvoices();
            });
        }, function (reason) {
        });
    };
    InvoiceListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-invoice-list',
            template: __webpack_require__(/*! ./invoice-list.component.html */ "./src/app/views/invoice/invoice-list/invoice-list.component.html"),
            styles: [__webpack_require__(/*! ./invoice-list.component.scss */ "./src/app/views/invoice/invoice-list/invoice-list.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_shared_services_data_layer_service__WEBPACK_IMPORTED_MODULE_1__["DataLayerService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], InvoiceListComponent);
    return InvoiceListComponent;
}());



/***/ }),

/***/ "./src/app/views/invoice/invoice-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/views/invoice/invoice-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: InvoiceRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceRoutingModule", function() { return InvoiceRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _invoice_list_invoice_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./invoice-list/invoice-list.component */ "./src/app/views/invoice/invoice-list/invoice-list.component.ts");
/* harmony import */ var _invoice_detail_invoice_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./invoice-detail/invoice-detail.component */ "./src/app/views/invoice/invoice-detail/invoice-detail.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: '',
        component: _invoice_list_invoice_list_component__WEBPACK_IMPORTED_MODULE_2__["InvoiceListComponent"]
    },
    {
        path: 'new',
        component: _invoice_detail_invoice_detail_component__WEBPACK_IMPORTED_MODULE_3__["InvoiceDetailComponent"]
    },
    {
        path: 'edit/:id',
        component: _invoice_detail_invoice_detail_component__WEBPACK_IMPORTED_MODULE_3__["InvoiceDetailComponent"]
    }
];
var InvoiceRoutingModule = /** @class */ (function () {
    function InvoiceRoutingModule() {
    }
    InvoiceRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], InvoiceRoutingModule);
    return InvoiceRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/invoice/invoice.module.ts":
/*!*************************************************!*\
  !*** ./src/app/views/invoice/invoice.module.ts ***!
  \*************************************************/
/*! exports provided: InvoiceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceModule", function() { return InvoiceModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _invoice_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./invoice-routing.module */ "./src/app/views/invoice/invoice-routing.module.ts");
/* harmony import */ var _invoice_detail_invoice_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./invoice-detail/invoice-detail.component */ "./src/app/views/invoice/invoice-detail/invoice-detail.component.ts");
/* harmony import */ var _invoice_list_invoice_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./invoice-list/invoice-list.component */ "./src/app/views/invoice/invoice-list/invoice-list.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var src_app_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/components/shared-components.module */ "./src/app/shared/components/shared-components.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var InvoiceModule = /** @class */ (function () {
    function InvoiceModule() {
    }
    InvoiceModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["NgxDatatableModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                src_app_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_8__["SharedComponentsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                _invoice_routing_module__WEBPACK_IMPORTED_MODULE_2__["InvoiceRoutingModule"]
            ],
            declarations: [_invoice_detail_invoice_detail_component__WEBPACK_IMPORTED_MODULE_3__["InvoiceDetailComponent"], _invoice_list_invoice_list_component__WEBPACK_IMPORTED_MODULE_4__["InvoiceListComponent"]]
        })
    ], InvoiceModule);
    return InvoiceModule;
}());



/***/ })

}]);
//# sourceMappingURL=views-invoice-invoice-module.js.map