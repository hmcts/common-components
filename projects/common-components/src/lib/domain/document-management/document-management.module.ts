import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import {DmUploadComponent} from './components/dm-upload/dm-upload.component';
import {DmListViewComponent} from './components/dm-listview/dm-listview.component';
import {DocumentStoreService} from './services/document-store/document-store.service';

@NgModule({
    imports: [
       CommonModule,
       BrowserModule,
       FormsModule,
       HttpClientModule,
    ],
    entryComponents: [

    ],
    declarations: [
        DmListViewComponent,
        DmUploadComponent,
    ],
    providers: [
        DocumentStoreService
    ],
    exports: [
        DmUploadComponent,
        DmListViewComponent
    ]
})
export class DocumentManagementModule {
}
