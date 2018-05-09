import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TabComponent} from './tab/tab.component';
import {TabsComponent} from './tabs/tabs.component';
import { FormsModule } from "./forms/forms.module";
import { TableComponent } from './table/table.component';
import {MatTableModule} from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        MatTableModule,
        FormsModule
    ],
    declarations: [TabsComponent, TabComponent, TableComponent],
    exports: [
        TabsComponent,
        TabComponent
    ]
})
export class SharedModule {
}
