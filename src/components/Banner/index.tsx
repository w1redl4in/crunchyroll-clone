import 'pure-react-carousel/dist/react-carousel.es.css';
import { BANNER_ANIMATION } from './animation';
import { Container } from './styles';

export const Banner: React.FC = () => {
  return (
    <Container
      variants={BANNER_ANIMATION}
      initial="unMounted"
      animate="mounted"
    />
  );
};
