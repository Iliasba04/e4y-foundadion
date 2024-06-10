import { Pipe, PipeTransform } from "@angular/core";

/**
 * Amount pipe
 */
@Pipe({
    name: 'price',
    standalone : true
  })
  export class PricePipe implements PipeTransform {
  
    transform(value: any, ...args: unknown[]): unknown {
      return this.convertToLocalString(value);
    }
  
    convertToLocalString(nStr: string) {
      if (nStr === '' || !nStr) return '0';
      return Number(nStr).toLocaleString('fr');
    }
}