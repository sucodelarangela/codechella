import { useLocation } from 'react-router-dom';

import * as S from './styles';
import { useBannerContext } from 'context/BannerContext';
import { useThemeValue } from 'context/UserThemeContext';

export const Banner = () => {
  const { theme } = useThemeValue();
  const { pathname } = useLocation();
  const { image, filter, text } = useBannerContext(pathname, theme);

  return (
    <S.Banner banner={image} filter={filter}>
      <h2>{text}</h2>
    </S.Banner >
  );
};
