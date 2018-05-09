import { CaseField } from '../models/definition/case-field.model';
import {TextAreaComponent} from "../../../shared/forms/components/text-area/text-area.component";
import {FieldValueComponent} from "../components/field-value/field-value.component";

export default function(caseField: CaseField, write = true) {
    const component = write ? TextAreaComponent : FieldValueComponent;
    return {
        componentClass: component,
        data: {
            value: caseField.value
        }
    }
}