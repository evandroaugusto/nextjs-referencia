import {
  Box,
  Button,
  Card,
  CardContent,
  Stack,
  Typography,
} from '@mui/material';
import { User } from '../../models/User';
import Link from 'next/link';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { usersRoutes } from '../../users.routes';

const UserListItem = ({ user }: { user: User }) => {
  return (
    <Card sx={{ mb: 2, padding: 2 }}>
      <CardContent>
        <Stack direction="row" sx={{ alignItems: 'center' }}>
          <AccountCircleOutlinedIcon
            sx={{ fontSize: 80, mr: 4, opacity: '0.3' }}
          />
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h6" component="h6" paragraph>
              {user.name.firstname} {user.name.lastname}
            </Typography>

            <Typography component="div">Email: {user.email}</Typography>
            <Typography component="div">Telefone: {user.phone}</Typography>
            <Typography component="div">
              Endereço: {user.address.number}, {user.address.street} -{' '}
              {user.address.city}
            </Typography>
          </Box>

          <Box>
            <Link href={usersRoutes.userDetail(user.id.toString())} passHref>
              <Button variant="contained">VER DETALHES</Button>
            </Link>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default UserListItem;
