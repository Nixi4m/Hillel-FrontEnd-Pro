// Core
import { Provider } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { orange } from '@mui/material/colors';
import CssBaseline from '@mui/material/CssBaseline';
// Parts
import Container from '@mui/material/Container';
import Header from '../components/Header';
import { store } from '../../engine/init/store';

const theme = createTheme({
  palette: {
    primary: {
      main: orange[500],
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

export default function Layout() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Provider store={store}>
        <Header />
        <Container>
          <Outlet />
        </Container>
      </Provider>
    </ThemeProvider>
  );
}
