import React from 'react';
import { Container, Row, Col, Button, Card, Image } from 'react-bootstrap';
import styled from 'styled-components';
import FujiCard from '../assets/FujiCard.png';

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

export const MenuCard = () => (
    <Styles>
        <Container fluid>
            <Row className="SideSpace">
                <Col className="CardSec" xs={12} md={4}>
                    <Card className="CardRadius">
                        <Card.Img className="CardPic" variant="top" src={FujiCard} alt="FujiCard" />
                        <Card.Body>
                            <Card.Title className="CardTitle">焼肉</Card.Title>
                            <Card.Text>
                                <p className="CardText">市場直送の新鮮で選りすぐりの部位を 美味しく召し上がって頂けるように、 スタッフ自ら仕込み提供しています。</p>
                            </Card.Text>
                            <Button href="#/" className="CardButton" variant="primary">詳しく</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="CardSec" xs={12} md={4}>
                    <Card className="CardRadius">
                        <Card.Img className="CardPic" variant="top" src={FujiCard} alt="FujiCard" />
                        <Card.Body>
                            <Card.Title className="CardTitle">刺身・一品料理・生野菜</Card.Title>
                            <Card.Text>
                                <p className="CardText">安心安全を第一にスタッフ自ら仕込ん だ新鮮な牛の刺身と、当店自慢の本場 韓国料理の味を是非。</p>
                            </Card.Text>
                            <Button className="CardButton" variant="primary">詳しく</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="CardSec" xs={12} md={4}>
                    <Card className="CardRadius">
                        <Card.Img className="CardPic" variant="top" src={FujiCard} alt="FujiCard" />
                        <Card.Body>
                            <Card.Title className="CardTitle">ご飯もの・スープ</Card.Title>
                            <Card.Text>
                                <p className="CardText">先代から受け継がれたレシピは、牛か ら出汁をとりじっく手間暇かけたスー プです。</p>
                            </Card.Text>
                            <Button className="CardButton" variant="primary">詳しく</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className="SideSpace">
                <Col className="CardSec" xs={12} md={4}>
                    <Card className="CardRadius">
                        <Card.Img className="CardPic" variant="top" src={FujiCard} alt="FujiCard" />
                        <Card.Body>
                            <Card.Title className="CardTitle">お飲物</Card.Title>
                            <Card.Text>
                                <p className="CardText">店長自らピックアップした日本と韓国 両方のお酒を取り揃えています。</p>
                            </Card.Text>
                            <Button className="CardButton" variant="primary">詳しく</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="CardSec" xs={12} md={4}>
                    <Card className="CardRadius">
                        <Card.Img className="CardPic" variant="top" src={FujiCard} alt="FujiCard" />
                        <Card.Body>
                            <Card.Title className="CardTitle">デザート</Card.Title>
                            <Card.Text>
                                <p className="CardText">一番人気のソフトクリーム以外にも、 フレッシュなフルーツのアイスも取り 揃えています。</p>
                            </Card.Text>
                            <Button className="CardButton" variant="primary">詳しく</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="CardSec" xs={12} md={4}>
                    <Card className="CardRadius">
                        <Card.Img className="CardPic" variant="top" src={FujiCard} alt="FujiCard" />
                        <Card.Body>
                            <Card.Title className="CardTitle">宴会コース料理</Card.Title>
                            <Card.Text>
                                <p className="CardText">幹事さまの手間を省く為に分かりやす く、満足していただけるコースをご用 意しております。</p>
                            </Card.Text>
                            <Button className="CardButton" variant="primary">詳しく</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className="SideSpace">
                <Col className="CardSec" xs={12} md={4}>
                    <Card className="CardRadius">
                        <Card.Img className="CardPic" variant="top" src={FujiCard} alt="FujiCard" />
                        <Card.Body>
                            <Card.Title className="CardTitle">韓国ランチ</Card.Title>
                            <Card.Text>
                                <p className="CardText">リーズナブルに本格韓国料理を楽しん で召し上がって頂けるメニューをご用 意しています。</p>
                            </Card.Text>
                            <Button className="CardButton" variant="primary">詳しく</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    </Styles >
)