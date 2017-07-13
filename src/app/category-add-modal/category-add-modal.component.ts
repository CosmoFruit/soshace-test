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

  constructor( private apiService: ApiService ) { }

  ngOnInit() {
  }

  public show():void {
    this.modal.show();
  }
 
  public hide():void {
    this.modal.hide();
  }

   Save() {
    console.log('call api save category...')
    this.apiService.saveCategory(this.category).subscribe(result=> {
      this.modal.hide();      
    });
    this.onChanged.emit(); 
  }

}
