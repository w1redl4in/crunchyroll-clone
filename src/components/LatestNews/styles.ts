import styled, { css } from 'styled-components';

export const Container = styled.main`
  width: 100%;

  padding: 1rem;
  margin-top: 2rem;
`;

export const Title = styled.h1`
  font-size: 20px;

  border-bottom: 1px solid ${({ theme }) => theme.colors.greyer};
`;

export const Section = styled.section`
  width: 100%;

  display: flex;
  justify-content: space-around;
  margin-top: 2rem;

  > img {
    margin-right: 0.5rem;
  }

  padding-bottom: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
`;

export const Info = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    > h2 {
      font-size: ${theme.fontSize.large};
    }

    > p {
      color: ${theme.colors.greyer};
      font-size: ${theme.fontSize.small};
    }

    p > span {
      color: ${theme.colors.primary};
    }

    p + p {
      color: ${theme.colors.text};
      font-size: ${theme.fontSize.small};
    }
  `}
`;
