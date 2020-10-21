import React from 'react';
import { Container } from 'react-bootstrap';

export const LayoutNav = (props) => (
    <Container fluid={true}>
        {props.children}
    </Container>
)