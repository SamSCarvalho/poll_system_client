import styled, { css }  from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Label = styled.div`
  font-weight: bold;
  color: #333333;
  display: block;
  margin-bottom: 8px;
  font-size: calc(14px + 1vmin);
`;

const baseInputCSS = css`
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

export const InputStyle = styled.input`
  ${baseInputCSS}
`;

export const TextAreaStyle = styled.textarea`
  ${baseInputCSS}
  resize: none;
`;