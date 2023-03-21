import * as S from './styles';
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaTwitch, FaInstagram, FaTwitter } from 'react-icons/fa';

import logo from 'assets/logo.png';

export const Footer = () => {
  return (
    <S.Footer>
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
