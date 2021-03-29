import { Pipe, PipeTransform } from '@angular/core';
import { Brand } from '../models/brand';

@Pipe({
  name: 'brandFilterPipe'
})
export class BrandFilterPipePipe implements PipeTransform {

  transform(value: Brand[], filterBrandText: string): Brand[] {
    filterBrandText = filterBrandText ? filterBrandText.toLocaleLowerCase():""
    return filterBrandText ? value.filter((b:Brand)=>
    b.brandName.toLocaleLowerCase().indexOf(filterBrandText) !== -1):value;
  }

}
