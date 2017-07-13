import { Component, OnInit, ViewChild, Input} from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { Category } from '../category';

@Component({
  selector: 'app-category-delete-modal',
  templateUrl: './category-delete-modal.component.html',
  styleUrls: ['./category-delete-modal.component.css']
})
export class CategoryDeleteModalComponent implements OnInit {

  @ViewChild ('deleteCategoryModal') public modal: ModalDirective;
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
