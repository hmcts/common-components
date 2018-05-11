import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from "../shared/shared.module";
import {CaseViewerModule} from "./case-viewer/case-viewer.module";
import {CaseViewerComponent} from "./case-viewer/components/case-viewer/case-viewer.component";

import {CaseListModule} from "./case-list/case-list.module";
import {CaseListComponent} from "./case-list/components/case-list/case-list.component";

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        CaseViewerModule,
        CaseListModule
    ],
    declarations: [
    ],
    exports: [
        CaseViewerComponent,
        CaseListComponent
    ]
})
export class DomainModule {
}






