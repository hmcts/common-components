import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {CaseField} from '../../models/definition/case-field.model';

@Component({
    selector: 'lib-complex',
    templateUrl: './complex.component.html',
    styleUrls: ['./complex.component.scss']
})
export class ComplexComponent implements OnChanges, OnInit {
    @Input()
    caseField: CaseField = null;

    fields;

    constructor() {
    }

    readonly EMPTY_VALUES = [
        undefined,
        null,
        '',
        {}
    ];

    getValue(field: CaseField, values: any): any {
        return this.isEmpty(field.value) ? values[field.id] : field.value;
    }

     isValidComplex(field: CaseField, values?: object): boolean {
        console.log(this);

        values = values || {};
        let type = field.field_type;
        let value = this.getValue(field, values);



        let hasChildrenWithValue = type.complex_fields.find(f => {
            return this.keepField(f, value);
        });

        return !!hasChildrenWithValue;
    }

    isEmpty(value: any): boolean {
        return this.EMPTY_VALUES.indexOf(value) !== -1
            || value.length === 0;
    }

    isValidCompound(field: CaseField, value?: object): boolean {
        return this.isValidComplex(field)
            && this.isValidComplex(field, value);
    }

    keepField(field: CaseField, value?: object): boolean {
        value = value || {};

        if (this.isValidComplex(field)) {
            return this.isValidCompound(field, value);
        }

        return !this.isEmpty(field.value)
            || !this.isEmpty(value[field.id]);
    }



    transform(complexField, keepEmpty?: boolean) {
        if (!complexField || !complexField.field_type) {
            return [];
        }

        let fields = complexField.field_type.complex_fields || [];
        let values = complexField.value || {};

        return fields
            .map(f => {
                let clone = {...f};

                let value = this.getValue(f, values);

                if (!this.isEmpty(value)) {
                    clone.value = value;
                }

                return clone;
            })
            .filter(f => keepEmpty || this.keepField(f))
            .map(f => {
                f.display_context = complexField.display_context;
                return f;
            });
    }

    ngOnInit() {
        this.fields = this.transform(this.caseField);
        console.log(this.fields);
    }

    ngOnChanges(changes) {
        console.log('change!!!')
        // this.bob = this.transform(changes.caseField.currentValue);
        // console.log(this.bob);
    }

}
