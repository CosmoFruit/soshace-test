import { Component, OnInit, ViewChild, Input} from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { Category } from '../category';

@Component({
  selector: 'app-category-add-modal',
  templateUrl: './category-add-modal.component.html',
  styleUrls: ['./category-add-modal.component.css']
})
export class CategoryAddModalComponent implements OnInit {
  
  @ViewChild ('addCategoryModal') public modal: ModalDirective;
  @Input () category: Category;

  constructor() { }

  ngOnInit() {
  }

  public show():void {
    this.modal.show();
  }
 
  public hide():void {
    this.modal.hide();
  }

}
