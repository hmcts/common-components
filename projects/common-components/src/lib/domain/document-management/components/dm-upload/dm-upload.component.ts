import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {DocumentStoreService} from '../../services/document-store/document-store.service';
import {MetaDataFields} from '../../models/MetaData';

@Component({
    selector: 'lib-dm-upload',
    templateUrl: './dm-upload.component.html',
    styleUrls: ['./dm-upload.component.scss']
})
export class DmUploadComponent implements OnInit {

    metaDataFieldList: MetaDataFields[];
    errorMessage: string;
    fileToUpload: File = null;

    constructor(
        // private activatedRoute: ActivatedRoute,
        private location: Location,
        private documentService: DocumentStoreService) {}

    ngOnInit(): void {
        this.metaDataFieldList = [
            {
                fieldName : 'Title',
                hint : '',
                metaDataName: 'title',
                value: '',
                required: true
            },
            {
                fieldName : 'Case Ref',
                hint : 'What the reference for this case?',
                metaDataName: 'caseref',
                value: '123456789',
                required: true
            },
            {
                fieldName : 'Name',
                hint : null,
                metaDataName: 'name',
                value: 'alec',
                required: true
            },
        ];
    }

    handleFileInput(file: File) {
        this.fileToUpload = file;
        this.errorMessage = null;
    }

    uploadDocument() {

        // this.metaDataFieldList.map(f => (alert(f.value)));
        //
        if (this.fileToUpload) {
            this.postFile();
        } else {
            this.errorMessage = 'You have not selected a file for upload.';
        }
    }

    postFile() {
        const metadataObj: Map<string, string> = new Map<string, string>();
        // metadataObj.set('title', 'some random Title');
        // metadataObj.set('author', 'Joe');
        // metadataObj.set('cake', 'yesplease');

        this.documentService.postFile(this.fileToUpload, 'PRIVATE', metadataObj)
            .subscribe(
                () => this.goBack(),
                err => {this.errorMessage = err;}
            );
    }

    cancelUpload() {
        this.goBack();
    }

    goBack(): void {
        this.location.back();
    }

}
