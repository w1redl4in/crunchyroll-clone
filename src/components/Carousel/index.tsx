import { Container } from './styles';
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { CAROUSEL } from '../../constants/carousel';
import { CAROUSEL_ANIMATION } from './animation';

export const MyCarousel: React.FC = () => {
  const {
    imageWidth,
    images,
    interval,
    isPlaying,
    naturalSlideHeight,
    naturalSlideWidth,
  } = CAROUSEL;

  return (
    <Container
      variants={CAROUSEL_ANIMATION}
      initial="unMounted"
      animate="mounted"
    >
      <CarouselProvider
        naturalSlideWidth={naturalSlideWidth}
        naturalSlideHeight={naturalSlideHeight}
        totalSlides={images.length}
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
