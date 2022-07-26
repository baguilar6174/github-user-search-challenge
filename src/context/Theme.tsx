import { createContext, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { THEMES, THEME_INFO } from "../data";

interface ThemeContextProps {
	changeTheme: () => void;
	isLightMode: boolean;
}

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeContextProvider = (props: any): JSX.Element => {
	const [isLightMode, setIsLightMode] = useState<boolean>(false);
	const darkTheme: object = {
		colors: {
			background: "#141D2F",
			themeBtn: "#fff",
			card: "#1E2A47",
			textNorm: "#fff",
			textBolded: "#FFF",
		},
	};
	const lightTheme: object = {
		colors: {
			background: "#F6F8FF",
			themeBtn: "#4B6A9B",
			card: "#FEFEFE",
			textNorm: "#697C9A",
			textBolded: "#2B3442",
		},
	};

  const changeTheme = (): void => setIsLightMode(prev => !prev);

  useEffect((): void => {
    localStorage.getItem(THEME_INFO) === THEMES.LIGHT && setIsLightMode(true);
  }, []);

  useEffect(() => {
    const mode = isLightMode ? THEMES.LIGHT : THEMES.DARK;
    localStorage.setItem(THEME_INFO, mode);
  });
  

	return (
    <ThemeContext.Provider value={{ changeTheme, isLightMode }}>
      <ThemeProvider theme={ isLightMode ? lightTheme : darkTheme }>
        { props.children }
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
