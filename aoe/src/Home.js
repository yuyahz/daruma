import React from 'react'
import './Home.css'
import { Container, Row, Col, Carousel, Image } from 'react-bootstrap';
import TitleMainDeco from './MTL/TitleMainDeco.svg';
import TitleHalfCircle from './MTL/TitleHalfCircle.svg';
import TopLogo from './MTL/TopLogo.svg';
import ScrollIcon from './MTL/ScrollIcon.svg';
import toto from './MTL/toto.png';

export const Home = () => (
    <React.Fragment>
        <Container fluid={true}>
            <Row className="Title">
                <Col>
                    <div>
                        <Image className="TitleHalfCircle" src={TitleHalfCircle} alt="HalfCircle" fluid />
                        <div className="TitleHead">
                            <h3 className="HeadSub">創業五十年岡山</h3>
                            <h2 className="HeadMain">焼肉と韓国料理のお店</h2>
                        </div>
                    </div>
                </Col>
                <Col >
                    <Image className="TopLogo" src={TopLogo} alt="Logo" fluid />
                    <div className="Title">
                        <Image className="TitleDeco" src={TitleMainDeco} alt="MainDeco" fluid />
                    </div>
                </Col>
                <Col className="ScrollSec">
                    <Image className="Scroll" src={ScrollIcon} alt="ScrollIcon" fluid />
                </Col>
            </Row>
            <Row className="Carousel">
                <Col>
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={toto}
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://s.yimg.com/ny/api/res/1.2/12UU2JphAsbxTTDca.7QFQ--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9MTA4MDtoPTcxNg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2019-11/7b5b5330-112b-11ea-a77f-7c019be7ecae"
                                alt="Third slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://s.yimg.com/ny/api/res/1.2/12UU2JphAsbxTTDca.7QFQ--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9MTA4MDtoPTcxNg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2019-11/7b5b5330-112b-11ea-a77f-7c019be7ecae"
                                alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>ooo</p>
                </Col>
            </Row>
        </Container>
    </React.Fragment>
)






