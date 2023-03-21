import { DownloadButton, TicketTitle } from "./styles";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { InfoTitle } from "pages/GeneralInfo/styles";
import { Form } from "./Form";
import { Ticket } from "./Ticket";
import { handleScreenshot } from "utils/handleScreenshot";
import { IUser } from "shared/interfaces/IUser";

interface BuyTicketsProps {
  user: IUser;
  setUser: (value: IUser) => void;
}

export const BuyTickets = ({ user, setUser }: BuyTicketsProps) => {
  const { pathname } = useLocation();

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('buyer')!));
  }, []);

  return (
    <main className="container">
      {pathname === "/tickets" ? (
        <>
          <InfoTitle>Preencha o formulário a seguir:</InfoTitle>
          <Form setUser={setUser} />
        </>
      ) : (
        <>
          <TicketTitle>Uhul, agora sim!<br />Seu ingresso está aqui, apresente na entrada do evento e divirta-se!</TicketTitle>
          <Ticket user={user} />
          <DownloadButton
            onClick={() => handleScreenshot('ticket')}
            type='button'
          >
            Baixar ingresso!
          </DownloadButton>
        </>
      )}
    </main>
  );
};
