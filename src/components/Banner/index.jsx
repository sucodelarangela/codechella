import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import * as S from './styles';
import borealHome from 'assets/boreal-home.jpg';
import summerHome from 'assets/summer-home.jpg';

export const Banner = ({ theme }) => {
  const { pathname } = useLocation();
  const [banner, setBanner] = useState(borealHome);

  useEffect(() => {
    if (pathname === '/' && theme) {
      setBanner(borealHome);
    } else {
      setBanner(summerHome);
    }
  }, [pathname, theme]);

  return (
    <S.Banner banner={banner}>
      <h2>Boas vindas ao<br />#CodeChella2023!</h2>
    </S.Banner >
  );
};
