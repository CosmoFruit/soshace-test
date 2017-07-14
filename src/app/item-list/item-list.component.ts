import { Component, OnInit, ViewChild, ViewContainerRef, Input} from '@angular/core';
import { Item } from '../item';
import { Category } from '../category';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { ItemDetailModalComponent } from '../item-detail-modal/item-detail-modal.component';
import { ItemDeleteModalComponent } from '../item-delete-modal/item-delete-modal.component';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})

export class ItemListComponent implements OnInit {
	
  @ViewChild('changeModal') public changeModal:ItemDetailModalComponent;
  @ViewChild('deleteModal') public deleteModal:ItemDeleteModalComponent;
  @Input () categories: Category[];
  @Input () filterargs: any[]; 

  // itemSelect: Item = new Item; 
  itemRemove: Item = new Item; 
  itemIdx: number = 0;
  items: Item[];
  errorMessage: string;
  
  constructor( private viewContainerRef: ViewContainerRef,
               private apiService: ApiService ) { }

  ngOnInit() {
    this.updateList ();
  }

  updateList() {
    this.apiService.getItems()
                   .subscribe(
                      (result: Item[]) => {
                        this.items = result;
                      },
                      error => this.errorMessage = <any> error
                   );
  }
  
  removeItem (idx: number, item: Item) {
    console.log("call removeItem");
    this.itemIdx = idx;
    this.itemRemove = item;
    this.deleteModal.show();
  }

  changeItem(item: Item) {
    console.log("call changeItem");
    this.changeModal.Select(item);
  }

}
