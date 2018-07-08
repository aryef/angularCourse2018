import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'zeroToSymbol'
})
export class ZeroToSymbolPipe implements PipeTransform {

  transform(value: number, args?: any): any {
    if(value===0)
    {
        return "---"
    }
    else{
        return value;
    }
    return null;
  }

}
