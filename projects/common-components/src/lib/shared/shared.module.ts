import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TabComponent} from './tab/tab.component';
import {TabsComponent} from './tabs/tabs.component';
import { FormsModule } from "./forms/forms.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [TabsComponent, TabComponent],
    exports: [
        TabsComponent,
        TabComponent
    ]
})
export class SharedModule {
}
