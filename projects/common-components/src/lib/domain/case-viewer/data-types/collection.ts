import { CaseField } from '../models/definition/case-field.model';
import {CollectionComponent} from "../components/collection/collection.component";
import {FieldValueComponent} from "../components/field-value/field-value.component";

export default function(caseField: CaseField, write = true) {
    const component = CollectionComponent;
    console.log('sdfsdf')
    return {
        componentClass: component,
        data: {
            value: caseField.value
        }
    }
}