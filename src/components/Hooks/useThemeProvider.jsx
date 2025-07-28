import { useEffect, useState, createContext, useContext } from "react"
import PropTypes from "prop-types"; 


const THEME_KEY = "app_theme_mode"

const ThemeContext = createContext({
  theme: "light",
  toggleTheme: () => {},
  setTheme: () => {},
})

export const useThemeMode = () => useContext(ThemeContext)

export const ThemeModeProvider = ({ children }) => {
  const getInitialTheme = () => {
    const stored = localStorage.getItem(THEME_KEY)
    if (stored === "dark" || stored === "light") return stored
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
  }

  const [theme, setThemeState] = useState(getInitialTheme())

  const setTheme = (mode) => {
    setThemeState(mode)
    localStorage.setItem(THEME_KEY, mode)
    document.documentElement.setAttribute("data-theme", mode)
  }

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

// ✅ Add this to resolve the ESLint warning
ThemeModeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
