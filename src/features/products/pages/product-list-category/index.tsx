import { Button, Container, Grid, Typography } from '@mui/material';
import Page from 'src/shared/components/Page';
import ProductCard from '../../components/product-card';
import { Product } from '../../models/Product';

import Link from 'next/link';
import { productsRoutes } from '../../products.routes';

type PageProps = {
  products: Product[];
};

const ProductListCategory = ({ products }: PageProps) => {
  return (
    <Page title="Produtos / Categoria">
      <Container>
        <Typography variant="h3" component="h1" paragraph>
          Categoria / {products[0].category}
        </Typography>

        <Grid
          container
          spacing={4}
          rowSpacing={4}
          columns={{ xs: 1, sm: 2, md: 4 }}
        >
          {products?.map((product) => {
            return (
              <Grid xs={1} item key={product.id}>
                <ProductCard product={product} />
              </Grid>
            );
          })}
        </Grid>

        <Link href={productsRoutes.products} passHref>
          <Button variant="contained" sx={{ marginTop: 5 }}>
            Voltar
          </Button>
        </Link>
      </Container>
    </Page>
  );
};

export default ProductListCategory;
