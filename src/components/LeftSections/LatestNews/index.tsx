import { LATEST_NEWS } from '../../../constants/latestNews';
import { LEFT_CONTAINER_ANIMATION, CONTENT_ANIMATION } from '../animation';
import { fromNow } from '../../../util/format';
import { Section, Container, Info, Title } from '../styles';

export const LatestNews: React.FC = () => {
  return (
    <Container
      variants={CONTENT_ANIMATION}
      initial="unMounted"
      animate="mounted"
    >
      <Title>Latest News</Title>
      {Object.entries(LATEST_NEWS).map(([key, value]) => (
        <Section key={key} variants={LEFT_CONTAINER_ANIMATION}>
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
