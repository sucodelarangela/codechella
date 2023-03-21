import * as S from './styles';
import logo from 'assets/logo.png';
import icon from 'assets/icon.png';
import qrcode from 'assets/qrcode.png';
import { IUser } from 'shared/interfaces/IUser';

interface TicketProps {
  user: IUser;
}

export const Ticket = ({ user }: TicketProps) => {

  return (
    <S.Ticket id="ticket">
      <div className='header' aria-hidden="true">
        <img src={logo} alt="" aria-hidden="true" />
        <img src={icon} alt="" aria-hidden="true" />
      </div>
      <div className='info'>
        <img src={qrcode} alt="QR Code para leitura do ingresso na entrada do evento" />
        <div>
          <h2>{user.name}</h2>
          <p>Tipo de ingresso: {user.ticket}</p>
          <p>Setor: {user.sector}</p>
          <p>Data: {user.showDate}</p>
          <p>Local: São Paulo-SP</p>
        </div>
      </div>
    </S.Ticket>
  );
};
