import React from "react";
import { Container, Row, Col, Button, Card, Image } from "react-bootstrap";
import { MenuCard } from "./components/MenuCard";
import { BottomSet } from "./components/BottomSet";

export const Menu = () => (
  <div className="restrict-width">
    <Container fluid className="px-0 mx-0">
      <MenuCard />
      <BottomSet />
    </Container>
  </div>
);
