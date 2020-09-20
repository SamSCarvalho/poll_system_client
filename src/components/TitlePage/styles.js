import styled from 'styled-components';

export const Container = styled.div`
  text-align: left;
  margin-bottom: 20px;
`;

export const Subtitle = styled.span`
  color: ${props => props.color === 'danger' ? "#ef9a9a" : "#bdbdbd"};
  font-size: calc(10px + 1vmin);
`;

export const Title = styled.h4`
  margin: 0px;
  color: #333333;
  font-size: calc(14px + 2vmin);
`;