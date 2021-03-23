import { LATEST_NEWS } from '../../constants/latestNews';
import { fromNow } from '../../util/format';
import { Section, Container, Info, Title } from './styles';

export const LatestNews: React.FC = () => {
  return (
    <Container>
      <Title>Latest News</Title>
      {Object.entries(LATEST_NEWS).map(([key, value]) => (
        <Section key={key}>
          <img src={value.image} alt={key} />
          <Info>
            <h2>{value.title}</h2>
            <br />
            <p>
              Posted by
              <span> {value.author} </span>
              {fromNow(new Date())}
            </p>
            <p>{value.description}</p>
          </Info>
        </Section>
      ))}
    </Container>
  );
};
