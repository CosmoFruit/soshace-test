import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { AlertModule } from 'ngx-bootstrap/alert';

import { AppComponent } from './app.component';
import { ItemListComponent } from './item-list/item-list.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { ItemDetailModalComponent } from './item-detail-modal/item-detail-modal.component';
import { ItemDeleteModalComponent } from './item-delete-modal/item-delete-modal.component';
import { CategoryDeleteModalComponent } from './category-delete-modal/category-delete-modal.component';
import { CategoryAddModalComponent } from './category-add-modal/category-add-modal.component';
import { ItemFilter } from './itemFilter'; 

import { ApiService } from './api.service';

@NgModule({
  declarations: [
    AppComponent,
    ItemListComponent,
    CategoryListComponent,
    ItemDetailModalComponent,
    ItemDeleteModalComponent,
    CategoryDeleteModalComponent,
    CategoryAddModalComponent,
    ItemFilter
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ModalModule.forRoot(),
    TooltipModule.forRoot(),
    AlertModule.forRoot()
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
