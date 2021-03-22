import { Container } from './styles';
import { RiCloseFill } from 'react-icons/ri';

export const Alert: React.FC = () => {
  return (
    <Container>
      <span>
        Yashahime: Princess Half-Demon's SEASON FINALE is out now! Click HERE to
        watch as Towa, Setsuna, and Moroha have their fated duel against
        Kirinmaru!
      </span>
      <RiCloseFill />
    </Container>
  );
};
