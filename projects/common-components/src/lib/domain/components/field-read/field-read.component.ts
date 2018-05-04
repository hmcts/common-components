import {
    Component,
    ComponentFactoryResolver,
    Input,
    OnInit,
    ReflectiveInjector,
    ViewChild,
    ViewContainerRef
} from '@angular/core';
import {PaletteService} from '../../services/palette.service';
import {CaseField} from '../../models/definition/case-field.model';

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

    constructor(private resolver: ComponentFactoryResolver, private paletteService: PaletteService) {
    }

    ngOnInit(): void {

        let definition = this.paletteService.getFieldComponentClass(this.caseField, false);
        if(definition.componentClass) {
            let resolvedInputs = ReflectiveInjector.resolve([]);
            let injector = ReflectiveInjector.fromResolvedProviders(resolvedInputs, this.fieldContainer.parentInjector);
            let component = this.resolver.resolveComponentFactory(definition.componentClass).create(injector);

            // Provide component @Inputs
            component.instance['caseField'] = this.caseField;
              Object.keys(definition.data).forEach(key => {
                  component.instance[key] = definition.data[key];
              });

            this.fieldContainer.insert(component.hostView);
        }
        else {
            let componentClass = definition;
            let resolvedInputs = ReflectiveInjector.resolve([]);
            let injector = ReflectiveInjector.fromResolvedProviders(resolvedInputs, this.fieldContainer.parentInjector);
            let component = this.resolver.resolveComponentFactory(componentClass).create(injector);

            // Provide component @Inputs
            component.instance['caseField'] = this.caseField;

            this.fieldContainer.insert(component.hostView);

        }
        // let componentClass = this.paletteService.getFieldComponentClass(this.caseField, false);

        // let resolvedInputs = ReflectiveInjector.resolve([]);
        // let injector = ReflectiveInjector.fromResolvedProviders(resolvedInputs, this.fieldContainer.parentInjector);
        // let component = this.resolver.resolveComponentFactory(definition.componentClass).create(injector);
        //
        // // Provide component @Inputs
        // // component.instance['caseField'] = this.caseField;
        // //   Object.keys(definition.data).forEach(key => {
        // //       component.instance[key] = definition.data[key];
        // //   });
        //
        //
        // this.fieldContainer.insert(component.hostView);
    }

}
