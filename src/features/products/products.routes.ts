export const productsRoutes = {
  products: '/products',
  productDetail: (id: string) => `/products/${id}`,
  productsByCategory: (id: string) => `/products/category/${id}`,
};
