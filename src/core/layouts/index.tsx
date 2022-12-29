import { ReactNode } from 'react';

// components
import LogoOnlyLayout from './LogoOnlyLayout';
import MainLayout from './main';

// ----------------------------------------------------------------------

type Props = {
  children: ReactNode;
  variant?: 'main' | 'logoOnly';
};

export default function Layout({ variant = 'main', children }: Props) {
  if (variant === 'logoOnly') {
    return <LogoOnlyLayout> {children} </LogoOnlyLayout>;
  }

  return <MainLayout> {children} </MainLayout>;
}
