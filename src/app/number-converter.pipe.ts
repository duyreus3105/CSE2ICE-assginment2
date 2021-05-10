import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberConverter'
})
export class NumberConverterPipe implements PipeTransform {

  transform(value: string): number {
    return parseFloat(value);
  }

}
