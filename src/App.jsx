import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
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
  const [theme, setTheme] = useState(JSON.parse(localStorage.getItem('theme')));
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('buyer')));

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
          <Route path='/tickets' element={!user ? <BuyTickets theme={theme} setUser={setUser} /> : <Navigate to='/your-ticket' />} />
          <Route path='/your-ticket' element={user ? <BuyTickets theme={theme} user={user} setUser={setUser} /> : <Navigate to='/tickets' />} />
        </Routes>
      </Router>
      <Footer theme={theme} />
    </ThemeProvider>
  );
}

export default App;
