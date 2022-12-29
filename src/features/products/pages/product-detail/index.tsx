import { Box, Button, Container, Typography } from '@mui/material';
import Page from 'src/shared/components/Page';
import { Product } from '../../models/Product';
import Image from 'next/image';
import Link from 'next/link';
import { productsRoutes } from '../../products.routes';

import * as s from './styles';

const ProductDetailPage = ({ product }: { product: Product }) => {
  return (
    <Page title="Detalhe produto">
      <Container>
        <Box sx={{ display: 'flex' }}>
          {/* Imagem */}
          <Box
            component="div"
            sx={{
              borderRadius: 1,
              backgroundColor: '#fff',
              border: 'solid 1px #e8e8e8',
              padding: 3,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            width="35%"
          >
            <Image
              src={product.image}
              alt={product.title}
              layout="responsive"
              width="300px"
              height="300px"
              objectFit="contain"
            />
          </Box>

          {/* Sobre o produto */}
          <Box pl={5} width="65%">
            <Typography variant="h4" component="h4" paragraph>
              {product.title}
            </Typography>

            <Typography component="h5" paragraph>
              <Link
                href={productsRoutes.productsByCategory(product.category)}
                passHref
              >
                <s.Category>{product.category}</s.Category>
              </Link>
            </Typography>

            <Typography gutterBottom>{product.description}</Typography>

            <Box height={40} />

            <Typography variant="h4" component="h4" paragraph>
              Descrição técnica
            </Typography>

            <Typography component="p">
              Quisque sed tortor posuere, vulputate lacus ut, dapibus sem. In et
              sem lobortis, volutpat est ut, luctus ligula. Nam quis dolor
              tempus, pellentesque arcu quis, sollicitudin nunc. Nullam mollis
              facilisis massa, vel dapibus felis cursus eu. Praesent euismod
              pulvinar nibh ut tristique. Etiam sit amet est eleifend, blandit
              dolor et, ultricies velit. Quisque non lorem ornare, commodo nibh
              ac, blandit orci. Fusce nec fringilla erat. Pellentesque tincidunt
              odio eu eros congue, elementum consectetur orci vulputate. Duis
              quis neque odio.
            </Typography>

            <Box height={40} />

            <Link href={productsRoutes.products} passHref>
              <Button variant="outlined">Voltar</Button>
            </Link>
          </Box>
        </Box>
      </Container>
    </Page>
  );
};

export default ProductDetailPage;
