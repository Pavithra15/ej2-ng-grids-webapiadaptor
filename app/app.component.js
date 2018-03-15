"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ej2_ng_grids_1 = require("@syncfusion/ej2-ng-grids");
var ej2_data_1 = require("@syncfusion/ej2-data");
var AppComponent = (function () {
    function AppComponent() {
        this.pageSizes = [5, 10, 15];
    }
    AppComponent.prototype.ngOnInit = function () {
        this.pageSettings = { pageCount: 10, pageSize: this.pageSizes[0], pageSizes: this.pageSizes };
        this.data = new ej2_data_1.DataManager({
            url: 'http://localhost:54290/api/Values',
            adaptor: new ej2_data_1.WebApiAdaptor
        });
    };
    return AppComponent;
}());
__decorate([
    core_1.ViewChild('grid'),
    __metadata("design:type", ej2_ng_grids_1.GridComponent)
], AppComponent.prototype, "grid", void 0);
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "<ejs-grid #grid [dataSource]='data' allowPaging=true [pageSettings]='pageSettings'>\n                  <e-columns>\n                  <e-column field='OrderID' headerText='ID' isPrimaryKey=true width='120' textAlign='Right'></e-column>\n                  <e-column field='CustomerID' headerText='Name' width='160'></e-column>\n                   <e-column field='Active' headerText='' type='checkbox' width='160'></e-column>\n                  </e-columns>\n                </ejs-grid>"
    })
], AppComponent);
exports.AppComponent = AppComponent;
