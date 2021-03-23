import styled from 'styled-components';
import Banner from '../../assets/banner.png';
import { motion } from 'framer-motion';

export const Container = styled(motion.img).attrs({
  src: Banner,
})`
  z-index: -1;

  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.5);
`;
