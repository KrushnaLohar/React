import React, { useContext, createContext } from "react";

export const themeContext = createContext({
    themeMode: 'light',
    darkTheme: () => {},
    lightTheme: () => {}
});

// for wrap in app.jsx
export const ThemeProvider = themeContext.Provider

// for accessing themeContext var
export default function useTheme () {
    return useContext(themeContext)
}