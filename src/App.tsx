import { ThemeProvider } from 'styled-components';
import { Alert } from './components/Alert';
import { MyCarousel } from './components/Carousel';
import { ContentLayout } from './layout/Content/content';
import { LeftContent } from './layout/Content/leftContent';
import { RightContainer } from './layout/Content/styles';
import { DefaultLayout } from './layout/Default/default';
import { GlobalStyles } from './styles';
import { Theme } from './styles/theme';

export const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <DefaultLayout>
        <Alert />

        <ContentLayout>
          <LeftContent>
            <MyCarousel />
            <MyCarousel />
            <MyCarousel />
            <MyCarousel />
          </LeftContent>
          <RightContainer>
            <MyCarousel />
            <MyCarousel />
            <MyCarousel />
            <MyCarousel />
          </RightContainer>
        </ContentLayout>
      </DefaultLayout>
      <GlobalStyles />
    </ThemeProvider>
  );
};
