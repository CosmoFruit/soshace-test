import { Category } from '../category';
import { Component, OnInit, ViewChild, ViewContainerRef, Input, EventEmitter, Output} from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { CategoryAddModalComponent } from '../category-add-modal/category-add-modal.component';
import { CategoryDeleteModalComponent } from '../category-delete-modal/category-delete-modal.component';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  @ViewChild('addModal') public addModal : CategoryAddModalComponent;
  @ViewChild('deleteModal') public deleteModal : CategoryDeleteModalComponent;
  @Output() onChanged = new EventEmitter ();
  @Input () categories: Category[];
  
  categoryAdd: Category = new Category;
  categorySelect: Category = new Category; 
  categoryRemove: Category = new Category; 

	// categories: Category[];


  constructor(private viewContainerRef: ViewContainerRef,
              private apiService: ApiService) { }

  ngOnInit() { }

  updateList() {
     this.onChanged.emit(); 
     // this.apiService.getCategories().subscribe(result => this.categories = result);
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
