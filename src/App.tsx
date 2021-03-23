import { ThemeProvider } from 'styled-components';
import { Alert } from './components/Alert';
import { MyCarousel } from './components/Carousel';
import { DefaultLayout } from './layout/default';
import { GlobalStyles } from './styles';
import { Theme } from './styles/theme';

export const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <DefaultLayout>
        <Alert />
        <MyCarousel />
      </DefaultLayout>
      <GlobalStyles />
    </ThemeProvider>
  );
};
