import styled from 'styled-components';

export const SuccessButton = styled.button`
  background: ${props => props.disabled ? '#c5c5c5' : '#4BD97F'};
  border: 0px;
  border-radius: 10px;
  color: #FFF;
  font-weight: 600;
  align-self: center;
  margin-left: ${props => props.centered ? '0px' :  '60px'};
  padding: 10px;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};

  :hover {
    background: ${props => props.disabled ? '#c5c5c5' : '#45ad6b'};
  }

  :focus {
    background: ${props => props.disabled ? '#c5c5c5' : '#45ad6b'};
    border: 0px;
    outline: 0px;
  }

  :active {
    background: ${props => props.disabled ? '#c5c5c5' : '#5ae68d'};
  }
`;

export const DangerButton = styled.button`
  background: ${props => props.disabled ? '#c5c5c5' : '#d32f2f'};
  border: 0px;
  border-radius: 10px;
  color: #FFF;
  font-weight: 600;
  align-self: center;
  margin-left: ${props => props.centered ? '0px' :  '60px'};
  padding: 10px;
  align-self: flex-end;
  margin-top: 20px;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};

  :hover {
    background: ${props => props.disabled ? '#c5c5c5' : '#ab2727'};
  }

  :focus {
    background: ${props => props.disabled ? '#c5c5c5' : '#ab2727'};
    border: 0px;
    outline: 0px;
  }

  :active {
    background: ${props => props.disabled ? '#c5c5c5' : '#ab2727'};
  }
`;