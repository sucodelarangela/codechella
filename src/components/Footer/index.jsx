import * as S from './styles';
import { useEffect, useState } from 'react';
import { FaWhatsapp, FaTwitch, FaInstagram, FaTwitter } from 'react-icons/fa';

import logo from 'assets/logo.png';

export const Footer = ({ theme }) => {
  const [invert, setInvert] = useState(theme);

  useEffect(() => {
    theme ? setInvert('0%') : setInvert('75%');
  }, [theme]);

  return (
    <S.Footer invert={invert}>
      <div className='social'>
        <img src={logo} alt="CodeChella, música para devs!" />
        <div>
          <p>Acesse nossas redes:</p>
          <div>
            <FaWhatsapp size={32} />
            <FaTwitch size={32} />
            <FaInstagram size={32} />
            <FaTwitter size={32} />
          </div>
        </div>
      </div>
      <p>Desenvolvido por Angela Caldas. Design by Alura. Projeto fictício sem fins comerciais.</p>
    </S.Footer>
  );
};
