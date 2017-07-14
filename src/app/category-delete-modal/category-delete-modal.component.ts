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
  errorMessage: string;

  constructor( private apiService: ApiService ) { }

  ngOnInit() { }

  public show():void {
    this.modal.show();
  }
 
  public hide():void {
    this.modal.hide();
  }

  Remove() {
    this.apiService.deleteCategory(this.category)
                   .subscribe(( result: any ) => {
                    this.modal.hide();
                   },
                    error => this.errorMessage = <any> error
                   );
    this.onChanged.emit(); 
  }

}
