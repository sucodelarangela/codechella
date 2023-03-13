import { TicketTitle } from "./styles";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { InfoTitle } from "pages/GeneralInfo/styles";
import { Form } from "./Form";
import { Ticket } from "./Ticket";

export const BuyTickets = ({ theme }) => {
  const { pathname } = useLocation();
  const [filter, setFilter] = useState('0%');

  useEffect(() => {
    theme ? setFilter('0%') : setFilter('80%');
  }, [theme]);

  return (
    <main className="container">
      {pathname === "/tickets" ? (
        <>
          <InfoTitle>Preencha o formulário a seguir:</InfoTitle>
          <Form />
        </>
      ) : (
        <>
          <TicketTitle>Uhul, agora sim!<br />Seu ingresso está aqui, apresente na entrada do evento e divirta-se!</TicketTitle>
          <Ticket filter={filter} />
        </>
      )}
    </main>
  );
};
