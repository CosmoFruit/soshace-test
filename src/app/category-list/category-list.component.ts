import { Component, OnInit } from '@angular/core';

export class Category{
    constructor(name: string) {}
}

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

	categories: Category[] =
		[
        	{ name: "Овощи" },
       		{ name: "Молочные"},
        	{ name: "Выпечка"}
    	];

  constructor() { }

  ngOnInit() {
  }

  selectCategory() {

  }

  removeCategory() {

  }

  addCategory() {

  }



}