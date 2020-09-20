import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 80%;
  display: flex;
  flex: 1;
  flex-direction: column;
  flex-grow: 5;
  margin-bottom: 40px;
  justify-content: flex-start;

  label {
    text-align: left;
    padding: 10px;
    font-weight: bold;
    color: #333333;
    display: block;
    margin-bottom: 8px;
    font-size: calc(14px + 1vmin);
  }
`;

export const Form = styled.form`
  display: flex;
  flex: 1;
  width: 100%;
  flex-direction: column;
`;

export const ContainerOptions = styled.div`
  text-align: left;
`;

export const ContainerDate = styled.div`
  padding: 10px;
  text-align: left;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  span {
    text-align: left;
    padding: 10px;
    font-weight: bold;
    color: #333333;
    display: block;
    margin-bottom: 8px;
    font-size: calc(10px + 1vmin);
  }
`;

export const ErrorSpan = styled.span`
  color: #d32f2f;
  font-size: calc(10px + 1vmin);
`;

const cssButton = css`
  border: 0;
  background: transparent;
  cursor: pointer;

  svg {
    width: 40px;
    height: 40px;
  }

  :focus {
    border: 0px;
    outline: 0px;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  svg {
    width: 40px;
    height: 40px;
    fill: #c1c1c1;
    cursor: pointer;

    :hover {
      fill: #a2a2a2;
    }
  }
`;

export const AddButton = styled.button`
  ${cssButton}
  svg {
    fill: #4BD97F;

    :hover {
      fill: #45ad6b;
    }
  }
`;

export const RemoveButton = styled.button`
  ${cssButton}
  svg {
    fill: #d32f2f;

    :hover {
      fill: #ab2727;
    }
  }
`;