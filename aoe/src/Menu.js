import React from 'react';
import { Container, Row, Col, Button, Card, Image } from 'react-bootstrap';
import styled from 'styled-components';
import FujiCard from './assets/FujiCard.png';
import CardList from './assets/CardList.svg';
import Contact from './assets/Contact.svg';
import Copylight from './assets/Copylight.svg';

const Styles = styled.div`
.SideSpace {
    margin: 0% 10%;
}

.CardSec {
    padding: 4%;
}

.CardRadius {
    border-radius: 50px 70px 70px 0;
}

.CardPic {
    border-radius: 50px 70px 0 0;
}

.CardList {
    margin-top: 10%;
}
`;

export const Menu = () => (
    <Styles>
        <Container fluid>
            <Row className="SideSpace">
                <Col className="CardSec" xs={12} md={4}>
                    <Card className="CardRadius">
                        <Card.Img className="CardPic" variant="top" src={FujiCard} alt="FujiCard" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>

                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="CardSec" xs={12} md={4}>
                    <Card className="CardRadius">
                        <Card.Img className="CardPic" variant="top" src={FujiCard} alt="FujiCard" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>

                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="CardSec" xs={12} md={4}>
                    <Card className="CardRadius">
                        <Card.Img className="CardPic" variant="top" src={FujiCard} alt="FujiCard" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>

                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className="SideSpace">
                <Col className="CardSec" xs={12} md={4}>
                    <Card className="CardRadius">
                        <Card.Img className="CardPic" variant="top" src={FujiCard} alt="FujiCard" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>

                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="CardSec" xs={12} md={4}>
                    <Card className="CardRadius">
                        <Card.Img className="CardPic" variant="top" src={FujiCard} alt="FujiCard" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>

                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="CardSec" xs={12} md={4}>
                    <Card className="CardRadius">
                        <Card.Img className="CardPic" variant="top" src={FujiCard} alt="FujiCard" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>

                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className="SideSpace">
                <Col className="CardSec" xs={12} md={4}>
                    <Card className="CardRadius">
                        <Card.Img className="CardPic" variant="top" src={FujiCard} alt="FujiCard" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>

                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="CardSec" xs={12} md={4}>
                    <Card className="CardRadius">
                        <Card.Img className="CardPic" variant="top" src={FujiCard} alt="FujiCard" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>

                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

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