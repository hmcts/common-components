import { Component, ComponentFactoryResolver, Input, OnInit, ReflectiveInjector, ViewChild, ViewContainerRef } from '@angular/core';
import { PaletteService } from '../../services/palette.service';
import { AbstractFieldReadComponent } from './abstract-field-read.component';
import { CaseField } from '../../models/definition/case-field.model';

@Component({
  selector: 'ccd-field-read',
  templateUrl: './field-read.html'
})
export class FieldReadComponent implements OnInit {

  @Input()
  withLabel = false;

    @Input()
    caseField: CaseField;

  @ViewChild('fieldContainer', {read: ViewContainerRef})
  fieldContainer: ViewContainerRef;

  constructor(private resolver: ComponentFactoryResolver, private paletteService: PaletteService) {}

  ngOnInit(): void {

    let componentClass = this.paletteService.getFieldComponentClass(this.caseField, false);
    let resolvedInputs = ReflectiveInjector.resolve([]);
    let injector = ReflectiveInjector.fromResolvedProviders(resolvedInputs, this.fieldContainer.parentInjector);
    let component = this.resolver.resolveComponentFactory(componentClass).create(injector);

    // Provide component @Inputs
    component.instance['caseField'] = this.caseField;

    this.fieldContainer.insert(component.hostView);
  }

}
