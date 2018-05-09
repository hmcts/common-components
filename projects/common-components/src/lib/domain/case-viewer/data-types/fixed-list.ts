import { CaseField } from '../models/definition/case-field.model';
import {SelectComponent} from "../../../shared/forms/components/select/select.component";
import {FieldValueComponent} from "../components/field-value/field-value.component";

function getFixedListValue(listItems, value) {
    const item = listItems.find(item => {
        return item.code === value;
    });
    return item.label;
}


export default function(caseField: CaseField, write = true): any {
    const component = write ? SelectComponent : FieldValueComponent;
    return {
        componentClass: component,
        data: {
            value: getFixedListValue(caseField.field_type.fixed_list_items, caseField.value),
            items: caseField.field_type.fixed_list_items
        }
    }
}