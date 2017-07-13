import { Component, OnInit, ViewChild, Input,  EventEmitter, Output} from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { Item } from '../item';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-item-delete-modal',
  templateUrl: './item-delete-modal.component.html',
  styleUrls: ['./item-delete-modal.component.css']
})
export class ItemDeleteModalComponent implements OnInit {

  @ViewChild ('deleteItemModal') public modal: ModalDirective;
  @Input () idx: number;
  @Input () item: Item;
  @Output() onRemove = new EventEmitter ();

  public show():void {
    this.modal.show();
  }
 
  public hide():void {
    this.modal.hide();
  }

  constructor(private apiService: ApiService) { }

  ngOnInit() { }

  remove() {
    console.log('call api save item...')
    this.apiService.deleteItem(this.item).subscribe(result=> {
      this.modal.hide();      
    });
    this.onRemove.emit(); 
  }

}
