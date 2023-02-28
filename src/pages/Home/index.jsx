import { BasicSection } from "components/BasicSection";

import guitarplayers from 'assets/guitarplayers.jpg';
import audience from 'assets/audience.jpg';
import { useEffect, useState } from "react";

export const Home = ({ theme }) => {
  const [img, setImg] = useState(guitarplayers);

  useEffect(() => {
    theme ? setImg(guitarplayers) : setImg(audience);
  }, [theme]);

  console.log(theme);

  return (
    <main>
      <BasicSection
        src={img}
        alt='Guitarrista e baixista tocando num palco iluminado à noite'
        title='&lt; 11 e 12 de Março &gt;&nbsp; Aluródromo de São Paulo'
        text='Hora de programar nossa memória com novas lembranças! Uma nova experiência sobre música, linguagens e, claro, tecnologia! Somos um festival diverso, com vários artistas e referências. Divirta-se!'
      />
    </main>
  );
};
