import { GetServerSideProps } from 'next';
import { fetchProductsByCategory } from 'src/features/products/api/products.api';
import ProductListCategory from 'src/features/products/pages/product-list-category';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { slug } = context.query;
  const products = await fetchProductsByCategory(slug as string);

  return {
    props: {
      products,
    },
  };
};

export default ProductListCategory;
