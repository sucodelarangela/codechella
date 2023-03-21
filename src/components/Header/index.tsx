import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Sling as Hamburger } from 'hamburger-react';

import * as S from './styles';

import logo from 'assets/logo.png';

interface HeaderProps {
  theme: boolean;
  setTheme: (value: boolean) => void;
}

export const Header = ({ theme, setTheme }: HeaderProps) => {
  const [isOpen, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    localStorage.setItem('theme', String(theme));
  }, [theme]);

  // Close menu when redirected to the page
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <S.Header>
      <NavLink to='/'>
        <img src={logo} alt="CodeChella, música para devs!" />
      </NavLink>
      <Hamburger
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
            <li><NavLink to='/information'>Informações</NavLink></li>
            <li><NavLink to='/tickets'>Ingressos</NavLink></li>
            <li onClick={() => setTheme(!theme)}>Tema: {theme ? 'Boreal' : 'Summer'}</li>
          </ul>
        </nav>
      )}
      <nav className='nav'>
        <ul>
          <li><NavLink to='/experience'>A Experiência</NavLink></li>
          <li><NavLink to='/sectors'>Mapa de Setores</NavLink></li>
          <li><NavLink to='/information'>Informações</NavLink></li>
          <li><NavLink to='/tickets'>Ingressos</NavLink></li>
          <li onClick={() => setTheme(!theme)}>Tema: {theme ? 'Boreal' : 'Summer'}</li>
        </ul>
      </nav>
    </S.Header>
  );
};
