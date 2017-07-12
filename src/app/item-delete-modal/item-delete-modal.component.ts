import { Component, OnInit, ViewChild, Input} from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { Item } from '../item';

@Component({
  selector: 'app-item-delete-modal',
  templateUrl: './item-delete-modal.component.html',
  styleUrls: ['./item-delete-modal.component.css']
})
export class ItemDeleteModalComponent implements OnInit {

  @ViewChild ('deleteItemModal') public modal: ModalDirective;
  @Input () idx: number;
  @Input () item: Item;

  public show():void {
    this.modal.show();
  }
 
  public hide():void {
    this.modal.hide();
  }

  constructor() { }

  ngOnInit() { }

}
