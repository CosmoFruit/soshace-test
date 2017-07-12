import { Component, OnInit } from '@angular/core';

export class Item{
    constructor(name: string, priceIn: number, priceOut: number, category: string) {}
}

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})

export class ItemListComponent implements OnInit {
	
	items: Item[] = 
    	[
        	{ name: "Хлеб", priceIn: 15.9, priceOut: 17 },
       		{ name: "Масло", priceIn: 60, priceOut: 58.9 },
        	{ name: "Картофель", priceIn: 22.6, priceOut: 22.7 },
        	{ name: "Сыр", priceIn: 310, priceOut: 310.5}
    	];
   

  constructor() { }

  ngOnInit() {
  }

  addItem () {

  }
  
  removeItem () {

  }

  changeItem() {

  }

}
