import { Category } from '../category';
import { Component, OnInit, ViewChild, ViewContainerRef, Input} from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { CategoryAddModalComponent } from '../category-add-modal/category-add-modal.component';
import { CategoryDeleteModalComponent } from '../category-delete-modal/category-delete-modal.component';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  @ViewChild('addModal') public addModal : CategoryAddModalComponent;
  @ViewChild('deleteModal') public deleteModal : CategoryDeleteModalComponent;
  
  categoryAdd: Category;
  categorySelect: Category; 
  categoryRemove: Category; 

	categories: Category[] =
		[
        	{ name: "Овощи" },
       		{ name: "Молочные"},
        	{ name: "Выпечка"}
    	];

  constructor(private viewContainerRef: ViewContainerRef) { }

  ngOnInit() {
    this.categoryAdd = {};
    this.categorySelect = this.categories[0];
    this.categoryRemove = this.categories[0];
  }

  addCategory(category: Category) {
    console.log("call addCategory from list");
    this.categoryAdd = category;    
    this.addModal.show();
  }

  selectCategory(category: Category) {
    console.log("call selectCategory");
  }

  removeCategory(category: Category) {
    console.log("call removeCategory");
    this.categoryRemove = category;
    this.deleteModal.show();
  }

}
