import { Directive, Input, OnInit, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CaseField } from '../models/definition/case-field.model';
// import { FieldsUtils } from '../utils/fields.utils';
import { LabelSubstitutionService } from '../services/label-substitution.service';

@Directive({ selector: '[ccdLabelSubstitutor]' })
/** Checks all labels and substitutes any that reference other ones.
*/
export class LabelSubstitutorDirective implements OnInit, OnDestroy {

  @Input() caseField: CaseField;
  @Input() eventFields: CaseField[] = [];
  @Input() formGroup: FormGroup;

  formField: any;
  initialLabel: string;

  constructor(private labelSubstitutionService: LabelSubstitutionService) {}

  ngOnInit() {
    if (this.caseField.label) {
      this.initialLabel = this.caseField.label;
      this.formGroup = this.formGroup || new FormGroup({});
      // console.log('SubstitutorDirective FIELD: ' + this.caseField.id + ' init. Label: ' + this.caseField.label);
      // console.log('SubstitutorDirective EVENT_FIELDS: ', this.eventFields);
      this.caseField.label = this.getResolvedLabel(this.getReadOnlyAndFormFields());
    }
  }

  ngOnDestroy() {
    this.caseField.label = this.initialLabel;
  }

  private getResolvedLabel(fields) {
    // console.log('SubstitutorDirective FIELD ' + this.caseField.id + ' updatingVisibility based on fields: ', fields);
    return this.labelSubstitutionService.substituteLabel(fields, this.caseField.label);
    // console.log('SubstitutorDirective RESOLVED LABEL ', this.caseField.label);
  }

  private getReadOnlyAndFormFields() {
    let formFields = this.getFormFieldsValuesIncludingDisabled();
    // console.log('SubstitutorDirective FIELD ' + this.caseField.id + ' current form values including disabled: ', formFields);
    // return this.fieldsUtils.mergeLabelCaseFieldsAndFormFields(this.eventFields, formFields);
      return '';
  }

  private getFormFieldsValuesIncludingDisabled() {
    return this.formGroup.getRawValue();
  }

}
