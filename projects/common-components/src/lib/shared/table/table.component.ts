import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'lib-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnChanges {

    @Input() data: Object;

    datasource = {
        columns: [],
        rows: []
    };
    displayedColumns() {
        const columns = this.datasource.columns.map(column => {
            return column.id
        });
        columns.unshift('case_id');
        return columns;
    }


    constructor() {
    }


    ngOnChanges(changes) {
        this.datasource = changes.data.currentValue;
    }

}

