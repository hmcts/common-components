import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl, FormControl} from '@angular/forms';

@Component({
    selector: 'lib-text-area',
    templateUrl: './text-area.component.html',
    styleUrls: ['./text-area.component.scss']
})
export class TextAreaComponent implements OnInit {

    control: FormControl;

    @Input()
    value: string;

    @Input()
    label: string;

    @Input()
    hint: string;

    @Input()
    registerControl: <T extends AbstractControl> (control: T) => T;

    error: any;

    constructor() {
    }


    ngOnInit() {
        this.control = new FormControl(this.value);
    }
}