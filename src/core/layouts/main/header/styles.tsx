import { AppBar as AppBarMd, styled } from '@mui/material';

export const MenuItem = styled('a')(({ theme }) => ({
  ...theme.typography.subtitle2,
  color: theme.palette.text.primary,
  marginRight: theme.spacing(5),
  textDecoration: 'none',
  fontSize: 16,
  transition: theme.transitions.create('opacity', {
    duration: theme.transitions.duration.shorter,
  }),
  '&:hover': {
    opacity: 0.48,
    textDecoration: 'none',
    cursor: 'pointer',
  },
}));

export const AppBar = styled(AppBarMd)(({ theme }) => ({
  backgroundColor: '#fff',
  alignItems: 'flex-end',
  justifyContent: 'center',
  '@media all': {
    minHeight: 80,
  },
}));
