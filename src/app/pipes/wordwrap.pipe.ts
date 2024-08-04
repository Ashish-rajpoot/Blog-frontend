import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wordwrap'
})
export class WordwrapPipe implements PipeTransform {
wraped !: any;
  transform(value: string, ...args: string[]): any {
    this.wraped = value.slice(0,100) + `Read More...`;
    return this.wraped;
  }


}
