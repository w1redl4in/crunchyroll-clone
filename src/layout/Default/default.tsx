import { Navbar } from '../../components/Navbar';
import { Container } from './styles';

export const DefaultLayout: React.FC = ({ children }) => {
  return (
    <>
      <Navbar />
      <img
        src="https://cdn.discordapp.com/attachments/756656687942729731/823779948661440552/unknown.png"
        alt=""
        style={{ zIndex: -1 }}
      />
      <Container>{children}</Container>
    </>
  );
};
