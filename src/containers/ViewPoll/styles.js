import styled from 'styled-components';

export const Container = styled.div`
  width: 80%;
  display: flex;
  flex: 1;
  flex-direction: column;
  flex-grow: 5;
  margin-bottom: 40px;
  justify-content: flex-start;
`;

export const HeaderOption = styled.div`
  display: flex;
  flex-direction: row;

  svg {
    width: calc(6px + 2vmin);
    margin-left: 20px;
    fill: #c1c1c1;
    cursor: ${props => !props.disabled ? 'pointer' : 'default'};
  
    ${props => !props.disabled && 
      `:hover {
          fill: #4BD97F;
      }` 
    }
  }
`;

export const Bar = styled.div`
  background: #eeeeee;
  width: 80%;
  height: 100%;
  margin: 20px;
  border-radius: 10px;
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

export const Progress = styled.div`
  background: ${props => props.porcent === "0%" ? "#eeeeee" : "#43a047"};
  width: ${props => props.porcent};
  height: 100%;
  border-radius: 10px;
  text-align: left;
  padding: 10px;
`;

export const TextOption = styled.div`
  color: #333333;
  font-weight: 500;
  font-size: calc(6px + 2vmin);
`;

export const TextOptionSecond = styled.div`
  color: #aeaeae;
  font-weight: 500;
  font-size: calc(10px + 1vmin);
  margin-left: calc(4px + 2vmin);
`;