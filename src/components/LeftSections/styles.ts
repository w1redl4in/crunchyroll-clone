import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import { lighten, transparentize } from 'polished';

export const Container = styled(motion.main)`
  width: 100%;

  padding: 1rem;
  margin-top: 2rem;
`;

export const Title = styled.h1`
  font-size: 20px;

  border-bottom: 1px solid ${({ theme }) => theme.colors.greyer};
`;

export const Section = styled(motion.section)`
  width: 100%;

  display: flex;
  justify-content: space-around;
  margin-top: 2rem;

  > img {
    margin-right: 0.9rem;
  }

  padding-bottom: 1rem;

  :not(&:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
  }
`;

export const Info = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    > h2 {
      font-size: ${theme.fontSize.large};

      transition: color 0.2s;

      &:hover {
        cursor: pointer;
        /* color: ${transparentize(0.6, theme.colors.text)}; */
        color: ${({ theme }) => theme.colors.primary};
      }
    }

    > p {
      color: ${theme.colors.greyer};
      font-size: ${theme.fontSize.small};
    }

    p > span {
      color: ${theme.colors.primary};

      transition: color 0.2s;

      &:hover {
        color: ${lighten(0.2, theme.colors.primary)};
        cursor: pointer;
      }
    }

    p + p {
      color: ${theme.colors.text};
      font-size: ${theme.fontSize.small};
    }
  `}
`;
