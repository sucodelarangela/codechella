import { useEffect, useState } from "react";
import { MdLocalActivity } from 'react-icons/md';
import { Button } from "components/Button";
import { BasicSection } from "components/BasicSection";
import { LineUp } from "./LineUp";

import * as S from './styles';
import audience from 'assets/audience.jpg';
import audience2 from 'assets/summer-prefooter.jpg';
import guitar from 'assets/boreal-prefooter.jpg';
import guitarplayers from 'assets/guitarplayers.jpg';
import { lineups } from "utils/lineups";

const borealTheme = {
  img1: guitarplayers,
  img2: guitar,
  alt1: 'Guitarrista e baixista tocando num palco iluminado à noite',
  alt2: 'Uma guitarra em zoom'
};

const summerTheme = {
  img1: audience,
  img2: audience2,
  alt1: 'Um grupo de fãs assitindo a um show',
  alt2: 'Três amigas se divertindo em um show'
};

export const Home = ({ theme }) => {
  const [img, setImg] = useState(borealTheme);

  useEffect(() => {
    theme ? setImg(borealTheme) : setImg(summerTheme);
  }, [theme]);

  return (
    <>
      <main className='container'>
        <BasicSection
          src={img.img1}
          alt={img.alt1}
          title={`< 11 e 12 de Março >\r\nAluródromo de São Paulo`}
          text='Hora de programar nossa memória com novas lembranças! Uma nova experiência sobre música, linguagens e, claro, tecnologia! Somos um festival diverso, com vários artistas e referências. Divirta-se!'
        />
        <Button>Comprar ingresso!<MdLocalActivity size={32} /></Button>
        <S.Title>/Line-Up/</S.Title>
        <LineUp lineup={lineups.lineup1} />
        <LineUp lineup={lineups.lineup2} />
      </main>
      <S.Image src={img.img2} alt={img.alt2} />
    </>
  );
};
