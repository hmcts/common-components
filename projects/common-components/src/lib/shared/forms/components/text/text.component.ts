import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl, FormControl} from '@angular/forms';

@Component({
    selector: 'lib-text',
    templateUrl: './text.component.html',
    styleUrls: ['./text.component.scss']
})
export class TextComponent implements OnInit {

    control: FormControl;

    @Input()
    value: string;

    @Input()
    Options: [string]

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