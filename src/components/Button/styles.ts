import styled from 'styled-components';

export const ButtonContainer = styled.button`
  width: 164px;
  height: 40px;
  background: ${(props) => props.theme['gray-100']};
  color: ${(props) => props.theme['gray-800']};
  border-radius: 8px;
  cursor: pointer;
  transition: all .3s;

  &:not(:disabled):hover {
    background: ${(props) => props.theme['gray-400']};
  }
`;
