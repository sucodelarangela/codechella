import { createContext, useContext } from "react";

const ThemeContext = createContext();

export const UserThemeProvider = ({ children, value }) => {
  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeValue = () => {
  return useContext(ThemeContext);
};

/* This context is used to manage boolean theme values for dynamic styles. It's not related specifically to the ThemeProvider of styled-components */
