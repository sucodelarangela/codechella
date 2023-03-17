import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { DefaultPage, Home, Experience, Sectors, GeneralInfo, BuyTickets, NotFound } from 'pages';
import { Header, Footer } from 'components';
import { ThemeProvider } from "styled-components";
import { boreal, summer } from "styles/themes";
import { GlobalStyles } from "styles/globalStyles";
import { BannerProvider } from "context/BannerContext";
import { UserThemeProvider } from "context/UserThemeContext";

function App() {
  const [theme, setTheme] = useState(JSON.parse(localStorage.getItem('theme')));
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('buyer')));

  return (
    <ThemeProvider theme={theme ? boreal : summer}>
      <UserThemeProvider value={{ theme, setTheme }}>
        <GlobalStyles />
        <Router>
          <Header />
          <Routes>
            <Route path='/' element={<BannerProvider><DefaultPage /></BannerProvider>}>
              <Route path='/' element={<Home />} />
              <Route path='/experience' element={<Experience />} />
              <Route path='/sectors' element={<Sectors />} />
              <Route path='/information' element={<GeneralInfo />} />
              <Route path='/tickets' element={!user ? <BuyTickets setUser={setUser} /> : <Navigate to='/your-ticket' />} />
              <Route path='/your-ticket' element={user ? <BuyTickets user={user} setUser={setUser} /> : <Navigate to='/tickets' />} />
            </Route>
            <Route path='*' element={<NotFound />} />
          </Routes>
          <Footer />
        </Router>
      </UserThemeProvider>
    </ThemeProvider>
  );
}

export default App;
