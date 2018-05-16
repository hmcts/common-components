import {Component, Input, OnInit} from '@angular/core';
import {DocumentStoreService} from '../../services/document-store/document-store.service';
import {ActivatedRoute} from '@angular/router';

export class DmPage {
    size: number;
    totalElements: number;
    totalPages: number;
    number: number;
}

@Component({
    selector: 'lib-dm-listview',
    templateUrl: './dm-listview.component.html',
    styleUrls: ['./dm-listview.component.scss']
})
export class DmListViewComponent implements OnInit {

    @Input() page = 0;
    @Input() sortby = 'createdOn';
    @Input() order = 'desc';
    @Input() size = 5;
    @Input() mockData;
    documents: string;
    error: string;
    dmPage: DmPage;

    constructor(
        // private activatedRoute: ActivatedRoute,
        private documentStoreService: DocumentStoreService) { }

    ngOnInit() {
        this.refresh();
    }

    refresh() {
        this.documentStoreService.getCreatorDocuments(this.page, this.sortby, this.order, this.size).subscribe(
            resp => {
                resp = this.mockData;
                if (resp.page) { this.dmPage = resp.page; }
                if (resp && resp._embedded && resp._embedded.documents) {
                    this.documents = resp._embedded.documents;
                } else {
                    if (this.canPrevPage()) {
                        this.page--;
                        this.refresh();
                    } else {
                        this.documents = null;
                        this.error = 'No Documents Found, Try Uploading a File.';
                    }
                }
            },
            err => {this.error = err;});
    }

    convertUrlToProxy(url: string): string {
        return this.documentStoreService.convertUrlToProxy(url);
    }

    deleteDocument(url: string) {
        this.documentStoreService.deleteDocument(url).subscribe(() => this.refresh());
    }

    get getCurrentPage(): number {
        return this.dmPage.number + 1;
    }

    get getTotalPage(): number {
        return (this.dmPage.totalPages < 1) ? 1 : this.dmPage.totalPages;
    }

    firstPage() {
        this.page = 0;
        this.refresh();
    }

    lastPage() {
        this.page = this.dmPage.totalPages - 1;
        this.refresh();
    }

    prevPage() {
        if (this.canPrevPage()) {
            this.page--;
            this.refresh();
        }
    }

    nextPage() {
        if (this.canNextPage()) {
            this.page++;
            this.refresh();
        }
    }

    canPrevPage() {
        return this.page > 0;
    }

    canNextPage() {
        return this.page < this.dmPage.totalPages - 1;
    }

}


