import React from "react";
import { Title } from "../styles/style";

const CustomTitle = (props) => (
  <Title
    color={props.color}
    fontSize={props.fontSize}
  >
    {props.children}
  </Title>
)

export default CustomTitle;