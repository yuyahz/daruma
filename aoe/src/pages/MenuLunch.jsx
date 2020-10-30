import React from 'react';
import '../MenuJsx.css'
import { Container, Row, Col, Image } from 'react-bootstrap';
import LunchDeco from '../assets/LunchDeco.svg';

export const Lunch = ({ data }) => {
    return (
        <React.Fragment>
            <Container fluid={true}>

                <Row className="MenuTitleSpace">
                    <Col>
                        <div className="MenuDeco">
                            <Image className="MenuDecoTitle" src={LunchDeco} alt="Logo" fluid />
                        </div>
                    </Col>
                </Row>

                <Row className="MenuSpace">
                    <Col md={{ span: 8, offset: 2 }}>
                        <Row xs={1} md={1}>
                            <Col className="MenuLunchTitle">
                                <h3 className="MenuLunchText">ランチタイムは、11:00～14:00　平日のみ実施中！</h3>
                            </Col>
                        </Row>

                        <Row className="MenuSec" xs={1} md={1}>
                            <div className="MenuCap">
                                <p className="MenuTitele">好きなお肉をセレクト!!</p>
                            </div>
                            <div className="MenuCapSet">
                                <p className="MenuTitele">うす切りカルビ + ( ..... ) + ( ..... )　※ うす切りカルビは必須となります。</p>
                            </div>
                            <div className="MenuCapSet">
                                <p className="MenuTitele">以下のメニューより２品お選び下さい</p>
                            </div>
                            <div className="MenuCapSet">
                                <p className="MenuTitele">ハラミ、上ホルモン、ホルモン、レバーブタ、ブタバラ、トリ、セセリウィンナー(3本)、
                                センマイ、ブタロース、よめなかせ、心臓、ギアラ、本日の一品、キムチ、サラダ、ライス、スープ、デザート 付き</p>
                            </div>
                            <div className="MenuCapSet">
                                <p className="MenuTitele"></p>
                                <p className="MenuText"><span className="MenuTextSpSingle"></span>¥1180</p>
                            </div>
                            <div className="MenuCap">
                                <p className="MenuTitele">ホルモンうどんランチ</p>
                                <p className="MenuText"><span className="MenuTextSpSingle"></span>¥880</p>
                            </div>
                            <div className="MenuCapSet">
                                <p className="MenuTitele">本日の一品、キムチ、サラダ、ライス、デザート　付き</p>
                            </div>
                            <div className="MenuCap">
                                <p className="MenuTitele">韓国ラーメンランチ</p>
                                <p className="MenuText"><span className="MenuTextSpSingle"></span>¥880</p>
                            </div>
                            <div className="MenuCapSet">
                                <p className="MenuTitele">本日の一品、キムチ、サラダ、ライス、デザート　付き</p>
                            </div>
                            <div className="MenuCap">
                                <p className="MenuTitele">豆腐チゲランチ</p>
                                <p className="MenuText"><span className="MenuTextSpSingle"></span>¥880</p>
                            </div>
                            <div className="MenuCapSet">
                                <p className="MenuTitele">本日の一品、キムチ、サラダ、ライス、デザート　付き</p>
                            </div>
                            <div className="MenuCap">
                                <p className="MenuTitele">カムジャタンランチ</p>
                                <p className="MenuText"><span className="MenuTextSpSingle"></span>¥1080</p>
                            </div>
                            <div className="MenuCapSet">
                                <p className="MenuTitele">(韓国風　豚スベアリブとじゃがいもの辛口チゲ)、本日の一品、キムチ、サラダ、ライス、デザート　付き</p>
                            </div>
                            <div className="MenuCap">
                                <p className="MenuTitele">プゴクスープランチ</p>
                                <p className="MenuText"><span className="MenuTextSpSingle"></span>¥880</p>
                            </div>
                            <div className="MenuCapSet">
                                <p className="MenuTitele">(干しダラの旨み、たっぷり野菜のスープ　デトックス効果　美肌へ)、ビビンバ（小）、本日の一品、キムチ、サラダ、デザート　付き</p>
                            </div>
                            <div className="MenuCap">
                                <p className="MenuTitele">にんにくチャーハンランチ</p>
                                <p className="MenuText"><span className="MenuTextSpSingle"></span>¥780</p>
                            </div>
                            <div className="MenuCapSet">
                                <p className="MenuTitele">本日の一品、キムチ、サラダ、スープ、デザート　付き</p>
                            </div>
                            <div className="MenuCap">
                                <p className="MenuTax">※税抜き価格表示</p>
                            </div>
                        </Row>

                        <Row xs={1} md={1}>
                            <Col className="MenuLunchBottom">
                                <p className="MenuLunchBottomText">
                                <h4 className="MenuBr">韓国料理のチカラ</h4>
                                韓国料理は豊富な野菜、海産物、香辛料などを使って作るので現代人に不足しがちなビタミン、ミネラル、カルシウムも豊富に摂れる、
                                ヘルシーで栄養バランスにとても優れた料理です。唐辛子の辛さは、エネルギーの代謝をよくしてくれ、脂肪を燃焼させる働きがあります。その唐辛子をたっぷり使ったキムチには、
                                ビタミンＣが多く含まれている為、身体の抵抗力を高め、しみなどの原因になるメラニンの生成を防ぎ、しわ、たるみなどを防ぐコラーゲンの生成を助ける働きもあります。韓国料理は、
                                健康にも美容にも効果抜群の料理です。</p>
                            </Col>
                        </Row>

                    </Col>
                </Row>

            </Container>
        </React.Fragment>
    );
}
