import styled from 'styled-components';

export const Header = styled.img.attrs({
  src:
    'https://img1.ak.crunchyroll.com/i/spire3/ac7e6ab2376668465ea01f96c11a81541611961359_main.png',
  alt: 'Header',
})`
  @media (max-width: 1280px) {
    display: none;
  }
`;
