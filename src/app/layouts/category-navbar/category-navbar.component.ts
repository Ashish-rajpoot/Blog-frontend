import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/interface/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-navbar',
  templateUrl: './category-navbar.component.html',
  styleUrls: ['./category-navbar.component.css']
})
export class CategoryNavbarComponent implements OnInit {
  categories: Category[] = [];

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.loadCategory();
  }

  loadCategory() {
    this.categoryService.getCategories().subscribe((val) => {
      this.categories = val;
    })
  }
}
