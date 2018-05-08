import { CaseField } from '../models/definition/case-field.model';
import {TextComponent} from "../../shared/forms/components/text/text.component";
import {FieldValueComponent} from "../components/field-value/field-value.component";
import { DatePipe} from "../pipes/date.pipe";

export default function(caseField: CaseField, write = true) {
    const component = write ? TextComponent : FieldValueComponent;

    const value = new DatePipe().transform(caseField.value, '');
    return {
        componentClass: component,
        data: {
            value: value
        }
    }
}