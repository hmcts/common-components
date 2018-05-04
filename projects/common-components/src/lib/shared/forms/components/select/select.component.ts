import { Component, OnInit, Input } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'lib-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
    control: FormControl;

    @Input()
    value: string;

    @Input()
    label: string;

    @Input()
    hint: string;

    @Input()
    items: [string];

    @Input()
    registerControl: <T extends AbstractControl> (control: T) => T;

    error: any;

    constructor() { }

    ngOnInit() {
        this.control = new FormControl(this.value);
    }


}
