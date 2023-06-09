import { createTheme } from '@mui/material';
import Satoshi from '../assets/font/Satoshi-Variable.ttf';

export const theme = createTheme({
  typography: {
    fontFamily: 'Satoshi',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '@font-face': {
          fontFamily: 'Satoshi',
          src: `url(${Satoshi})`,
        },
      },
    },
  },
});
