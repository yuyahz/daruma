import React from 'react';
import '../MenuJsx.css'
import { Container, Row, Col, Image } from 'react-bootstrap';
import DrinkDeco from '../assets/DrinkDeco.svg';

export const Drink = ({ data }) => {
    return (
        <React.Fragment>
            <Container fluid={true}>

                <Row className="MenuTitleSpace">
                    <Col>
                        <div className="MenuDeco">
                            <Image className="MenuDecoTitle" src={DrinkDeco} alt="Logo" fluid />
                        </div>
                    </Col>
                </Row>

                <Row className="MenuSpace">
                    <Col md={{ span: 8, offset: 2 }}>

                        <Row className="MenuSec" xs={1} md={1}>
                            <div className="MenuCap">
                                <p className="MenuTitele">ウーロン茶 / コーラ / オレンジジュース / キリンレモン / カルピス  / ジンジャエール</p>
                                <p className="MenuText"><span className="MenuTextSp"></span>ALL¥220</p>
                            </div>
                            <div className="MenuCap">
                                <p className="MenuTitele">黒ウーロン茶</p>
                                <p className="MenuText"><span className="MenuTextSp"></span>¥330</p>
                            </div>
                            <div className="MenuCap">
                                <p className="MenuTax"></p>
                            </div>
                        </Row>

                        <Row className="MenuSec" xs={1} md={1}>
                            <div className="MenuCap">
                                <p className="MenuTitele">生ビール / 小ジョッキ　(キリン)</p>
                                <p className="MenuText"><span className="MenuTextSp"></span>¥530</p>
                            </div>
                            <div className="MenuCap">
                                <p className="MenuTitele">生ビール / 中ジョッキ　(キリン)</p>
                                <p className="MenuText"><span className="MenuTextSp"></span>¥580</p>
                            </div>
                            <div className="MenuCap">
                                <p className="MenuTitele">ビール / 中瓶　(キリンorアサヒ)</p>
                                <p className="MenuText"><span className="MenuTextSp"></span>¥530</p>
                            </div>
                            <div className="MenuCap">
                                <p className="MenuTitele">ノンアルコールビール</p>
                                <p className="MenuText"><span className="MenuTextSp"></span>¥420</p>
                            </div>
                            <div className="MenuCap">
                                <p className="MenuTitele">お酒</p>
                                <p className="MenuText"><span className="MenuTextSp">(1号)¥320</span>(2号)¥630</p>
                            </div>
                            <div className="MenuCap">
                                <p className="MenuTitele">生冷酒</p>
                                <p className="MenuText"><span className="MenuTextSp"></span>¥630</p>
                            </div>
                            <div className="MenuCap">
                                <p className="MenuTitele">梅酒</p>
                                <p className="MenuText"><span className="MenuTextSp"></span>¥420</p>
                            </div>
                            <div className="MenuCap">
                                <p className="MenuTitele">梅酒ソーダ</p>
                                <p className="MenuText"><span className="MenuTextSp"></span>¥530</p>
                            </div>
                            <div className="MenuCap">
                                <p className="MenuTax"></p>
                            </div>
                        </Row>

                        <Row className="MenuSec" xs={1} md={1}>
                            <div className="MenuCap">
                                <p className="MenuTitele">麦 / 二階堂</p>
                                <p className="MenuText"><span className="MenuTextSp"></span>¥530</p>
                            </div>
                            <div className="MenuCap">
                                <p className="MenuTitele">芋 / 達磨だるま</p>
                                <p className="MenuText"><span className="MenuTextSp"></span>¥630</p>
                            </div>
                            <div className="MenuCap">
                                <p className="MenuTitele">米 / 粋すい</p>
                                <p className="MenuText"><span className="MenuTextSp"></span>¥630</p>
                            </div>
                            <div className="MenuCap">
                                <p className="MenuTitele">泡盛 / 八重泉やえせん(古酒)</p>
                                <p className="MenuText"><span className="MenuTextSp"></span>¥650</p>
                            </div>
                            <div className="MenuCap">
                                <p className="MenuTitele">韓国焼酎</p>
                                <p className="MenuText"><span className="MenuTextSp">(1杯)¥320</span>(2杯)¥840</p>
                            </div>
                            <div className="MenuCap">
                                <p className="MenuTitele">高麗人参焼酎</p>
                                <p className="MenuText"><span className="MenuTextSp"></span>(1杯)¥320</p>
                            </div>
                            <div className="MenuCap">
                                <p className="MenuTitele">黒ウーロン茶</p>
                                <p className="MenuText"><span className="MenuTextSp"></span>¥330</p>
                            </div>
                            <div className="MenuCap">
                                <p className="MenuTitele">マッコリ(米)</p>
                                <p className="MenuText"><span className="MenuTextSp">(1杯)¥320</span>(1瓶)¥1050</p>
                            </div>
                            <div className="MenuCap">
                                <p className="MenuTax"></p>
                            </div>
                        </Row>

                        <Row className="MenuSec" xs={1} md={1}>
                            <div className="MenuCap">
                                <p className="MenuTitele">レモン / ライム / グレープフルーツ / カシス / ウメ / カルピスライチ / ゆず
                                シークヮーサー(沖縄みかん)白桃 / 巨峰</p>
                                <p className="MenuText"><span className="MenuTextSp"></span>ALL  ¥220</p>
                            </div>
                            <div className="MenuCap">
                                <p className="MenuTax"></p>
                            </div>
                        </Row>

                        <Row className="MenuSec" xs={1} md={1}>
                            <div className="MenuCap">
                                <p className="MenuTitele">ハーフボトル(赤・白・ロゼ)</p>
                                <p className="MenuText"><span className="MenuTextSp"></span>¥1050</p>
                            </div>
                            <div className="MenuCap">
                                <p className="MenuTitele">グラスワイン</p>
                                <p className="MenuText"><span className="MenuTextSp"></span>¥420</p>
                            </div>
                            <div className="MenuCap">
                                <p className="MenuTax"></p>
                            </div>
                        </Row>

                        <Row className="MenuSec" xs={1} md={1}>
                            <div className="MenuCap">
                                <p className="MenuTitele">ウィスキー</p>
                                <p className="MenuText"><span className="MenuTextSp"></span>¥740</p>
                            </div>
                            <div className="MenuCap">
                                <p className="MenuTitele">ブランデー</p>
                                <p className="MenuText"><span className="MenuTextSp"></span>¥740</p>
                            </div>
                            <div className="MenuCap">
                                <p className="MenuTitele">ハイボール</p>
                                <p className="MenuText"><span className="MenuTextSp"></span>¥430</p>
                            </div>
                            <div className="MenuCap">
                                <p className="MenuTitele">コークハイ</p>
                                <p className="MenuText"><span className="MenuTextSp"></span>¥480</p>
                            </div>
                            <div className="MenuCap">
                                <p className="MenuTitele">ジンジャーハイ</p>
                                <p className="MenuText"><span className="MenuTextSp"></span>¥480</p>
                            </div>
                            <div className="MenuCap">
                                <p className="MenuTax">※税抜き価格表示</p>
                            </div>
                        </Row>
                    </Col>
                </Row>

            </Container>
        </React.Fragment>
    );
}
