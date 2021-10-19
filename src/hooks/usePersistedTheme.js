import { useEffect, useState } from "react";
import themes from "../themes";
const usePersistedTheme = () => {
  const getTheme = () => {
    const storageTheme = JSON.parse(localStorage.getItem("theme"));
    return themes[storageTheme] || themes.light;
  };
  const [theme, setTheme] = useState(getTheme());

  const changeTheme = () => {
    theme.title === "dark" ? setTheme(themes.light) : setTheme(themes.dark);
  };

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme.title));
  }, [theme]);

  return [theme, changeTheme];
};

export default usePersistedTheme;
