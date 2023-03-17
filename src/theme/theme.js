import { createTheme } from '@mui/material';
import Satoshi from '../assets/font/Satoshi-Variable.ttf';

export const theme = createTheme({
  typography: {
    fontFamily: 'Satoshi, Sans-serif',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          url(${Satoshi})
        }
      `,
    },
  },
});
