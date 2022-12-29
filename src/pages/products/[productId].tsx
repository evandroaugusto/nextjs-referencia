import { GetServerSideProps } from 'next';

import { fetchProduct } from 'src/features/products/api/products.api';
import ProductDetailPage from 'src/features/products/pages/product-detail';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { productId } = context.query;
  const product = await fetchProduct(Number(productId));

  return {
    props: {
      product,
    },
  };
};

export default ProductDetailPage;
