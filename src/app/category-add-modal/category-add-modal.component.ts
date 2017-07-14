import { Component, OnInit, ViewChild, Input, EventEmitter, Output} from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { Category } from '../category';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-category-add-modal',
  templateUrl: './category-add-modal.component.html',
  styleUrls: ['./category-add-modal.component.css']
})


export class CategoryAddModalComponent implements OnInit {
  
  @ViewChild ('addCategoryModal') public modal: ModalDirective;
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

  Save() {
    this.apiService.saveCategory(this.category)
                   .subscribe(( result : any ) => {
                    this.modal.hide();
                   },
                   error => this.errorMessage = <any> error
                   );
    this.onChanged.emit(); 
  }

}
