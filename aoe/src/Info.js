import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import styled from 'styled-components';
import { MenuBottom } from './components/MenuBottom';
import Fuji4 from './assets/Fuji4.png';

const Styles = styled.div`

.InfoSecTitle {
    padding-top: 2%;
    text-align: center;
}

.InfoTitle {
    padding-bottom: 3%;
    margin-bottom: 5%;
    font-family: 'Noto Serif JP', serif;
    background: linear-gradient(transparent 0%, #C73D13 50%);
    filter: drop-shadow(2px 3px 5px rgba(0, 0, 0, 0.2));
}

.InfoSec {
    padding: 3%;
}

.InfoText {
    font-size: 90%;
    color: #F3F0DB;
}

.InfoFrame {
    margin: 10% 5%;
    padding: 3% 3% 1%;
    font-family: 'Noto Serif JP', serif;
    background-color: #C73D13;
    border: 4px double #007BFF;
    border-radius: 15px;
    filter: drop-shadow(2px 3px 5px rgba(1, 1, 0, 0.3));
}

.InfoCap {
    border-top: solid 1px #007BFF;
    padding: 1% 0;
    color: #F3F0DB;
}

.InfoCapTitele {
    text-align: left;
    float: left;
}

.InfoCapText {
    text-align: right;
}

.InfoCapSubText {
    text-align: right;
    font-size: 70%;
}

.InfoBr {
    white-space: pre-wrap;
    font-size: 60%;
}
`;

export const Info = () => (

    <Styles>
        <Container fluid={true}>
            <Row className="InfoSecTitle">
                <Col md={{ span: 8, offset: 2 }}>
                    <div className="InfoText">
                        <h2 className="InfoTitle">店内紹介</h2>
                        <div className="InfoFrame">
                            <div>
                                <p>明るい店内は、アットホームな雰囲気！宴会、2次会に最適な広さです。</p>
                                <p>お座敷の席が多いため、お子様連れのお客様も、ゆっくりお食事が楽しめます。</p>
                                <p>店内が広く、段差も少ないため車椅子のお客様も、安心してご来店いただけます。</p>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>

            <Row className="InfoSecTitle">
                <Col md={{ span: 8, offset: 2 }}>
                    <Row xs={1} md={1}>
                        <Image src={Fuji4} rounded />
                        <div className="InfoSec">
                            <div className="InfoCap">
                                <p className="InfoCapTitele">BOX席</p>
                                <p className="InfoCapText">6人席 × 3</p>
                            </div>
                        </div>
                    </Row>
                </Col>
            </Row>

            <Row className="InfoSecTitle">
                <Col md={{ span: 8, offset: 2 }}>
                    <Row xs={1} md={1}>
                        <Image src={Fuji4} rounded />
                        <div className="InfoSec">
                            <div className="InfoCap">
                                <p className="InfoCapTitele">板の間</p>
                                <p className="InfoCapText">４人席 × 5　6人席 × 3</p>
                            </div>
                        </div>
                    </Row>
                </Col>
            </Row>

            <Row className="InfoSecTitle">
                <Col md={{ span: 8, offset: 2 }}>
                    <Row xs={1} md={1}>
                        <Image src={Fuji4} rounded />
                        <div className="InfoSec">
                            <div className="InfoCap">
                                <p className="InfoCapTitele">宴会場</p>
                                <p className="InfoCapText">宴会場は最大６０名まで、利用可能
                                <p className="InfoBr">※ (少人数でご利用したいお客様は、個室としてもご利用して頂けます)</p>
                                </p>
                            </div>
                        </div>
                    </Row>
                </Col>
            </Row>

            <Row className="InfoSecTitle">
                <Col md={{ span: 8, offset: 2 }}>
                    <Row xs={1} md={1}>
                        <Image src={Fuji4} rounded />
                        <div className="InfoSec">
                            <div className="InfoCap">
                                <p className="InfoCapTitele">待合室</p>
                                <p className="InfoCapText">ベビーベッド、おもちゃ、ベビーチェアあり</p>
                            </div>
                        </div>
                    </Row>
                </Col>
            </Row>

            <MenuBottom />
        </Container>
    </Styles >

)