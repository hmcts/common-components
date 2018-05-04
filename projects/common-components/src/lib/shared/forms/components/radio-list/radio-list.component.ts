import { Component, OnInit, Input } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'lib-radio-list',
  templateUrl: './radio-list.component.html',
  styleUrls: ['./radio-list.component.scss']
})
export class RadioListComponent implements OnInit {

    control: FormControl;

    @Input()
    value: string;

    @Input()
    label: string;

    @Input()
    hint: string;

    @Input()
    options: [string];

    @Input()
    registerControl: <T extends AbstractControl> (control: T) => T;

    error: any;

  constructor() { }

  ngOnInit() {
      this.control = new FormControl(this.value);
  }

}


// import { Component, OnInit } from '@angular/core';

// import { AbstractFieldWriteComponent } from '../base-field/abstract-field-write.component';
// import { YesNoService } from './yes-no.service';
//
// @Component({
//     selector: 'ccd-write-yes-no-field',
//     templateUrl: './write-yes-no-field.html'
// })
// export class WriteYesNoFieldComponent extends AbstractFieldWriteComponent implements OnInit {
//
//     yesNoValues = [ 'Yes', 'No' ];
//     yesNoControl: FormControl;
//
//     constructor(private yesNoService: YesNoService) {
//         super();
//     }
//
//     ngOnInit() {
//         this.yesNoControl = this.registerControl(new FormControl(this.yesNoService.format(this.caseField.value)));
//     }
//
// }
