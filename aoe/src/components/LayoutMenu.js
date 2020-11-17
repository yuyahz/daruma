import React from "react";
import { Container } from "react-bootstrap";

export const LayoutMenu = (props) => (
  <Container fluid={true}>{props.children}</Container>
);
