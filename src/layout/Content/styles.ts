import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: 2fr 1fr;
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 1rem;
  border-right: 1px solid ${({ theme }) => theme.colors.greyer};
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 1rem;
`;
