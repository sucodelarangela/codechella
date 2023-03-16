import * as S from './styles';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaTwitch, FaInstagram, FaTwitter } from 'react-icons/fa';
import { useThemeValue } from 'context/UserThemeContext';

import logo from 'assets/logo.png';

export const Footer = () => {
  const { theme } = useThemeValue();
  const [invert, setInvert] = useState(theme);

  useEffect(() => {
    theme ? setInvert('0%') : setInvert('75%');
  }, [theme]);

  return (
    <S.Footer invert={invert} themeStatus={theme}>
      <div className='social'>
        <img src={logo} alt="CodeChella, música para devs!" />
        <div>
          <p>Acesse nossas redes:</p>
          <div>
            <Link to='/whatsapp'>
              <FaWhatsapp size={32} />
            </Link>
            <Link to='/twitch'>
              <FaTwitch size={32} />
            </Link>
            <Link to='/instagram'>
              <FaInstagram size={32} />
            </Link>
            <Link to='/twitter'>
              <FaTwitter size={32} />
            </Link>
          </div>
        </div>
      </div>
      <p>Desenvolvido por <a className='link' href='https://github.com/sucodelarangela' target='_blank'>Angela Caldas</a>. Design by Alura. Projeto fictício sem fins comerciais.</p>
    </S.Footer>
  );
};
