import { CaseField } from '../models/definition/case-field.model';
import {TextComponent} from "../../shared/forms/components/text/text.component";
import {FieldValueComponent} from "../components/field-value/field-value.component";

export default function(caseField: CaseField, write = true) {
    const component = write ? TextComponent : FieldValueComponent;
    return {
        componentClass: component,
        data: {
            value: caseField.value
        }
    }
}