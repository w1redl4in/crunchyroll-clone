import { Banner } from '../components/Banner';
import { Navbar } from '../components/Navbar';
import { Container } from './styles';

export const DefaultLayout: React.FC = ({ children }) => {
  return (
    <>
      <Navbar />
      <Banner />
      <Container>{children}</Container>
    </>
  );
};
