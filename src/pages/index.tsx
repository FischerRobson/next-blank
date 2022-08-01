import { Button } from 'src/components/Button';
import { DisplayColors } from 'src/components/DisplayColors';
import { PageContainer } from 'src/styles/pages/indexPage';

export default function Home() {
  return (
    <PageContainer>
      <h1>Next Blank</h1>
      <p>with Styled Components</p>
      <Button />
      <DisplayColors />
    </PageContainer>
  );
}
