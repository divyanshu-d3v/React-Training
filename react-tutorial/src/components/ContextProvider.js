import { useContext, createContext, useState, Children } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        console.log(`theme toggled`);
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
    }

    return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}

export const useTheme = () => useContext(ThemeContext);

