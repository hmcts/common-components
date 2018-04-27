import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TabComponent} from './tab/tab.component';
import {TabsComponent} from './tabs/tabs.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [TabsComponent, TabComponent],
    exports: [TabsComponent, TabComponent]
})
export class SharedModule {
}
