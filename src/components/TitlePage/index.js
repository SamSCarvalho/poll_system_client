import React from "react";

import { Container, Subtitle, Title } from "./styles";

const TitlePage = (props) => (
  <Container>
    <Title>{props.title}</Title>
    {props.subtitle && <Subtitle color={props.colorSubtitle}>{props.subtitle}</Subtitle>}
  </Container>
);

export default TitlePage;
