import { useTheme } from 'src/hooks/useTheme';
import { ButtonContainer } from './styles';

export function Button() {
  const { toggleTheme } = useTheme();

  return (
    <ButtonContainer onClick={() => toggleTheme()}>
      Change Theme
    </ButtonContainer>
  );
}
