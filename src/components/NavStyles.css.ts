import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  NavbarContainer: {
    width: '100%',
    backgroundColor: '#383838',
    height: '44px',
    '& a': {
      color: '#fff',
      width: 'auto',
      display: 'inline-block',
      padding: '0 12px',
      height: '44px',
      border: 'none',
      textDecoration: 'none',
      whiteSpace: 'normal',
      alignItems: 'center',
      lineHeight: '44px',
    },
  },
  navLinks: {
    '&:hover': {
      backgroundColor: 'black',
      color: '#fff',
    },
  },
});

export default useStyles;
