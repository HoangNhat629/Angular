import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './products';
@Injectable({ providedIn: 'root' })
export class CartService {
  items: Product[] = [];
  //phương pháp gắn thêm một sản phẩm để một loạt các items
  addToCart(product: Product) {
    this.items.push(product);
  }
  //phương pháp thu thập các mục người dùng thêm vào giỏ hàng và trả về từng hạng mục với số lượng liên quan.
  getItems() {
    return this.items;
  }
  //phương thức trả về một mảng trống của mặt hàng, trong đó đổ giỏ hàng.
  clearCart() {
    this.items = [];
    return this.items;
  }
  getShippingPrices() {
    return this.http.get<{ type: string; price: number }[]>(
      '/assets/shipping.json'
    );
  }
  constructor(private http: HttpClient) {}
}
