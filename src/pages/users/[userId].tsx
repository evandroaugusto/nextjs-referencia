import { GetServerSideProps } from 'next';
import { fetchUser } from 'src/features/users/api/users.api';
import UserDetailPage from 'src/features/users/pages/user-detail';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { userId } = context.query;
  const user = await fetchUser(Number(userId));

  return {
    props: {
      user,
    },
  };
};

export default UserDetailPage;
