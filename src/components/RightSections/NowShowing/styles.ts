import { transparentize } from 'polished';
import styled, { css } from 'styled-components';

export const Container = styled.section`
  ${({ theme }) => css`
    > h1 {
      font-size: ${theme.fontSize.large};
      font-weight: 400;

      margin: 1rem 0;
    }

    > section {
      display: flex;

      padding: 1rem 1rem 1rem 0;

      &:hover {
        cursor: pointer;

        background: ${transparentize(0.9, theme.colors.text)};
      }

      > img {
        margin-right: 1rem;
        padding-left: 1rem;
      }

      > div {
        display: flex;
        flex-direction: column;

        > h2 {
          font-size: ${theme.fontSize.small};
          color: ${transparentize(0.1, theme.colors.text)};
        }

        > p {
          font-size: ${theme.fontSize.small};
          display: flex;

          > svg {
            font-size: ${theme.fontSize.medium};
            color: ${theme.colors.primary};
            margin-left: 0.5rem;
          }
        }
      }
    }
  `}
`;
