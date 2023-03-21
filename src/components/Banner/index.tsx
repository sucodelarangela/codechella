import * as S from './styles';
import { useLocation } from 'react-router-dom';
import { useBannerContext } from 'context/BannerContext';

interface BannerProps {
  theme: boolean;
}

export const Banner = ({ theme }: BannerProps) => {
  const { pathname } = useLocation();
  const { image, text } = useBannerContext(pathname, theme);

  return (
    <S.Banner banner={image}>
      <h2>{text}</h2>
    </S.Banner >
  );
};
