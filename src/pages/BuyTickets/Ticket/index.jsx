import * as S from './styles';
import logo from 'assets/logo.png';
import icon from 'assets/icon.png';
import qrcode from 'assets/qrcode.png';

export const Ticket = () => {
  return (
    <S.Ticket>
      <div className='header' aria-hidden="true">
        <img src={logo} alt="" aria-hidden="true" />
        <img src={icon} alt="" aria-hidden="true" />
      </div>
      <div className='info'>
        <img src={qrcode} alt="QR Code para leitura do ingresso na entrada do evento" />
        <div>
          <h2>Angela Caldas</h2>
          <p>Ingresso Cortesia</p>
          <p>Setor Pista</p>
          <p>Data: 11/03</p>
          <p>Local: São Paulo-SP</p>
        </div>
      </div>
    </S.Ticket>
  );
};
