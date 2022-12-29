import { GetServerSideProps } from 'next';
import {
  fetchCategories,
  fetchProducts,
} from 'src/features/products/api/products.api';
import ProductListPage from 'src/features/products/pages/product-list';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const products = await fetchProducts();
  const categories = await fetchCategories();

  return {
    props: {
      products,
      categories,
    },
  };
};

export default ProductListPage;
