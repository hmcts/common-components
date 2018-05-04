import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

// import {UnsupportedFieldComponent} from "../../domain/components/unsupported-field.component/unsupported-field.component";
// import {TextAreaComponent} from '../../domain/components/text-area/text-area.component';
import {TextComponent} from './components/text/text.component';
import {ReactiveFormsModule} from "@angular/forms";
import { TextAreaComponent } from './components/text-area/text-area.component';
import { RadioListComponent } from './components/radio-list/radio-list.component';
import { SelectComponent } from './components/select/select.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    entryComponents: [
        TextComponent,
        TextAreaComponent,
        RadioListComponent,
        SelectComponent
    ],
    declarations: [
        TextComponent,
        TextAreaComponent,
        RadioListComponent,
        SelectComponent
    ],
    exports: [
        // TextComponent
    ]
})
export class FormsModule {
}
