import { Pipe, PipeTransform } from "@angular/core";

/**
 * Amount pipe
 */
@Pipe({
    name: 'price',
    standalone : true
  })
  export class PricePipe implements PipeTransform {
  
    transform(value: number): unknown {
      const nbr = value.toString();
      return this.convertToLocalString(nbr);
    }
  
    convertToLocalString(nStr: string) {
      if (nStr === '' || !nStr) return '0';
      return Number(nStr).toLocaleString('fr');
    }
}