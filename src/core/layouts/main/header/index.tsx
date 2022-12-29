import { Box, Container, Stack } from '@mui/material';
import Link from 'next/link';

import { institutionalRoutes } from 'src/features/institutional/institutional.routes';
import { productsRoutes } from 'src/features/products/products.routes';
import { usersRoutes } from 'src/features/users/users.routes';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import * as s from './styles';
import { useProductsContext } from 'src/core/store/useProductStore';

const Header = () => {
  const { selectedProducts } = useProductsContext();
  return (
    <>
      <s.AppBar elevation={3}>
        <Container>
          <Stack direction="row" justifyContent="space-between">
            <Stack direction="row" spacing={0}>
              <Link href={institutionalRoutes.about} passHref>
                <s.MenuItem>Sobre</s.MenuItem>
              </Link>
              <Link href={institutionalRoutes.terms} passHref>
                <s.MenuItem>Termos</s.MenuItem>
              </Link>
              <Link href={productsRoutes.products} passHref>
                <s.MenuItem>Produtos</s.MenuItem>
              </Link>
              <Link href={usersRoutes.users} passHref>
                <s.MenuItem>Usuários</s.MenuItem>
              </Link>
            </Stack>

            <Box
              sx={{
                color: '#676767',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <span>{selectedProducts.length} produtos</span>
              <ShoppingCartIcon sx={{ marginLeft: 1 }} />
            </Box>
          </Stack>
        </Container>
      </s.AppBar>
    </>
  );
};

export default Header;
