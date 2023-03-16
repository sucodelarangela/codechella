import { useThemeValue } from "context/UserThemeContext";
import { InfoTitle } from "pages/GeneralInfo/styles";
import { NewLink } from "pages/Home/styles";
import { useEffect, useState } from "react";
import { Image } from "./styles";

export const NotFound = () => {
  const { theme } = useThemeValue();
  const [filter, setFilter] = useState(theme);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setFilter(theme);
  }, [theme]);

  return (
    <main className="container notfound">
      <InfoTitle>Errou o caminho?</InfoTitle>
      <NewLink to='/'>Voltar para a festa!</NewLink>
      <Image filter={filter} />
    </main>
  );
};
