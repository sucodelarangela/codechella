import { InfoTitle } from "pages/GeneralInfo/styles";
import { NewLink } from "pages/Home/styles";
import { useEffect } from "react";
import { Image } from "./styles";

export const NotFound = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="container notfound">
      <InfoTitle>Errou o caminho?</InfoTitle>
      <NewLink to='/'>Voltar para a festa!</NewLink>
      <Image />
    </main>
  );
};
