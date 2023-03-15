import * as S from './styles';
import { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin , FaWhatsapp, FaTwitch, FaInstagram, FaTwitter } from 'react-icons/fa';
import { SiDevdotto } from 'react-icons/si'

import logo from 'assets/logo.png';

export const Footer = ({ theme }) => {
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
            <a href="https://github.com/sucodelarangela" target='_blank'>
              <FaGithub size={32} />
            </a>
            <a href="https://linkedin.com/in/angela-caldas" target='_blank'>
              <FaLinkedin size={32} />
            </a>
            <a href="https://instagram.com/sucodelarangela" target='_blank'>
              <FaInstagram size={32} />
            </a>
            <a href="https://dev.to/sucodelarangela" target='_blank'>
              <SiDevdotto size={32} />
            </a>
          </div>
        </div>
      </div>
      <p>Desenvolvido por Angela Caldas. Design by Alura. Projeto fictício sem fins comerciais.</p>
    </S.Footer>
  );
};
