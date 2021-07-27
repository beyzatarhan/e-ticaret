import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { AlertifyService } from '../services/alertify.service';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../services/cart.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers:[ProductService]
})
export class ProductComponent implements OnInit {
  //bu componentte alertifyservice nesnesini kullanıcam demek
  constructor(
    private alertifyService: AlertifyService,
    private productService:ProductService,
    private activatedRoute:ActivatedRoute,
    private cartService:CartService
  ) {}
  title = 'Ürün Listesi';
  filterText = '';
  products: Product[] = [];

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
  this.productService.getProducts(params["categoryId"]).subscribe(data=>{
      this.products = data
    });
    })
    this.activatedRoute.params.subscribe(params=>{
      this.productService.getProductList().subscribe(data=>{
        this.products = data
      })
    })
  }

  addToCart(product: any) {
    this.alertifyService.success('Sepete eklendi');
  }

  addProductCart(product:Product){
    this.cartService.addProductCart(product);
  }
}
