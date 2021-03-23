import { CONTENT_ANIMATION } from './animation';
import { Container } from './styles';

export const ContentLayout: React.FC = ({ children }) => {
  return (
    <Container
      variants={CONTENT_ANIMATION}
      initial="unMounted"
      animate="mounted"
    >
      {children}
    </Container>
  );
};
