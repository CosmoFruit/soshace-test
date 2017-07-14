import { Component, OnInit, ViewChild, Input, EventEmitter, Output} from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { Item } from '../item';
import { Category } from '../category';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-item-detail-modal',
  templateUrl: './item-detail-modal.component.html',
  styleUrls: ['./item-detail-modal.component.css']
})

export class ItemDetailModalComponent implements OnInit {
  
  @ViewChild ('changeItemModal') public modal: ModalDirective;
  // @Input () item: Item;
  @Input () category: Category[];
  @Output() onChanged = new EventEmitter ();
  selectItem: Item = new Item;
  errorMessage: string;

  public show():void {
    this.modal.show();
  }
 
  public hide():void {
    this.modal.hide();
  }

  constructor(private apiService: ApiService) { }

  ngOnInit() { }

  public Select(item: Item) {
    this.selectItem = Object.assign(new Item, item);
    this.show();
  }

  Save() {   
    this.apiService.saveItem(this.selectItem)
                   .subscribe((result: any) => {
                    this.modal.hide();
                   },
                    error => this.errorMessage = <any> error
                   );
    this.onChanged.emit(); 
  }

  Update() {    
    this.apiService.updateItem(this.selectItem)
                   .subscribe((result: any) => {
                    this.modal.hide();
                   },
                    error => this.errorMessage = <any> error
                   );
    this.onChanged.emit(); 
  }

}