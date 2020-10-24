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
`;

export const Info = () => (

    <Styles>
        <Container fluid={true}>
            <Row className="InfoSecTitle">
                <Col md={{ span: 8, offset: 2 }}>
                    <div className="InfoText">
                        <h1 className="InfoTitle">店内紹介</h1>
                        <p>ベビーベッド、おもちゃ、ベビーチェアあり お座敷の席が多いため、お子様連れの お客様も、ゆっくりお食事が楽しめます。</p>
                    </div>
                </Col>
            </Row>

            <Row className="InfoSecTitle">
                <Col md={{ span: 8, offset: 2 }}>
                    <Image src={Fuji4} rounded />
                    <div className="InfoSec">
                        <div className="InfoCap">
                            <p className="InfoCapTitele">板の間</p>
                            <p className="InfoCapText">４人席 × 5　6人席 × 3</p>
                        </div>
                    </div>
                </Col>
            </Row>

            <MenuBottom />
        </Container>
    </Styles>

)