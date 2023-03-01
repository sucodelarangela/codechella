import { useEffect, useState } from "react";
import { MdLocalActivity } from 'react-icons/md';
import { Button } from "components/Button";
import { BasicSection } from "components/BasicSection";
import { LineUp } from "./LineUp";

import * as S from './styles';
import guitarplayers from 'assets/guitarplayers.jpg';
import audience from 'assets/audience.jpg';
import { lineups } from "utils/lineups";

export const Home = ({ theme }) => {
  const [img, setImg] = useState(guitarplayers);

  useEffect(() => {
    theme ? setImg(guitarplayers) : setImg(audience);
  }, [theme]);

  return (
    <main className='container'>
      <BasicSection
        src={img}
        alt='Guitarrista e baixista tocando num palco iluminado à noite'
        title='&lt; 11 e 12 de Março &gt;&nbsp; Aluródromo de São Paulo'
        text='Hora de programar nossa memória com novas lembranças! Uma nova experiência sobre música, linguagens e, claro, tecnologia! Somos um festival diverso, com vários artistas e referências. Divirta-se!'
      />
      <Button wide='wide'>Comprar ingresso!<MdLocalActivity size={32} /></Button>
      <S.Title>/Line-Up/</S.Title>
      <LineUp lineup={lineups.lineup1} />
      <LineUp lineup={lineups.lineup2} />
    </main>
  );
};
