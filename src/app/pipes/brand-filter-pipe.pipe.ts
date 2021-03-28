import { Pipe, PipeTransform } from '@angular/core';
import { Brand } from '../models/brand';

@Pipe({
  name: 'brandFilterPipe'
})
export class BrandFilterPipePipe implements PipeTransform {

  transform(value: Brand[], filterText: string): Brand[] {
    filterText = filterText? filterText.toLocaleLowerCase():""
    return filterText? value.filter((b:Brand)=>b.brandName.toLocaleLowerCase().indexOf(filterText)!==-1):value;
  }

}
