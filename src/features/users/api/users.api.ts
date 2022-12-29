import { httpClient } from 'src/core/http/httpClient';
import { ProductFavorite } from '../models/ProductFavorite';
import { User } from '../models/User';

export const fetchUsers = () => {
  return httpClient.get<User[]>('users').then((res) => res.data);
};

export const fetchUser = (userId: number) => {
  return httpClient.get<User[]>(`users/${userId}`).then((res) => res.data);
};

export const fetchFavorites = () => {
  return httpClient.get<ProductFavorite[]>(`products`).then((res) => res.data);
};
