import Vite from "./Vite";
import ChangeThemeButton from "./ChangeThemeButton";
import ThemeProvider from "./context/ThemeProvider";

function App() {
  return (
    <ThemeProvider>
      <ChangeThemeButton />
      <Vite />
    </ThemeProvider>
  );
}

export default App;
