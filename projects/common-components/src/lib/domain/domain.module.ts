import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from "../shared/shared.module";
import {CaseViewerComponent} from './components/case-viewer/case-viewer.component';
import {LabelSubstitutionService} from "./services/label-substitution.service";
import {LabelSubstitutorDirective} from "./directives/label-substitutor.directive";
import {FieldsUtils} from "./utils/fields.utils";
import {DomainPipesModule} from "./pipes/pipes.module";
import {FieldReadComponent} from './components/field-read/field-read.component';
import {PaletteService} from "./services/palette.service";
import {FieldReadLabelComponent} from './components/field-read-label/field-read-label.component';
import {UnsupportedFieldComponent} from "./components/unsupported-field.component/unsupported-field.component";
import { FieldValueComponent } from './components/field-value/field-value.component';





@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        DomainPipesModule
    ],
    entryComponents: [
        UnsupportedFieldComponent,
        FieldValueComponent
    //     TextAreaComponent
    ],
    declarations: [
        CaseViewerComponent,
        LabelSubstitutorDirective,
        FieldReadComponent,
        FieldReadLabelComponent,
        UnsupportedFieldComponent,
        FieldValueComponent,
        // TextAreaComponent
    ],
    providers: [LabelSubstitutionService, FieldsUtils, PaletteService],
    exports: [
        CaseViewerComponent
    ]
})
export class DomainModule {
}






