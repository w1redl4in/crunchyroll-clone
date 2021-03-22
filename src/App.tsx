import { ThemeProvider } from 'styled-components';
import { Banner } from './components/Banner';
import { Navbar } from './components/Navbar';
import { GlobalStyles } from './styles';
import { Theme } from './styles/theme';

export const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <Navbar />
      <Banner />
      <GlobalStyles />
    </ThemeProvider>
  );
};
