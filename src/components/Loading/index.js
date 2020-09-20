import React from 'react';
import ReactLoading from 'react-loading';

import { Container } from './styles';

const Loading = (props) => (
  <Container>
    <ReactLoading type="spin" color="#567AA5" height={'10%'} width={'10%'} />
  </Container>
);

export default Loading;