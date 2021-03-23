import { CONTENT_ANIMATION } from './animation';
import { LeftContainer } from './styles';

export const LeftContent: React.FC = ({ children }) => {
  return (
    <LeftContainer
      variants={CONTENT_ANIMATION}
      initial="unMounted"
      animate="mounted"
    >
      {children}
    </LeftContainer>
  );
};
