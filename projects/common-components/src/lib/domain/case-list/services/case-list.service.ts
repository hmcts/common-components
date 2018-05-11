import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';

declare function require(name: string);

const mockData = require('./mocklist.json');


@Injectable()
export class CaseListService {

    constructor() {
    }

    getFixedList(listItems) {
        const obj = {};
        listItems.forEach(listItem => {
            obj[listItem.code] = listItem.label;
        });
        return obj;
    }

    hydrateValue(data) {
        const enumColumns = {};
        data.columns.forEach(column => {
            if (column.case_field_type.fixed_list_items.length) {
                enumColumns[column.case_field_id] = this.getFixedList(column.case_field_type.fixed_list_items);
            }
        });

        if (Object.keys(enumColumns).length > 0) {
            data.results.forEach(result => {
                for (var fieldName in enumColumns) {
                    result.case_fields[fieldName] = enumColumns[fieldName][result.case_fields[fieldName]];
                }
            });
        }
        return data;
    }

    transform(data) {
        data = this.hydrateValue(data);

        const columns = data.columns.map(column => {
            return {
                id: column.case_field_id,
                label: column.label
            };
        });

        const rows = data.results.map(row => {
            return {
                case_id: row.case_id,
                ...row.case_fields
            };
        });
        return {
            columns,
            rows
        };
    }

    search(): Observable<Object> {
        return of(JSON.parse(JSON.stringify(mockData))).pipe(map(data => {
            return this.transform(data);
        }));
    }

    // search(): Observable<Object> {
    //     return of(JSON.parse(JSON.stringify(mockData))).pipe(map(data => {
    //         return this.transform(data);
    //     }));
    // }

}
