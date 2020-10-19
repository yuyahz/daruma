import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import styled from 'styled-components';
import YakinikuDeco from './MTL/YakinikuDeco.svg';
import YakinikuMenu from './MTL/YakinikuMenu.svg';

const Styles = styled.div`

`;

export const MenuYakiniku = () => (
    <Styles>
        <Container fluid>
            <Row>
                <Image src={YakinikuDeco} alt="YakinikuDeco" fluid />
            </Row>

            <Row>
                <Col md={{ span: 10, offset: 1 }}><Image src={YakinikuMenu} alt="YakinikuMenu" fluid /></Col>
            </Row>
        </Container>
    </Styles>
)