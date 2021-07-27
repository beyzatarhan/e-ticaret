import { Component, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { reduce } from 'rxjs/operators';
import { Product } from '../product/product';
import { CartService } from '../services/cart.service';
import { Cart } from './cart';
@Injectable()
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartList: Cart[] = [];
  
  constructor(private cartService: CartService) {  }
  cartCount = 0;
  ngOnInit() {
    this.cartList = this.cartService.getCartList();
    this.cartCount = this.cartService.getCartList().reduce((a, b) => a = a + b.qty, 0);    
  }
  
  removeProductCart(product: Product) {
    this.cartService.removeProductCart(product);
  }
}
