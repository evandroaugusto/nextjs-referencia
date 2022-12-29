import { httpClient } from 'src/core/http/httpClient';
import { Cart } from '../models/Cart';
import { Product } from '../models/Product';

export const fetchProducts = () => {
  return httpClient.get<Product[]>('products').then((res) => res.data);
};

export const fetchProductsByCategory = (category: string) => {
  return httpClient
    .get<Product[]>(`products/category/${category}`)
    .then((res) => res.data);
};

export const fetchCategories = () => {
  return httpClient
    .get<string[]>(`products/categories`)
    .then((res) => res.data);
};

export const fetchProduct = (productId: number) => {
  return httpClient
    .get<Product>(`products/${productId}`)
    .then((res) => res.data);
};

export const fetchCarts = () => {
  return httpClient.get<Cart[]>('carts').then((res) => res.data);
};

export const fetchCart = (cartId: number) => {
  return httpClient.get<Cart>(`carts/${cartId}`).then((res) => res.data);
};
