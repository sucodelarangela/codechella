import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { boreal, summer } from "styles/themes";
import { GlobalStyles } from "styles/globalStyles";
import { Header } from "components/Header";
import { Banner } from "components/Banner";
import { Home } from "pages/Home";
import { Footer } from "components/Footer";

function App() {
  const [theme, setTheme] = useState(true);

  return (
    <ThemeProvider theme={theme ? boreal : summer}>
      <GlobalStyles />
      <Header theme={theme} setTheme={setTheme} />
      <Router>
        <Banner theme={theme} />
        <Home theme={theme} />
      </Router>
      <Footer theme={theme} />
    </ThemeProvider>
  );
}

export default App;
