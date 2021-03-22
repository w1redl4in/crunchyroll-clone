import styled from 'styled-components';
import { transparentize } from 'polished';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 2rem;
  width: 100%;
  padding: 1.5rem;

  font-size: ${({ theme }) => theme.fontSize.small};
  border: 1px solid ${({ theme }) => theme.colors.blue};
  border-radius: 0.5rem;

  background: ${({ theme }) => transparentize(0.9, theme.colors.blue)};

  > svg {
    font-size: ${({ theme }) => theme.fontSize.large};

    &:hover {
      cursor: pointer;
    }
  }
`;
