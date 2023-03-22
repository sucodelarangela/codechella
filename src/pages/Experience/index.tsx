import { BasicSection } from "components/BasicSection";

import accessibility from 'assets/accessibility.jpg';
import ferrisWheel from 'assets/ferris-wheel.jpg';
import sustainability from 'assets/sustainability.jpg';

export const Experience = () => {
  return (
    <main className='container'>
      <BasicSection
        className='experience'
        src={accessibility}
        alt='Mulher preta radiante de alegria'
        title='Acessibilidade e Inclusão'
        text='Nosso evento tenta abraçar um público mais amplo em todos os sentidos, de todas as idades, corpos, gostos e pensamentos!  Isso está presente no  espaço físico, na sinalização, no treinamento da equipe de apoio, na comunicação em libras, braile, visual e tátil. Além disso, dispomos de ingressos gratuitos para pessoas com deficiência e acompanhantes, pessoas idosas e crianças!'
      />
      <BasicSection
        className='experience'
        src={sustainability}
        alt='Lixo plástico recolhido em uma sacola'
        title='Sustentabilidade'
        text='Queremos estar aqui celebrando daqui a 50, 100 anos! Por isso, levamos o futuro do nosso planeta a sério. Nosso festival é carbono zero, com utilização de copos retornáveis, coleta e destinação adequada de resíduos, e transporte coletivo.'
      />
      <BasicSection
        className='experience'
        src={ferrisWheel}
        alt='Roda gigante sendo atração de um evento'
        title='Atrações'
        text='Intervenções artísticas e culturais para todos os gostos! Durante os intervalos dos shows, nossa experiência contará com recreação para crianças, oficina de cerâmica, origami, circo e aquarela! Além disso, nosso espaço contra com 3 praças de alimentação, roda gigante e outros brinquedos!'
      />
    </main>
  );
};
