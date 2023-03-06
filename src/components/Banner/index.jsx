import { useLocation } from 'react-router-dom';

import * as S from './styles';
import { useBannerContext } from 'context/BannerContext';

export const Banner = ({ theme }) => {
  const { pathname } = useLocation();
  const { image, filter, text } = useBannerContext(pathname, theme);

  return (
    <S.Banner banner={image} filter={filter}>
      <h2>{text}</h2>
    </S.Banner >
  );
};
