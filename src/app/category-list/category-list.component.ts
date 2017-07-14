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
  @Output() onFilter = new EventEmitter <any[]>();
  @Input () categories: Category[];
  
  categoryAdd: Category = new Category;
  categorySelect: Category = new Category; 
  categoryRemove: Category = new Category;

  constructor(private viewContainerRef: ViewContainerRef,
              private apiService: ApiService) { }

  ngOnInit() { }

  updateFilter(arg: any[]) {
    this.onFilter.emit(arg);
  }

  updateList() {
    this.onChanged.emit();
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
