import { Container } from './styles';
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { CAROUSEL } from '../../constants/carousel';

export const MyCarousel: React.FC = () => {
  const {
    imageWidth,
    images,
    interval,
    isPlaying,
    naturalSlideHeight,
    naturalSlideWidth,
    slides,
  } = CAROUSEL;

  return (
    <Container>
      <CarouselProvider
        naturalSlideWidth={naturalSlideWidth}
        naturalSlideHeight={naturalSlideHeight}
        totalSlides={slides}
        isPlaying={isPlaying}
        interval={interval}
      >
        <Slider>
          {images.map((image) => (
            <Slide index={image.index} key={image.index}>
              <img src={image.src} alt={image.name} width={imageWidth} />
            </Slide>
          ))}
        </Slider>
      </CarouselProvider>
    </Container>
  );
};
