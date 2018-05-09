import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from "../shared/shared.module";
import {CaseViewerModule} from "./case-viewer/case-viewer.module";
import {CaseViewerComponent} from "./case-viewer/components/case-viewer/case-viewer.component";

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        CaseViewerModule
    ],
    declarations: [
    ],
    exports: [
        CaseViewerComponent
    ]
})
export class DomainModule {
}






