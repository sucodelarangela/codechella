import { DownloadButton, TicketTitle } from "./styles";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { InfoTitle } from "pages/GeneralInfo/styles";
import { Form } from "./Form";
import { Ticket } from "./Ticket";
import { handleScreenshot } from "utils/handleScreenshot";
import { useThemeValue } from "context/UserThemeContext";

export const BuyTickets = ({ user, setUser }) => {
  const { theme } = useThemeValue();
  const { pathname } = useLocation();
  const [filter, setFilter] = useState('0%');

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('buyer')));
  }, []);

  useEffect(() => {
    theme ? setFilter('0%') : setFilter('80%');
  }, [theme]);

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
          <Ticket filter={filter} user={user} />
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
