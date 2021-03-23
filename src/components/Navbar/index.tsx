import * as S from './styles';
import CrunchyrollLogo from '../../assets/crunchyroll-logo.png';
import { SECTION } from '../../constants/section-nav';
import { NAVBAR_ANIMATION } from './animation';

export const Navbar: React.FC = () => {
  return (
    <S.Container
      variants={NAVBAR_ANIMATION}
      initial="unMounted"
      animate="mounted"
    >
      <S.Navbar>
        <S.RouteItems>
          <h1>
            <img
              src={CrunchyrollLogo}
              alt="Logo crunchyroll home"
              width="120px"
            />
          </h1>
          <span>Shows</span>
          <span>Mangá</span>
          <span>News</span>
          <span>Games</span>
        </S.RouteItems>
        <S.Sections>
          {Object.entries(SECTION).map(([key, value]) => (
            <S.SectionItem>
              {value.icon}
              <span>{key}</span>
            </S.SectionItem>
          ))}
          <input type="search" placeholder="Anime, Drama, etc." />
        </S.Sections>
      </S.Navbar>
    </S.Container>
  );
};
