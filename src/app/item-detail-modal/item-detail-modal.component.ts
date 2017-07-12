import { Component, OnInit, ViewChild, Input} from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { Item } from '../item';

@Component({
  selector: 'app-item-detail-modal',
  templateUrl: './item-detail-modal.component.html',
  styleUrls: ['./item-detail-modal.component.css']
})
export class ItemDetailModalComponent implements OnInit {
  
  @ViewChild ('changeItemModal') public changeModal: ModalDirective;
  @Input () item: Item;

  public show():void {
    this.changeModal.show();
  }
 
  public hide():void {
    this.changeModal.hide();
  }

  constructor() { }

  ngOnInit() {
  }

}
