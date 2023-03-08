import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Sling as Hamburger } from 'hamburger-react';

import * as S from './styles';

import logo from 'assets/logo.png';

export const Header = ({ theme, setTheme }) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <S.Header>
      <NavLink to='/'>
        <img src={logo} alt="CodeChella, música para devs!" />
      </NavLink>
      <Hamburger
        id='menu-icon'
        color='#FFF'
        easing='ease-in'
        label='Abrir menu de navegação'
        size={32}
        toggled={isOpen}
        toggle={setOpen}
      />
      {isOpen && (
        <nav>
          <ul>
            <li><NavLink to='/experience'>A Experiência</NavLink></li>
            <li><NavLink to='/sectors'>Mapa de Setores</NavLink></li>
            <li>Informações</li>
            <li>Ingresso</li>
            <li onClick={() => setTheme(!theme)}>Tema: {theme ? 'Boreal' : 'Summer'}</li>
          </ul>
        </nav>
      )}
      <nav className='nav'>
        <ul>
          <li><NavLink to='/experience'>A Experiência</NavLink></li>
          <li><NavLink to='/sectors'>Mapa de Setores</NavLink></li>
          <li>Informações</li>
          <li>Ingresso</li>
          <li onClick={() => setTheme(!theme)}>Tema: {theme ? 'Boreal' : 'Summer'}</li>
        </ul>
      </nav>
    </S.Header>
  );
};
