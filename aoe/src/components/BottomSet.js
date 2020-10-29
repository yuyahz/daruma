import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import styled from 'styled-components';
import CardList from '../assets/CardList.svg';
import Contact from '../assets/Contact.svg';
import Copylight from '../assets/Copylight.svg';

const Styles = styled.div`
.SideSpace {
    margin: 0% 10%;
}

.CardSec {
    padding: 4%;
}

.CardRadius {
    border-radius: 50px 70px 70px 0;
    filter: drop-shadow(2px 3px 5px rgba(0, 0, 0, 0.5));
}

.CardPic {
    border-radius: 50px 70px 0 0;
}

${'' /* .CardList {
    margin-top: 10%;
} */}

.CardTitle {
    color: #C73D13;
    font-size: 140%;
    font-family: 'Noto Serif JP', serif;
    font-weight: bold;
}

.CardText {
    font-size: 80%;
}

.CardButton {
    font-size: 80%;
    border-radius: 50px 70px 70px 0;
    filter: drop-shadow(2px 3px 5px rgba(0, 0, 0, 0.3));
}
`;

export const BottomSet = () => (
    <Styles>
        <Container fluid>
            <Row className="CardList">
                <Col md={{ span: 4, offset: 4 }}>
                    <Image src={CardList} alt="CardList" fluid />
                </Col>
            </Row>

            <Row className="Contact">
                <Col md={{ span: 6, offset: 3 }}>
                    <Image src={Contact} alt="Contact" fluid />
                </Col>
            </Row>

            <Row className="Copylight">
                <Col md={{ span: 4, offset: 4 }}>
                    <Image className="CopylightIcon" src={Copylight} alt="Copylight" fluid />
                </Col>
            </Row>
        </Container>
    </Styles>
)