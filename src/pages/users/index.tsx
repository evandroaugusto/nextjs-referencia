import { GetServerSideProps } from 'next';
import { fetchUsers } from 'src/features/users/api/users.api';
import UserListPage from 'src/features/users/pages/user-list';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const users = await fetchUsers();

  return {
    props: {
      users,
    },
  };
};

export default UserListPage;
