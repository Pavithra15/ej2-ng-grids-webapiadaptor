import { Component, ViewChild, OnInit } from '@angular/core';
import { isNullOrUndefined } from '@syncfusion/ej2-base';
import { GridComponent } from '@syncfusion/ej2-ng-grids';
import { orderData } from './data';
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';

@Component({
    selector: 'my-app',
    template: `<ejs-grid #grid [dataSource]='data' allowPaging=true [pageSettings]='pageSettings'>
                  <e-columns>
                  <e-column field='OrderID' headerText='ID' isPrimaryKey=true width='120' textAlign='Right'></e-column>
                  <e-column field='CustomerID' headerText='Name' width='160'></e-column>
                   <e-column field='Active' headerText='' type='checkbox' width='160'></e-column>
                  </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data: DataManager;
    public edit: Object;
    public toolbar: string[];
    public selection: Object;
    public pageSettings: Object;
    public pageSizes: number[] = [5, 10, 15];
    @ViewChild('grid')
    public grid: GridComponent;
    ngOnInit(): void {
        this.pageSettings = { pageCount: 10, pageSize: this.pageSizes[0], pageSizes: this.pageSizes };

        this.data = new DataManager({
            url: 'http://localhost:54290/api/Values',
            adaptor: new WebApiAdaptor
        });

    }

}
