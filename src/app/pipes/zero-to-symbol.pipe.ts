import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'zeroToSymbol'
})
export class ZeroToSymbolPipe implements PipeTransform {

  transform(value: number, args: string = "---"): any {
    
        return value===0 ? args : value;
    }
}
