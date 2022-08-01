import {
  Container,
  ContainerGray100,
  ContainerGray300,
  ContainerGray400,
  ContainerGray500,
  ContainerGray600,
  ContainerGray700,
  ContainerGray800,
  ContainerGray900,
  ContainerGreen300,
  ContainerGreen500,
  ContainerGreen700,
  ContainerRed500,
  ContainerRed700,
  ContainerYellow500,
} from './styles';

export function DisplayColors() {
  return (
    <Container>
      <ContainerGray100 />
      <ContainerGray300 />
      <ContainerGray400 />
      <ContainerGray500 />
      <ContainerGray600 />
      <ContainerGray700 />
      <ContainerGray800 />
      <ContainerGray900 />

      <ContainerGreen300 />
      <ContainerGreen500 />
      <ContainerGreen700 />

      <ContainerRed500 />
      <ContainerRed700 />

      <ContainerYellow500 />
    </Container>
  );
}
