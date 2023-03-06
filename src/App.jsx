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

function App() {
  const [theme, setTheme] = useState(true);

  return (
    <ThemeProvider theme={theme ? boreal : summer}>
      <GlobalStyles />
      <Header theme={theme} setTheme={setTheme} />
      <Router>
        <BannerProvider>
          <Banner theme={theme} />
        </BannerProvider>
        <Routes>
          <Route path='/' element={<Home theme={theme} />} />
          <Route path='/experience' element={<Experience theme={theme} />} />
        </Routes>
      </Router>
      <Footer theme={theme} />
    </ThemeProvider>
  );
}

export default App;
