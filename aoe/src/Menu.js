import React from 'react';
import { Container, Row, Col, Button, Card, Image } from 'react-bootstrap';
import styled from 'styled-components';
import { MenuCard } from './components/MenuCard';
import { MenuBottom } from './components/MenuBottom';
import { MenuYakiniku } from './pages/MenuYakiniku';
import { MenuOneDish } from './pages/MenuOneDish';
import { MenuRiceDishes } from './pages/MenuRiceDishes';
import { MenuDrink } from './pages/MenuDrink';
import { MenuDessert } from './pages/MenuDessert';
import { MenuPartyPlan } from './pages/MenuPartyPlan';
import { MenuLunch } from './pages/MenuLunch';

export const Menu = () => (
    <Container fluid>

        <MenuCard />
        <MenuBottom />

    </Container>
)