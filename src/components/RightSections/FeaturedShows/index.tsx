import { Container } from './styles';
import { FEATURED_SHOWS } from '../../../constants/featuredShows';

export const FeaturedShows: React.FC = () => {
  return (
    <Container>
      <h1>Featured Shows</h1>
      {Object.entries(FEATURED_SHOWS).map(([key, value]) => (
        <section key={key}>
          <img src={value.image} alt={key} />
          <div>
            <h2>{value.title}</h2>
            <p>{value.videos} vídeos</p>
          </div>
        </section>
      ))}
    </Container>
  );
};
