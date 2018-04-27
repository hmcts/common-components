import { Component, Input } from '@angular/core';
import { CaseField } from '../../models/definition/case-field.model';

@Component({
    template: `{{caseField.value}}`
})
export class TextComponent {
    @Input()
    caseField: CaseField;
}
