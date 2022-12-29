import { Button, Container, Typography } from '@mui/material';
import Page from 'src/shared/components/Page';
import { User } from '../../models/User';
import Link from 'next/link';
import { usersRoutes } from '../../users.routes';

const UserDetailPage = ({ user }: { user: User }) => {
  return (
    <Page title="Usuário">
      <Container>
        <Typography variant="h3" component="h1" paragraph>
          {user.name.firstname} {user.name.lastname}
        </Typography>

        <Typography component="div">Email: {user.email}</Typography>

        <Typography component="div">Telefone: {user.phone}</Typography>

        <Typography component="div">
          Endereço: {user.address.number}, {user.address.street} -{' '}
          {user.address.city}
        </Typography>

        <br />

        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hendrerit,
          eros et eleifend sagittis, arcu lorem mollis nisl, hendrerit placerat
          leo magna ac ante. Vestibulum laoreet ipsum libero, vel aliquam eros
          maximus vel. Proin massa arcu, finibus a eleifend eu, egestas ac
          turpis. Fusce imperdiet nisi sit amet tellus mollis fermentum. Duis
          suscipit magna et ante dictum, sit amet ultricies neque pharetra.
          Proin quis massa mattis, hendrerit odio tristique, posuere nulla.
          Nullam faucibus orci eu diam ultricies auctor. Nulla vehicula metus ut
          blandit cursus. Duis tempus mi a dignissim elementum.
        </Typography>

        <Link href={usersRoutes.users} passHref>
          <Button variant="contained">Voltar</Button>
        </Link>
      </Container>
    </Page>
  );
};

export default UserDetailPage;
