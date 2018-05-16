import { NgModule } from '@angular/core';
import { CommonComponentsComponent } from './common-components.component';
import {DomainModule} from './domain/domain.module';

@NgModule({
  imports: [
      DomainModule
  ],
  declarations: [CommonComponentsComponent],
  exports: [DomainModule]
})
export class CommonComponentsModule { }
