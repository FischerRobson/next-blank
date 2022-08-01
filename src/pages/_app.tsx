import type { AppProps } from 'next/app';
import { Container } from 'src/components/Container';
import { UseThemeProvider } from 'src/hooks/useTheme';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UseThemeProvider>
      <Container><Component {...pageProps} /></Container>
    </UseThemeProvider>
  );
}
