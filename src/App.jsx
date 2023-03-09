import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { boreal, summer } from "styles/themes";
import { GlobalStyles } from "styles/globalStyles";
import { Header } from "components/Header";
import { Banner } from "components/Banner";
import { Home } from "pages/Home";
import { Experience } from "pages/Experience";
import { Footer } from "components/Footer";
import { BannerProvider } from "context/BannerContext";
import { Sectors } from "pages/Sectors";
import { GeneralInfo } from "pages/GeneralInfo";
import { BuyTickets } from "pages/BuyTickets";

function App() {
  const [theme, setTheme] = useState(true);

  return (
    <ThemeProvider theme={theme ? boreal : summer}>
      <GlobalStyles />
      <Router>
        <Header theme={theme} setTheme={setTheme} />
        <BannerProvider>
          <Banner theme={theme} />
        </BannerProvider>
        <Routes>
          <Route path='/' element={<Home theme={theme} />} />
          <Route path='/experience' element={<Experience theme={theme} />} />
          <Route path='/sectors' element={<Sectors theme={theme} />} />
          <Route path='/information' element={<GeneralInfo theme={theme} />} />
          <Route path='/tickets' element={<BuyTickets theme={theme} />} />
        </Routes>
      </Router>
      <Footer theme={theme} />
    </ThemeProvider>
  );
}

export default App;
