import { Injectable } from '@angular/core';
import { CaseField } from '../models/definition/case-field.model';
import { CurrencyPipe, DatePipe } from '@angular/common';

@Injectable()
export class FieldsUtils {

    private readonly currencyPipe: CurrencyPipe = new CurrencyPipe('en-GB');
    private readonly datePipe: DatePipe = new DatePipe('en-GB');

    private readonly DEFAULT_MERGE_FUNCTION = function mergeFunction(field: CaseField, result: any) {
        if (!result.hasOwnProperty(field.id)) {
          result[field.id] = field.value;
        }
      };

    private readonly LABEL_MERGE_FUNCTION = function mergeFunction(field: CaseField, result: any) {
        if (!result.hasOwnProperty(field.id)) {
            result[field.id] = field.value;
        }
        switch (field.field_type.type) {
            case 'FixedList': {
                result[field.id] = this.getFixedListLabelByCodeOrEmpty(field, result[field.id] || field.value);
                break;
            }
            case 'MoneyGBP': {
                let fieldValue = (result[field.id] || field.value);
                result[field.id] = this.getMoneyGBP(fieldValue);
                break;
            }
            case 'Date': {
                let fieldValue = (result[field.id] || field.value);
                result[field.id] = this.getDate(fieldValue);
                break;
            }
            case 'Collection': {
                let elements = (result[field.id] || field.value);
                if (elements) {
                    elements.forEach(elem => {
                        switch (field.field_type.collection_field_type.type) {
                            case 'MoneyGBP': {
                                elem.value = this.getMoneyGBP(elem.value);
                                break;
                            }
                            case 'Date': {
                                elem.value = this.getDate(elem.value);
                                break;
                            }
                        }
                    });
                }
                break;
            }
        }
    };

    private getMoneyGBP(fieldValue) {
        return fieldValue ? this.currencyPipe.transform(fieldValue / 100, 'GBP', true) : fieldValue;
    }

    private getDate(fieldValue) {
        return this.datePipe.transform(fieldValue, 'dd-MM-yyyy');
    }

    private getFixedListLabelByCodeOrEmpty(field, code) {
        return code ? field.field_type.fixed_list_items.find(item => item.code === code).label : '';
    }

    mergeCaseFieldsAndFormFields(caseFields: CaseField[], formFields: any): any {
        return this.mergeFields(caseFields, formFields, this.DEFAULT_MERGE_FUNCTION);
    }

    mergeLabelCaseFieldsAndFormFields(caseFields: CaseField[], formFields: any): any {
        return this.mergeFields(caseFields, formFields, this.LABEL_MERGE_FUNCTION);
    }

    private mergeFields(caseFields: CaseField[], formFields: any, mergeFunction: (CaseField, any) => void) {
        let result = this.cloneObject(formFields);
        caseFields.forEach(field => {
            mergeFunction(field, result);
        });
        return result;
    }

    private cloneObject(obj: any): any {
        return Object.assign({}, obj);
    }
}
