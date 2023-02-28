import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { boreal, summer } from "styles/themes";
import { GlobalStyles } from "styles/globalStyles";
import { Header } from "components/Header";

function App() {
  const [theme, setTheme] = useState(true);

  return (
    <ThemeProvider theme={theme ? boreal : summer}>
      <GlobalStyles />
      <Header theme={theme} setTheme={setTheme} />
    </ThemeProvider>
  );
}

export default App;
