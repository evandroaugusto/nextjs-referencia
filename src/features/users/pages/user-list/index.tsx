import { Container, Typography } from '@mui/material';
import Page from 'src/shared/components/Page';
import { User } from '../../models/User';
import UserListItem from './UserListItem';

type PageProps = {
  users: User[];
};

const UserListPage = ({ users }: PageProps) => {
  return (
    <Page title="Usuários">
      <Container>
        <Typography variant="h3" component="h1" paragraph>
          Usuários
        </Typography>

        {users?.map((user, key) => {
          return <UserListItem user={user} key={user.id} />;
        })}
      </Container>
    </Page>
  );
};

export default UserListPage;
