import {Injectable} from '@angular/core';
// import { ReadTextFieldComponent } from './text/read-text-field.component';
// import { TextComponent }  from "../components/text/text.component";
// import { TextAreaComponent} from "../components/text-area/text-area.component";
// import { ReadComplexFieldComponent } from './complex/read-complex-field.component';
// import { ReadNumberFieldComponent } from './number/read-number-field.component';
// import { ReadYesNoFieldComponent } from './yes-no/read-yes-no-field.component';
// import { ReadEmailFieldComponent } from './email/read-email-field.component';
// import { ReadPhoneUKFieldComponent } from './phone-uk/read-phone-uk-field.component';
// import { ReadDateFieldComponent } from './date/read-date-field.component';
// import { ReadFixedListFieldComponent } from './fixed-list/read-fixed-list-field.component';
// import { ReadMoneyGbpFieldComponent } from './money-gbp/read-money-gbp-field.component';
// import { WriteTextFieldComponent } from './text/write-text-field.component';
import {UnsupportedFieldComponent} from '../components/unsupported-field.component/unsupported-field.component';
// import { ReadCollectionFieldComponent } from './collection/read-collection-field.component';
// import { WriteComplexFieldComponent } from './complex/write-complex-field.component';
// import { WritePhoneUKFieldComponent } from './phone-uk/write-phone-uk-field.component';
// import { WriteNumberFieldComponent } from './number/write-number-field.component';
// import { WriteYesNoFieldComponent } from './yes-no/write-yes-no-field.component';
// import { WriteEmailFieldComponent } from './email/write-email-field.component';
// import { WriteCollectionFieldComponent } from './collection/write-collection-field.component';
// import { WriteFixedListFieldComponent } from './fixed-list/write-fixed-list-field.component';
// import { WriteMoneyGbpFieldComponent } from './money-gbp/write-money-gbp-field.component';
// import { WriteTextAreaFieldComponent } from './text-area/write-text-area-field.component';
// import { ReadMultiSelectListFieldComponent } from './multi-select-list/read-multi-select-list-field.component';
// import { WriteMultiSelectListFieldComponent } from './multi-select-list/write-multi-select-list-field.component';
// import { WriteDateFieldComponent } from './date/write-date-field.component';
// import { ReadDocumentFieldComponent } from './document/read-document-field.component';
// import { WriteDocumentFieldComponent } from './document/write-document-field.component';
// import { LabelFieldComponent } from './label/label-field.component';
// import { WriteAddressFieldComponent } from './address/write-address-field.component';
import {CaseField} from '../models/definition/case-field.model';
import Text from '../data-types/text';
import TextArea from '../data-types/text-area';
import YesNo from '../data-types/yesno'
import FixedList from '../data-types/fixed-list';
import Date from '../data-types/date';
import Collection from '../data-types/collection';
import Complex from '../data-types/complex';

@Injectable()
export class PaletteService {

    getFieldComponentClass(caseField: CaseField, write: boolean): any {

        switch (caseField.field_type.type) {
            case 'Text':
            case 'Postcode':
            case 'Number':
            case 'Email':
            case 'PhoneUK':
                return Text(caseField, write);
            case 'TextArea':
                return TextArea(caseField, write);
            // return TextAreaComponent;
            //   return write ? WriteNumberFieldComponent : ReadNumberFieldComponent;
            case 'YesOrNo':
                return YesNo(caseField, write);
            //   return write ? WriteYesNoFieldComponent : ReadYesNoFieldComponent;

            //   return write ? WriteEmailFieldComponent : ReadEmailFieldComponent;

            //   return write ? WritePhoneUKFieldComponent : ReadPhoneUKFieldComponent;
            case 'Date':
                return Date(caseField, write);
            //   return write ? WriteDateFieldComponent : ReadDateFieldComponent;
            // case 'MoneyGBP':
            //   return write ? WriteMoneyGbpFieldComponent : ReadMoneyGbpFieldComponent;
            case 'FixedList':
                return FixedList(caseField, write);
            case 'Collection':
                return Collection(caseField, write);
            case 'Complex':
                return Complex(caseField, write);
            //   switch (caseField.field_type.id) {
            //     case 'AddressGlobalUK':
            //     case 'AddressUK':
            //       return write ? WriteAddressFieldComponent : ReadComplexFieldComponent;
            //     default:
            //       return write ? WriteComplexFieldComponent : ReadComplexFieldComponent;
            //   }
            // case 'Collection':
            //   return write ? WriteCollectionFieldComponent : ReadCollectionFieldComponent;
            // case 'MultiSelectList':
            //   return MultiSelect(caseField, write);
            // case 'Document':
            //   return write ? WriteDocumentFieldComponent : ReadDocumentFieldComponent;
            // case 'Label':
            //   return LabelFieldComponent;
            default:
                console.log(caseField.field_type.type)
                return UnsupportedFieldComponent;
        }
    }
}
