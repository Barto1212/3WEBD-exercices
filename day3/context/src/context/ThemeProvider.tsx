import { ReactNode, createContext, useState } from "react";

type Theme = "light" | "dark";
const defaultTheme: Theme = "light";
export type ThemeContextType = {
  theme: Theme;
  switchTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType | null>(null);

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);
  const switchTheme = () => {
    setTheme((t) => (t === "dark" ? "light" : "dark"));
  };
  return (
    <ThemeContext.Provider value={{ theme, switchTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
