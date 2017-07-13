import { Component, OnInit, ViewChild, Input, EventEmitter, Output} from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { Category } from '../category';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-category-delete-modal',
  templateUrl: './category-delete-modal.component.html',
  styleUrls: ['./category-delete-modal.component.css']
})
export class CategoryDeleteModalComponent implements OnInit {

  @ViewChild ('deleteCategoryModal') public modal: ModalDirective;
  @Input () category: Category;
  @Output() onChanged = new EventEmitter ();

  constructor( private apiService: ApiService ) { }

  ngOnInit() {
  }

  public show():void {
    this.modal.show();
  }
 
  public hide():void {
    this.modal.hide();
  }

  Remove() {
    console.log('call api save category...')
    this.apiService.deleteCategory(this.category).subscribe(result=> {
      this.modal.hide();      
    });
    this.onChanged.emit(); 
  }

}
