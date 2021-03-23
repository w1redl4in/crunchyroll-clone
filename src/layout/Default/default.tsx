import { Navbar } from '../../components/Navbar';
import { Container } from './styles';
import { Banner } from '../../components/Banner';

export const DefaultLayout: React.FC = ({ children }) => {
  return (
    <>
      <Navbar />
      <Banner />
      <Container>{children}</Container>
    </>
  );
};
