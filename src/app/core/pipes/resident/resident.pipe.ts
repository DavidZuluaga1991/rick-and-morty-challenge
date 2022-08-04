import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'resident'
})
export class ResidentPipe implements PipeTransform {

  transform(value: string, args?: any): any {
    if (value) {
      const split = value.split('/');
      return split[split.length - 1];
    } else {
      return '';
    }
  }

}
