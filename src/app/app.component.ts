import { Component, ViewChild, ViewContainerRef, OnInit} from '@angular/core';
import { Item } from './item';
import { Category } from './category';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { ItemListComponent } from './item-list/item-list.component';
import { CategoryListComponent } from './category-list/category-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  @ViewChild('itemView') public itemView: ItemListComponent;
  @ViewChild('categoryView') public categoryView: CategoryListComponent;

  constructor(private viewContainerRef: ViewContainerRef) { }

  ngOnInit(){
  }

  addItem() {
  	console.log("call addItem");
    this.itemView.changeItem({});
  }

  addCategory() {
  	console.log("call addCategory");
    this.categoryView.addCategory({});
  }
}
