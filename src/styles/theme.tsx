import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#3f51b5',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h1: { fontSize: '20px', fontWeight: 700 },
    h2: { fontSize: '18px' },
    h3: { fontSize: '14px', color: '#aaa' },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        a: { color: '#000', textDecoration: 'none' },
        ul: { listStyle: 'none', padding: 0 },
        li: { padding: 0 },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: '#000',
          border: '1px solid #000',
          borderRadius: '5px',
          padding: '0px',
          marginRight: '10px',
        },
      },
    },
  },
});
