import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import styled from "styled-components";
import { BottomSet } from './components/BottomSet';
import Fuji7 from './assets/Fuji7.png';
import Fuji6 from './assets/Fuji6.png';

const Styles = styled.div`

.RentSecTitle {
    padding-top: 2%;
    text-align: center;
}

.RentSec {
    margin: 5% 0;
}

.RentTopSec {
    margin-bottom: 4%;
}

.RentBottomSec {
    margin-bottom: 7%;
}

.RentTitle {
    padding-bottom: 3%;
    margin-bottom: 5%;
    font-family: 'Noto Serif JP', serif;
    background: linear-gradient(transparent 50%, #007BFF 50%);
    filter: drop-shadow(2px 3px 5px rgba(0, 0, 0, 0.2));
}

.RentSubTitle {
    padding: 20% 0 5%;
    margin-bottom: 5%;
    font-family: 'Noto Serif JP', serif;
    border-bottom: solid 1px #007BFF;
}

.RentTitleText {
    font-family: 'Noto Serif JP', serif;
}

.RentText {
    font-size: 90%;
    color: #F3F0DB;
}

.RentCaption {
    padding: 3%;
}

.RentPic {
    margin: 0 auto;
    display: block;
    height: auto;
    max-width: 100%;
    filter: drop-shadow(2px 3px 5px rgba(0, 0, 0, 0.2));
}

.RentBr {
    white-space: pre-wrap;
    font-size: 60%;
}
`;

export const Rent = () => (

    <Styles>
        <Container fluid={true}>
            <Row className="RentSecTitle">
                <Col md={{ span: 6, offset: 3 }}>
                    <div className="RentText">
                        <h1 className="RentTitle">BBQ器具無料貸し出し</h1>
                        <p className="RentText">アウトドアで本格焼肉を手軽に！後片付けも楽々！
                            使用後はそのまま当店まで返却するだけ!!</p>
                    </div>
                </Col>
            </Row>

            <Row className="RentSec">
                <Col md={{ span: 8, offset: 2 }} className="RentTopSec">
                    <Row xs={1} md={2}>
                        <Col>
                            <Image className="RentPic" src={Fuji7} rounded />
                        </Col>
                        <Col>
                            <div className="RentText">
                                <h3 className="RentSubTitle">器具貸し出し条件 </h3>
                                <p><u>お肉10人前以上、またセットメニュー 5人前以上ご注文の方に限り無料貸し出し可能。</u></p>
                                <p>必要なお客様には 炭 1 袋  ¥780 で販売していますおります。</p>
                                <p>内容 ( 1kg , 着火剤付き , 約 1 台分)</p>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>

            <Row className="RentSec">
                <Col md={{ span: 8, offset: 2 }}>
                    <Row xs={1} md={2}>
                        <Col>
                            <Image className="RentPic" src={Fuji6} rounded />
                            <div className="RentCaption RentText">
                                <p>一度に10人前のお肉が焼ける直径45cmの器具なので、大人数でもOK !!</p>
                            </div>
                        </Col>
                        <Col>
                            <Image className="RentPic" src={Fuji6} rounded />
                            <div className="RentCaption RentText">
                                <p>人数分の箸、コップ、ゴミ袋は無料で差し上げます !!</p>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>

            <Row className="RentSec">
                <Col md={{ span: 8, offset: 2 }} className="RentBottomSec">
                    <Row xs={1} md={2}>
                        <Col>
                            <Image className="RentPic" src={Fuji6} rounded />
                            <div className="RentCaption RentText">
                                <p>BBQセットメニュー</p>
                                <p className="Rentbr">￥1600 セット ( 1人前 )
                                <p className="Rentbr">カルビ 70ｇ / ハラミ 90ｇ / 上ミノ 30ｇ
                                <p className="Rentbr">ホルモン 30ｇ / 上ホルモン 30ｇ
                                <p className="Rentbr">ウインナー 2本</p></p></p></p>
                            </div>
                        </Col>
                        <Col>
                            <Image className="RentPic" src={Fuji6} rounded />
                            <div className="RentCaption RentText">
                                <p>BBQセットメニュー</p>
                                <p className="Rentbr">￥2100 セット ( 1人前 )
                                <p className="Rentbr">カルビ 90ｇ / ハラミ 110ｇ / 上ミノ 30ｇ
                                <p className="Rentbr">ホルモン 30ｇ / 上ホルモン 30ｇ / ブタ 60ｇ
                                <p className="Rentbr">ウインナー 2本</p></p></p></p>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>

            <BottomSet />

        </Container>
    </Styles>



)