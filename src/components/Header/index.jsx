import { useState } from 'react';
import { Sling as Hamburger } from 'hamburger-react';

import * as S from './styles';

import logo from 'assets/logo.png';

export const Header = ({ theme, setTheme }) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <S.Header>
      <img src={logo} alt="CodeChella, música para devs!" />
      <Hamburger toggled={isOpen} toggle={setOpen} size={32} color='#FFF' />
      {isOpen && (
        <nav>
          <ul>
            <li>A Experiência</li>
            <li>Mapa de Setores</li>
            <li>Informações</li>
            <li>Ingresso</li>
            <li onClick={() => setTheme(!theme)}>Tema: {theme ? 'Boreal' : 'Summer'}</li>
          </ul>
        </nav>
      )}
    </S.Header>
  );
};
