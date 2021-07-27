import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(value: Product[], filterText: any): Product[] {
    //arama yerine eğer harf girildiyse kucuk harfe cevir.     
    filterText = filterText?filterText.toLocaleLowerCase():null;

    //filtertext varsa valueyı filtreler.
    //product türünde bir p yi, her bir p için ismini kucuk harfe cevir ve icerisinde arama ifadesi var mı bak
    return filterText?value.filter((p:Product)=>p.name.toLocaleLowerCase().indexOf(filterText)!==-1):value;
  }

}
  