import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cart } from '../cart/cart';
import { CartList } from '../cart/cart-list';
import { Product } from '../product/product';
@Injectable()
export class CartService {

  constructor(private http:HttpClient) { }
  getCartList(): Cart[] {
    return CartList;
  }
  addProductCart(product: Product) {
    var productContains = CartList.find(p => p.product.id == product.id);
    if (productContains)
      productContains.qty += 1;
    else {
      let cart = new Cart(0,0,product);
      cart.product = product;
      cart.qty = 1;
      CartList.push(cart);
    }
  }
  clearCart() {
    CartList.splice(0, CartList.length);
  }
  removeProductCart(product: Product) {
    var productContains = CartList.find(p => p.product.id == product.id);
    if (productContains) {
      var productIndexNo = -1;
      productIndexNo = CartList.indexOf(productContains);
      if (productIndexNo != -1)
      CartList.splice(productIndexNo, 1);
    }
  }
  
}
