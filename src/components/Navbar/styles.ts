import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 6.2rem;
  width: 100%;

  -webkit-box-shadow: 0px 4px 6px -4px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 4px 6px -4px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 4px 6px -4px rgba(0, 0, 0, 0.75);
`;

export const Navbar = styled.div`
  max-width: 120rem;

  width: 100%;
  height: 100%;

  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const RouteItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  max-width: 40rem;
  width: 100%;
  height: 100%;

  > h1 {
    cursor: pointer;
  }

  > span {
    font-weight: 600;
    font-size: ${({ theme }) => theme.fontSize.medium};

    transition: color 0.2s;

    &:hover {
      cursor: pointer;
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const Sections = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100%;
  max-width: 40rem;
  width: 100%;

  > input {
    height: 33px;
    padding: 1rem;
    outline: 0;
    border-color: 1px solid ${({ theme }) => theme.colors.grayText};
    font-size: ${({ theme }) => theme.fontSize.medium};
  }
`;

export const SectionItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.colors.grayText};

  font-size: ${({ theme }) => theme.fontSize.small};

  transition: color 0.2s;

  > svg {
    font-size: ${({ theme }) => theme.fontSize.large};
    margin-bottom: 0.5rem;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    cursor: pointer;
  }
`;
