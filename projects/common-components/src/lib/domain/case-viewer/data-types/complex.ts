import { CaseField } from '../models/definition/case-field.model';
import {ComplexComponent} from "../components/complex/complex.component";

export default function(caseField: CaseField, write = true) {
    const component = ComplexComponent;
    return {
        componentClass: component,
        data: {
            value: caseField.value
        }
    }
}