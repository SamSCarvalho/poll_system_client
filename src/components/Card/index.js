import React from "react";

import { CardView, InfoCard } from "./styles";

const Card = (props) => (
  <CardView pointer={props.pointer}>
    <h5>{props.title}</h5>
    {props.describe && (
      <div>
        <InfoCard>{props.describe}</InfoCard>
      </div>
    )}
    {props.children}
  </CardView>
);

export default Card;
