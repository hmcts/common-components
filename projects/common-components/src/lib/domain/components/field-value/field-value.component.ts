import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'lib-field-value',
    templateUrl: './field-value.component.html',
    styleUrls: ['./field-value.component.scss']
})
export class FieldValueComponent implements OnInit {

    @Input()
    value: string;

    constructor() {
    }


    ngOnInit() {
    }

}
