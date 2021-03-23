import { NOW_SHOWING } from '../../../constants/nowShowing';
import { Container } from './styles';
import { AiTwotoneCrown } from 'react-icons/ai';

export const NowShowing: React.FC = () => {
  return (
    <Container>
      <h1>Now Showing</h1>
      {Object.entries(NOW_SHOWING).map(([key, value]) => (
        <section key={key}>
          <img src={value.image} alt={key} />
          <div>
            <h2>{value.title}</h2>
            <p>
              Episode {value.ep}
              {value.isLastEp && <AiTwotoneCrown />}
            </p>
          </div>
        </section>
      ))}
    </Container>
  );
};
