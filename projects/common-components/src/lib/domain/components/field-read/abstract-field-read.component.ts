import { Input } from '@angular/core';
import { CaseField } from '../../models/definition/case-field.model';

export class AbstractFieldReadComponent {
  @Input()
  caseField: CaseField;
}
