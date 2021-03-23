import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  max-width: 100rem;
  margin: 2rem auto;
  width: 100%;

  display: flex;
  flex-direction: column;
  position: relative;

  background: ${({ theme }) => theme.colors.white};

  -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);

  padding: 0.8rem 1.5rem;
`;
