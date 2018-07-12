import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ellipsys'
})
export class EllipsysPipe implements PipeTransform {

  transform(value: string, args: number =5): any {
    
        return value.length <= args ? value : value.substring(0, 5) + '...';
    }
}
