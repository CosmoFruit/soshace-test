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
  
  @ViewChild ('changeItemModal') public changeModal: ModalDirective;
  @Input () item: Item;
  @Input () category: Category[];
  @Output() onChanged = new EventEmitter ();

  public show():void {
    this.changeModal.show();
  }
 
  public hide():void {
    this.changeModal.hide();
  }

  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

  Save() {
    console.log('call api save item...')
    this.apiService.saveItem(this.item).subscribe(result=> {
      this.changeModal.hide();
    });
    this.onChanged.emit(); 
  }

  Update() {
    console.log('call api save item...')
    this.apiService.updateItem(this.item).subscribe(result=> {
      this.changeModal.hide();
    });
    this.onChanged.emit(); 
  }

}
