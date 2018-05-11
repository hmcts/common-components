import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CaseListComponent} from './components/case-list/case-list.component';
import {CaseListService} from "./services/case-list.service";
import {SharedModule} from "../../shared/shared.module";

@NgModule({
    imports: [
        CommonModule,
        SharedModule
    ],
    providers: [
        CaseListService
    ],
    declarations: [
        CaseListComponent
    ],
    exports: [
        CaseListComponent
    ]
})
export class CaseListModule {
}
