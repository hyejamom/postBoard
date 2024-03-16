import ReactDOM from 'react-dom/client';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import { theme } from './styles/theme';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      {/* reset.css  */}
      <CssBaseline />
      <App />
    </BrowserRouter>
  </ThemeProvider>
);
