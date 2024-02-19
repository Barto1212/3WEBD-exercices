import { useContext } from "react";
import { ThemeContext, ThemeContextType } from "./context/ThemeProvider";

const ChangeThemeButton = () => {
  const { switchTheme } = useContext(ThemeContext) as ThemeContextType;

  return <button onClick={switchTheme}>Changer de theme</button>;
};

export default ChangeThemeButton;
