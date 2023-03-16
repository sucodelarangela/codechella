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
