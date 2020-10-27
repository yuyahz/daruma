import React from 'react';
import { Container, Row, Col, Button, Card, Image } from 'react-bootstrap';
import styled from 'styled-components';
import { MenuCard } from './components/MenuCard';
import { MenuBottom } from './components/MenuBottom';

export const Menu = () => (
    <Container fluid>

        <MenuCard />
        <MenuBottom />

    </Container>
)