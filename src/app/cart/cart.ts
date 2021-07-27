import { Product } from "../product/product";

export class Cart{
    qty:number;
    price:number;
    product:Product;

    constructor(qty:number,price:number,product:Product){
        this.qty=qty;
        this.price=price;
        this.product=product;
    }

}