import { Navbar } from '../../components/Navbar';
import { Container } from './styles';
import { Banner } from '../../components/Banner';
import { DEFAULT_LAYOUT_ANIMATION } from './animation';

export const DefaultLayout: React.FC = ({ children }) => {
  return (
    <>
      <Navbar />
      <Banner />
      <Container
        variants={DEFAULT_LAYOUT_ANIMATION}
        initial="unMounted"
        animate="mounted"
      >
        {children}
      </Container>
    </>
  );
};
