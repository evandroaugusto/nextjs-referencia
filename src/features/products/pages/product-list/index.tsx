import { Box, Container, Grid, Typography } from '@mui/material';
import { ReactNode, useCallback } from 'react';
import Page from 'src/shared/components/Page';
import ProductCard from '../../components/product-card';
import { Product } from '../../models/Product';
import SearchProductForm from './SearchProductForm';
import useSearchProducts from './useSearchProducts';

type PageProps = {
  products: Product[];
  categories: string[];
};

const ProductListPage = ({ products, categories }: PageProps) => {
  const { filteredProducts, searchProduct } = useSearchProducts(products);

  const onSearchHandle = useCallback(
    (searchTerm: string, categoryTerm: string) => {
      searchProduct(searchTerm, categoryTerm);
    },
    [searchProduct]
  );

  const RenderSearchResult = ({ children }: { children: ReactNode }) => {
    return (
      <>
        {!filteredProducts.length ? (
          <Box
            sx={{
              textAlign: 'center',
              border: 'solid 1px #efefef',
              borderRadius: 1,
              padding: 10,
            }}
          >
            'Não há produtos para esta consulta'
          </Box>
        ) : (
          children
        )}
      </>
    );
  };

  return (
    <Page title="Produtos">
      <Container>
        <Typography variant="h3" component="h1" paragraph>
          Produtos
        </Typography>

        <SearchProductForm categories={categories} onSearch={onSearchHandle} />

        <RenderSearchResult>
          <Grid
            container
            spacing={4}
            rowSpacing={4}
            columns={{ xs: 1, sm: 2, md: 4 }}
          >
            {filteredProducts?.map((product) => {
              return (
                <Grid xs={1} item key={product.id}>
                  <ProductCard product={product} />
                </Grid>
              );
            })}
          </Grid>
        </RenderSearchResult>
      </Container>
    </Page>
  );
};

export default ProductListPage;
