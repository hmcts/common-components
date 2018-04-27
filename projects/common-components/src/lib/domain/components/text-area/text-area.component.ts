import { Component, Input } from '@angular/core';
import { CaseField } from '../../models/definition/case-field.model';

@Component({
    template: `<span style="white-space: pre-wrap">{{caseField.value}}</span>`
})
export class TextAreaComponent {
    @Input()
    caseField: CaseField;
}
