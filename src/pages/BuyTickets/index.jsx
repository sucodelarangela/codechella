import { useLocation } from "react-router-dom";
import { InfoTitle } from "pages/GeneralInfo/styles";
import { Form } from "./Form";

export const BuyTickets = () => {
  const { pathname } = useLocation();

  return (
    <main className="container">
      {pathname === "/tickets" ? (
        <>
          <InfoTitle>Preencha o formulário a seguir:</InfoTitle>
          <Form />
        </>
      ) : (
        <>
          <h2>Uhul, agora sim! Seu ingresso está aqui, apresente na entrada do evento e divirta-se!</h2>
          <div>Fazer card aqui</div>
        </>
      )}
    </main>
  );
};
