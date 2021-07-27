import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Category } from 'src/app/category/category';
import { AlertifyService } from 'src/app/services/alertify.service';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-add-forms',
  templateUrl: './product-add-forms.component.html',
  styleUrls: ['./product-add-forms.component.css'],
  providers: [CategoryService, ProductService],
})
export class ProductAddFormsComponent implements OnInit {
  constructor(
    private categoryService: CategoryService,
    private productService: ProductService,
    private alertifyService:AlertifyService
  ) {}
  model: Product = new Product(0, '', 0, 0, '', '');
  categories: Category[] = [];
  ngOnInit(): void {
    this.categoryService.getCategories().subscribe((data) => {
      this.categories = data;
    });
  }

  add(form: NgForm) {
    this.productService.addProduct(this.model).subscribe(data => {
      this.alertifyService.success(data.name + " başarıyla eklendi.")
    });
    
  }
}
