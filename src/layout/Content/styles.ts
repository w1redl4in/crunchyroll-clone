import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: 2fr 1fr;
`;

export const LeftContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  padding-right: 1rem;
  border-right: 1px solid ${({ theme }) => theme.colors.greyer};
`;

export const RightContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  padding-left: 1rem;
`;
