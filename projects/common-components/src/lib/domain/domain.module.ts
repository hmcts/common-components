import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {CaseViewerModule} from './case-viewer/case-viewer.module';
import {CaseViewerComponent} from './case-viewer/components/case-viewer/case-viewer.component';

import {CaseListModule} from './case-list/case-list.module';
import {CaseListComponent} from './case-list/components/case-list/case-list.component';
import {DocumentManagementModule} from './document-management/document-management.module';
import {DmListViewComponent} from './document-management/components/dm-listview/dm-listview.component';
import {DmUploadComponent} from './document-management/components/dm-upload/dm-upload.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        CaseViewerModule,
        CaseListModule,
        DocumentManagementModule
    ],
    declarations: [
    ],
    exports: [
        CaseViewerComponent,
        CaseListComponent,
        DmListViewComponent,
        DmUploadComponent
    ]
})
export class DomainModule {
}






