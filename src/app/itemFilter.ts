import { Pipe, PipeTransform } from '@angular/core';  
import { Item } from './item';  
  
@Pipe({  
    name: 'itemFilter',  
    pure: false  
})  
  
export class ItemFilter implements PipeTransform {  
    transform(items: any[], filter: Item): any {  
        if (!items || !filter) {  
            return items;  
        }  
        return items.filter(item => item.category.indexOf(filter) !== -1);  
    }  
} 