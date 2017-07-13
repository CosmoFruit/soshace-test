import { Component, ViewChild, ViewContainerRef, OnInit} from '@angular/core';
import { Item } from './item';
import { Category } from './category';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { ItemListComponent } from './item-list/item-list.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  @ViewChild('itemView') public itemView: ItemListComponent;
  @ViewChild('categoryView') public categoryView: CategoryListComponent;

  c: Category [];
  f: any[];

  constructor( private viewContainerRef: ViewContainerRef,
               private apiService: ApiService ) { }

  ngOnInit(){   
    this.updateList();
  }

  updateList() {
    this.apiService.getCategories().subscribe(result => this.c = result);
  }

  updateFilter(arg: any[]) {
    this.f = arg;
  };

  addItem() {
  	console.log("call addItem");
    this.itemView.changeItem(new Item);
  }

  addCategory() {
  	console.log("call addCategory");
    this.categoryView.addCategory(new Category);
  }
}
