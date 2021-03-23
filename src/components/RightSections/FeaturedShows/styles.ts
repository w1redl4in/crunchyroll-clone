import { transparentize } from 'polished';
import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;

  border-bottom: 1px solid ${({ theme }) => theme.colors.greyer};

  > h1 {
    font-size: ${({ theme }) => theme.fontSize.medium};
    margin: 0.5rem 0 1.5rem 0;
  }

  > section {
    display: flex;

    margin-bottom: 1rem;

    /* > img {} */
    > div {
      display: flex;
      flex-direction: column;

      margin-left: 1rem;

      > h2 {
        font-size: ${({ theme }) => theme.fontSize.medium};
        color: ${({ theme }) => transparentize(0.3, theme.colors.text)};
      }

      > p {
        color: ${({ theme }) => theme.colors.greyer};
        font-size: ${({ theme }) => theme.fontSize.small};
      }
    }
  }
`;
