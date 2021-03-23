import styled from 'styled-components';

export const Container = styled.div`
  max-width: 100rem;
  margin: 0 auto;
  width: 100%;

  display: flex;
  flex-direction: column;
  position: relative;

  background: ${({ theme }) => theme.colors.white};

  padding: 0.8rem 1.5rem;

  margin-top: 2rem;
`;
