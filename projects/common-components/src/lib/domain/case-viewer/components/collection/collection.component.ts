import {Component, Input, OnInit} from '@angular/core';
import {CaseField} from '../../models/definition/case-field.model';

@Component({
    selector: 'lib-collection',
    templateUrl: './collection.component.html',
    styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {

    @Input()
    caseField: CaseField;

    constructor() {
    }

    ngOnInit() {
    }

}
