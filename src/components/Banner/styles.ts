import styled from 'styled-components';
import Banner from '../../assets/teste.png';

export const Container = styled.img.attrs({
  src: Banner,
})`
  z-index: -1;

  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.5);
`;
