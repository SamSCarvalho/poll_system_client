import styled from 'styled-components';

export const InputStyle = styled.input`
  outline: none;
  width: 100%;
  font: inherit;
  padding: 10px 15px;
  box-sizing: border-box;
  background: #eeeeee;
  border: 0px;
  border-radius: 10px;
  font-size: calc(9px + 1vmin);

  &:focus {
    outline: none;
    border: 1px solid #4BD97F;
    background-color: #FFF;
  }
`;