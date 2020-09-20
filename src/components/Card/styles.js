import styled from 'styled-components';

export const CardView = styled.div`
  background-color: #FFF;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  border-radius: 20px;
  padding: 40px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin-top: 20px;
  cursor: ${props => props.pointer ? 'pointer' : 'default'};

  h5 {
    margin: 0px;
    color: #333333;
    font-size: calc(12px + 2vmin);
  }
`;

export const InfoCard = styled.span`
  background-color: #DDECFF;
  border-radius: 10px;
  padding: 5px;
  font-size: calc(7px + 1vmin);
  color: #567AA5;
  font-weight: 700;
`;