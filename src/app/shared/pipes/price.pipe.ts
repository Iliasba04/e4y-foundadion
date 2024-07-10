import { Pipe, PipeTransform } from "@angular/core";

/**
 * Amount pipe
 */
@Pipe({
    name: 'price',
    standalone : true
  })
  export class PricePipe implements PipeTransform {
  
    transform(value: number, locale: string = 'de-DE'): unknown {
      return this.convertToLocalString(value, locale);
    }
  
    convertToLocalString(nStr: number, locale:string) {
      /**if (nStr === '' || !nStr) return '0';
      return Number(nStr).toLocaleString('fr');*/
        if (nStr === null || nStr === undefined) {
          return '';
        }
    
        return new Intl.NumberFormat(locale).format(nStr);
      
    }
}