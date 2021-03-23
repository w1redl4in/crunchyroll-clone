import { SITE_NEWS } from '../../../constants/siteNews';
import { fromNow } from '../../../util/format';
import { CONTENT_ANIMATION, LEFT_CONTAINER_ANIMATION } from '../animation';
import { Container, Title, Section, Info } from '../styles';

export const SiteNews: React.FC = () => {
  return (
    <Container
      variants={CONTENT_ANIMATION}
      initial="unMounted"
      animate="mounted"
    >
      <Title>Site News</Title>
      {Object.entries(SITE_NEWS).map(([key, value]) => (
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
