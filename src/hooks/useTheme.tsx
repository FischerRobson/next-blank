/* eslint-disable react/jsx-no-constructed-context-values */
import {
  createContext, ReactNode, useCallback, useContext, useMemo, useState,
} from 'react';
import { defaultTheme } from '../styles/themes/default';
import { lightTheme } from '../styles/themes/light';

interface IThemeContext {
  toggleTheme: () => void;
  theme: typeof defaultTheme;
}

interface ProviderProps {
  children: ReactNode;
}

const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

export function UseThemeProvider({ children }: ProviderProps) {
  const [useDefaultTheme, setUseDefaultTheme] = useState(true);

  const theme = useMemo(() => (useDefaultTheme ? defaultTheme : lightTheme), [useDefaultTheme]);

  function toggleTheme() {
    setUseDefaultTheme(!useDefaultTheme);
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = (): IThemeContext => {
  const context = useContext(ThemeContext);
  return context;
};
