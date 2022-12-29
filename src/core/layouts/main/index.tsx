import styled from '@emotion/styled';
import { ReactNode } from 'react';
import Header from './header';

type Props = {
  children: ReactNode;
};

// ----------------------------------------------------------------------

const StyledMain = styled('main')(({ theme }) => ({
  paddingTop: 150,
  paddingBottom: 150,
}));

// ----------------------------------------------------------------------

const MainLayout = ({ children }: Props) => {
  return (
    <>
      <Header />

      <StyledMain>{children}</StyledMain>
    </>
  );
};

export default MainLayout;
