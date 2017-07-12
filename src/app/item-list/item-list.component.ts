import { Component, OnInit, ViewChild, ViewContainerRef, Input} from '@angular/core';
import { Item } from '../item';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { ItemDetailModalComponent } from '../item-detail-modal/item-detail-modal.component';
import { ItemDeleteModalComponent } from '../item-delete-modal/item-delete-modal.component';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})

export class ItemListComponent implements OnInit {
	
  @ViewChild('changeModal') public changeModal:ItemDetailModalComponent;
  @ViewChild('deleteModal') public deleteModal:ItemDeleteModalComponent;

  itemSelect: Item; 
  itemRemove: Item; 
  itemIdx: number;
	items: Item[] = 
    	[
        	{ _id: "1", name: "Хлеб", priceIn: 15.9, priceOut: 17 },
       		{ _id: "2", name: "Масло", priceIn: 60, priceOut: 58.9 },
        	{ _id: "3", name: "Картофель", priceIn: 22.6, priceOut: 22.7 },
        	{ _id: "4", name: "Сыр", priceIn: 310, priceOut: 310.5}
    	];
   

  constructor(private viewContainerRef: ViewContainerRef) { }

  ngOnInit() {
    this.itemSelect = this.items[0];
    this.itemRemove = this.items[0];
    this.itemIdx = 0;
  }
  
  removeItem (idx: number, item: Item) {
    console.log("call removeItem");
    this.itemIdx = idx;
    this.itemRemove = item;
    this.deleteModal.show();
  }

  changeItem(item: Item) {
    console.log("call changeItem");
    this.itemSelect = item;
    this.changeModal.show();
  }

}
