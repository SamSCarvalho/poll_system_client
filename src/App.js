import React from 'react';

import { Container } from './styles';
import Routes from './routes';

const App = (props) => {
  return (
    <Container>
      <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Abel" />
      <link href="https://fonts.googleapis.com/css?family=Lato&display=swap" rel="stylesheet"/>
      <Routes />
    </Container>
  );
}

export default App;
