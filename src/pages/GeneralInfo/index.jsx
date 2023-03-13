import { InfoTitle, Section } from "./styles";
import { VscTriangleUp } from 'react-icons/vsc';
import { Accordion } from '@mantine/core';
import { Link } from "react-router-dom";

export const GeneralInfo = () => {
  return (
    <main className="container">
      <InfoTitle>Perguntas Frequentes:</InfoTitle>
      <Section>
        <Accordion
          className="accordion"
          chevron={<VscTriangleUp size={24} style={{ fill: '#FFF' }} />}
          variant="separated"
          defaultValue="attractions"
          transitionDuration={500}
        >
          <Accordion.Item value="attractions">
            <Accordion.Control>Quais serão as atrações?</Accordion.Control>
            <Accordion.Panel>Teremos dois dias de shows, o primeiro (11/03) com bandas de rock, e o segundo (12/03) com bandas pop.{' '}
              <Link to='/#lineup'>Confira o line-up em detalhes clicando neste link!</Link>
            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item value="agerange">
            <Accordion.Control>Qual é a classificação etária?</Accordion.Control>
            <Accordion.Panel>A partir de 16 anos, todo mundo pode entrar. De 13 a 15 anos, tem que estar acompanhado dos pais ou responsáveis legais. Menores de 10 anos não podem entrar.</Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item value="sectors">
            <Accordion.Control>Quais são os setores disponíveis?</Accordion.Control>
            <Accordion.Panel>
              Pista Premium<br />
              Pista Comum<br />
              Cadeiras térreo<br />
              Cadeiras superiores<br />
              Rampas
            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item value="forbidden">
            <Accordion.Control>Quais são os itens proibidos?</Accordion.Control>
            <Accordion.Panel>Garrafas, latas, bebidas, utensílios de armazenagem, embalagens rígidas com tampa, capacetes, cadeiras ou bancos, armas de fogo e armas brancas, objetos pontiagudos, cortantes e/ou perfurantes, correntes e cinturões, fogos de artifício, objetos de vidro, substâncias inflamáveis, cigarro eletrônico, corrosivas e ou tóxicas, revistas, jornais, livros e copo térmico ou similares.</Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item value="halfvalue">
            <Accordion.Control>Quem tem direito a meia-entrada?</Accordion.Control>
            <Accordion.Panel>De acordo com a Lei Federal, têm direito ao benefício da meia-entrada aqueles que preencherem os requisitos e apresentarem os documentos comprobatórios.</Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </Section>
    </main>
  );
};
