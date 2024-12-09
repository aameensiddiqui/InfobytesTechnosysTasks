import { createContext, useContext, useEffect, useReducer } from "react";

const ThemeContext = createContext(null);

const themeReducer = (theme, action) => {
  switch (action.type) {
    case "TOGGLE_THEME": {
      return theme === "dark" ? "primary" : "dark";
    }
    default: {
      return theme;
    }
  }
}

export const useTheme = () => {
  return useContext(ThemeContext);
}

export const ThemeProvider = ({ children }) => {
  const [theme, dispatch] = useReducer(themeReducer, "primary", (initial) => {
    return localStorage.getItem("theme") || initial;
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
    theme === "dark" ? document.body.style.backgroundColor = "#333" : document.body.style.backgroundColor = "white"
    theme === "dark" ? document.body.style.color = "white" : document.body.style.color = "black"
  }, [theme])


  const toggleTheme = () => {
    dispatch({ type: "TOGGLE_THEME" });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}