import React from "react";
import { Container, Row, Col, Button, Card, Image } from "react-bootstrap";
import { MenuCard } from "./components/MenuCard";
import { BottomSet } from "./components/BottomSet";
// import { MenuYakiniku } from './pages/MenuYakiniku';
// import { MenuOneDish } from './pages/MenuOneDish';
// import { MenuRiceDishes } from './pages/MenuRiceDishes';
// import { MenuDrink } from './pages/MenuDrink';
// import { MenuDessert } from './pages/MenuDessert';
// import { MenuPartyPlan } from './pages/MenuPartyPlan';
// import { MenuLunch } from './pages/MenuLunch';

export const Menu = () => (
  <div className="restrict-width">
    <Container fluid>
      <MenuCard />
      <BottomSet />
    </Container>
  </div>
);
