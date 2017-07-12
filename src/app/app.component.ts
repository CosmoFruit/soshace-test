import { Component, ViewChild, ViewContainerRef, OnInit} from '@angular/core';
import { Item } from './item';
import { Category } from './category';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { ItemListComponent } from './item-list/item-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  @ViewChild('itemView') public itemView: ItemListComponent;

  constructor(private viewContainerRef: ViewContainerRef) { }

  ngOnInit(){
  }

  addItem() {
  	console.log("call addItem");
    this.itemView.changeItem({});
  }

  addCategory() {
  	console.log("call addCategory");
  }
}
