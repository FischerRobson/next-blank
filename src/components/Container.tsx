import { useTheme } from 'src/hooks/useTheme';
import { GlobalStyle } from 'src/styles/global';
import { ThemeProvider } from 'styled-components';

export function Container({ children }: any) {
  const { theme } = useTheme();
  return (
    <ThemeProvider theme={theme}>
      {children}
      <GlobalStyle />
    </ThemeProvider>
  );
}
