export class Item{
   _id: string;
   name: string;
   priceIn: number; 
   priceOut: number; 
   category: string;

    constructor( values: Object = {} ) {
		Object.assign( this, values );
	}
}

