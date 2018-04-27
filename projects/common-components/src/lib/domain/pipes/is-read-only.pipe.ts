import { Pipe, PipeTransform } from '@angular/core';
import { CaseField } from '../models/definition/case-field.model';

@Pipe({
  name: 'ccdIsReadOnly'
})
export class IsReadOnlyPipe implements PipeTransform {

  constructor() {};

  transform(field: CaseField): boolean {
      if (!field || !field.display_context) {
          return false;
      }
      return field.display_context.toUpperCase() === 'READONLY';
  }
}
