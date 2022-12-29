import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import { Product } from '../../models/Product';

import Link from 'next/link';
import { productsRoutes } from '../../products.routes';
import { useProductsContext } from 'src/core/store/useProductStore';

type ProductProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductProps) => {
  const { findProduct, toggleProduct } = useProductsContext();

  const hasProduct = findProduct(product);

  return (
    <Card>
      <Link href={productsRoutes.productDetail(product.id.toString())} passHref>
        <CardActionArea>
          <CardMedia
            component="img"
            height="200"
            image={product.image}
            alt={product.title}
            sx={{ objectFit: 'contain', p: 5 }}
          />
          <CardContent sx={{ borderTop: 'solid 1px', borderColor: 'grey.200' }}>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              sx={{ height: 50, overflow: 'hidden' }}
            >
              {product.title}
            </Typography>

            <Typography variant="body2" color="text.secondary">
              {product.category}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>

      <CardActions
        sx={{ borderTop: 'solid 1px', borderColor: 'grey.200', padding: 3 }}
      >
        <Button
          onClick={() => toggleProduct(product)}
          variant="contained"
          color={hasProduct ? 'error' : 'primary'}
          sx={{ width: '100%' }}
        >
          {hasProduct ? 'REMOVER' : 'ADICIONAR'}
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
