import { createContext, Suspense } from "react";
import usePersistedTheme from "../hooks/usePersistedTheme";
import Header from "./header/Header";
import Main from "./main/Main";
import Spinner from "./Spinner/Spinner";

export const ThemeContext = createContext();

function App() {
  const [theme, changeTheme] = usePersistedTheme();
  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      <Suspense fallback={<Spinner />}>
        <Header />
        <Main />
      </Suspense>
    </ThemeContext.Provider>
  );
}

export default App;
