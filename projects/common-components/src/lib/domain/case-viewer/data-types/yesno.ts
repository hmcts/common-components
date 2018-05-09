import { CaseField } from '../models/definition/case-field.model';
import { RadioListComponent} from "../../../shared/forms/components/radio-list/radio-list.component";
import {FieldValueComponent} from "../components/field-value/field-value.component";

export default function(caseField: CaseField, write = true) {
    const component = write ? RadioListComponent : FieldValueComponent;
    return {
        componentClass: component,
        data: {
            value: caseField.value,
            options: [
                'Yes',
                'No'
            ]
        }
    }
}