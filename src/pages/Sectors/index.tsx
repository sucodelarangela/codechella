import { DetailSection, MapSection, SectorsTitle } from './styles';
import { BasicSection } from 'components/BasicSection';

import sectorMap from 'assets/sector-map.png';
import details1 from 'assets/sector-detail-1.jpg';
import details2 from 'assets/sector-detail-2.jpg';
import details3 from 'assets/sector-detail-3.jpg';

export const Sectors = () => {
  return (
    <main className="container">
      <MapSection>
        <img src={sectorMap} alt="Mapa de setores do festival. As áreas mais próximas do palco são a Pista Premium e a Pista Comum. Em distância intermediária, estão as Cadeiras Térreo e, na porção mais distante do palco, estão as Cadeiras Superiores. Todas as áreas do festival são acessíveis a cadeirantes a partir de rampas estrategicamente localizadas." />
        <ul>
          <h4>Legenda:</h4>
          <li><span></span>Pista Premium</li>
          <li><span></span>Pista Comum</li>
          <li><span></span>Cadeiras Térreo</li>
          <li><span></span>Cadeiras Superiores</li>
          <li><span></span>Rampas</li>
        </ul>
      </MapSection>
      <SectorsTitle>Mais detalhes sobre os setores:</SectorsTitle>
      <DetailSection>
        <BasicSection
          className='sector_details'
          src={details1}
          alt=''
          title='Pista'
          text='Pista convencional, atendida pelos bares e banheiros das laterais do estádio. Espaço amplo, com local para sentar e descansar. Separada da pista premium por uma grade.'
        />
        <BasicSection
          className='sector_details'
          src={details2}
          alt=''
          title='Pista Premium'
          text='Pista mais próxima do palco, com acesso muito próximo a banheiros e bares num raio de 100m. Todas as pessoas idosas e/ou com deficiência têm direito a acesso gratuito a essa área.'
        />
        <BasicSection
          className='sector_details'
          src={details3}
          alt=''
          title='Cadeiras'
          text='Opção de cadeiras térreas ou elevadas. Acesso próximo a banheiros e bares, visão um pouco elevada em relação às pistas.'
        />
      </DetailSection>
    </main>
  );
};
