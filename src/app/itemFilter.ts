import { Pipe, PipeTransform } from '@angular/core';  
  
@Pipe({  
    name: 'itemFilter',  
    pure: false  
})  
  
export class ItemFilter implements PipeTransform {  
    transform(items: any[], arg: any[]): any { 

    	//Без изменений (все товары)
        if (!items || !arg) {  
            return items;  
        }

        //Выбор товаров без категории
        if ( arg[0] === 'null' ) {        	    	    
    		for (let i=0; i<arg[1].length; i++) {
    			items = items.filter( item => item.category.indexOf( arg[1][i].name ) == -1 ); 
    		}
    		return items;
    	}

    	 //Выбор товаров по категории arg[0]: string;
        return items.filter(item => item.category.indexOf(arg[0]) !== -1); 
    }  
} 