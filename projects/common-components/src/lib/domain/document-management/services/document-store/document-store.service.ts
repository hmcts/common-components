import { Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {of} from 'rxjs/internal/observable/of';

const defaultConfig: DocumentStoreServiceConfig = {
    dmStoreAppLocalUrl: 'http://localhost:3608/demproxy/dm',
    dmStoreUploadUrl: 'http://localhost:3608/demproxy/dm/documents',
    dmStoreSearchCreatorUrl: 'http://localhost:3608/demproxy/dm/documents/owned',
    dmStoreSearchMetadataUrl: 'http://localhost:3608/demproxy/dm/documents/filter'
}

export class DocumentStoreServiceConfig {
    dmStoreAppLocalUrl: string;
    dmStoreUploadUrl: string;
    dmStoreSearchCreatorUrl: string;
    dmStoreSearchMetadataUrl: string;
}

@Injectable()
export class DocumentStoreService {

    config = defaultConfig;

    constructor(private http: HttpClient
                // @Inject('config') private config: DocumentStoreServiceConfig
    ) {}

    // Headers ============
    // ServiceAuthorization string
    // user-id string
    // user-roles string
    // Body ===========
    // files  file[]
    // roles  string[]
    // classification string
    // ttl string

    postFile(file: File, classification: string, metaDate: Map<string, string>): Observable<any> {
        const formData: FormData = this.createForm(file, classification, metaDate);
        return this.http.post<any>(this.config.dmStoreUploadUrl, formData).pipe(
            tap(() => this.log('Uploading File')),
            catchError(this.handleError<any>('postFile'))
        );
    }

    deleteDocument(url: string): Observable<any> {
        return this.http.delete(this.convertUrlToProxy(url));
    }

    getCreatorDocuments(page: number, sortby: string, order: string, size: number): Observable<any>  {
        return this.http.post<any>(this.getDmFindByCreatorUrlWithParams(page, sortby, order, size), null).pipe(
            tap(() => this.log('Searching for Documents Created by User')),
            catchError(this.handleError<any>('getCreatorDocuments'))
        );
    }

    private getDmFindByCreatorUrlWithParams(page: number, sortby: string, order: string, size: number): string {
        return this.config.dmStoreSearchCreatorUrl
            + '?page=' + page
            + '&sort=' + sortby + ',' + order
            + '&size=' + size;
    }

    private createForm(
        file: File,
        // roles: string[],
        classification: string,
        // ttl: string,
        metaDate: Map<string, string>,
    ) {
        const formData = new FormData();
        formData.append('files', file, file.name);
        // roles.forEach(role => formData.append('roles', role));
        formData.append('classification', classification);
        // formData.append('ttl', ttl);

        if (metaDate) {
            metaDate.forEach( (v, k) => {
                formData.append('metadata[' + k + ']', v);
                console.log('metadata[' + k + '] = ' + v);
            });
        }

        return formData;
    }

    convertUrlToProxy(url: string): string {
        const URLsplit = url.split('/');
        const host = URLsplit[0] + '//' + URLsplit[2] + '/';
        return url.replace(host, this.config.dmStoreAppLocalUrl);
    }

    private log(text: string): void {
        console.log(text);
    }

    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // TODO: better job of transforming error for user consumption
            this.log(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }
}
