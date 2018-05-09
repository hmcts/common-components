import { CaseField } from '../models/definition/case-field.model';
import {SelectComponent} from "../../../shared/forms/components/select/select.component";
import {FieldValueComponent} from "../components/field-value/field-value.component";

export default function(caseField: CaseField, write = true) {
    // const component = write ? SelectComponent : FieldValueComponent;
    const component = SelectComponent;
    return {
        componentClass: component,
        data: {
            value: caseField.value
        }
    }
}