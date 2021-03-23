import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  width: 100%;

  @media (max-width: 1280px) {
    display: none;
  }
`;
