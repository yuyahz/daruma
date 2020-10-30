import React from 'react';
import '../MenuJsx.css'
import { Container, Row, Col, Image } from 'react-bootstrap';
import RicedishesDeco from '../assets/RicedishesDeco.svg';

export const RiceDishes = ({ data }) => {
    return (
        <React.Fragment>
            <Container fluid={true}>

                <Row className="MenuTitleSpace">
                    <Col>
                        <div className="MenuDeco">
                            <Image className="MenuDecoTitle" src={RicedishesDeco} alt="Logo" fluid />
                        </div>
                    </Col>
                </Row>

                <Row className="MenuSpace">
                    <Col md={{ span: 8, offset: 2 }}>

                        <Row className="MenuSec" xs={1} md={1}>
                            <div className="MenuCap">
                                <p className="MenuTitele">クッパ</p>
                                <p className="MenuText"><span className="MenuTextSp">(小) ¥480</span>(大) ¥700</p>
                            </div>
                            <div className="MenuCap">
                                <p className="MenuTitele">テールクッパ</p>
                                <p className="MenuText"><span className="MenuTextSp"></span>¥1080</p>
                            </div>
                            <div className="MenuCap">
                                <p className="MenuTitele">にんにくチャーハン</p>
                                <p className="MenuText"><span className="MenuTextSp"></span>¥580</p>
                            </div>
                            <div className="MenuCap">
                                <p className="MenuTitele">トック</p>
                                <p className="MenuText"><span className="MenuTextSp"></span>¥700</p>
                            </div>
                            <div className="MenuCap">
                                <p className="MenuTitele">ビビンバ</p>
                                <p className="MenuText"><span className="MenuTextSp"></span>¥700</p>
                            </div>
                            <div className="MenuCap">
                                <p className="MenuTitele">石焼きチャンジャビビンバ</p>
                                <p className="MenuText"><span className="MenuTextSp"></span>¥1080</p>
                            </div>
                            <div className="MenuCap">
                                <p className="MenuTitele">石焼ビビンバ</p>
                                <p className="MenuText"><span className="MenuTextSp"></span>¥1080</p>
                            </div>
                            <div className="MenuCap">
                                <p className="MenuTitele">チャンジャ巻き１本</p>
                                <p className="MenuText"><span className="MenuTextSp"></span>¥300</p>
                            </div>
                            <div className="MenuCap">
                                <p className="MenuTitele">ご飯</p>
                                <p className="MenuText"><span className="MenuTextSp">(小) ¥220</span><span className="MenuTextSp">(中) ¥480</span>(大) ¥700</p>
                            </div>
                            <div className="MenuCap">
                                <p className="MenuTitele">冷麺 (夏季のみ)</p>
                                <p className="MenuText"><span className="MenuTextSp">(小) ¥690</span>(大) ¥890</p>
                            </div>
                            <div className="MenuCap">
                                <p className="MenuTax"></p>
                            </div>
                        </Row>

                        <Row className="MenuSec" xs={1} md={1}>
                            <div className="MenuCap">
                                <p className="MenuTitele">ワカメスープ</p>
                                <p className="MenuText"><span className="MenuTextSp"></span>¥390</p>
                            </div>
                            <div className="MenuCap">
                                <p className="MenuTitele">玉子スープ</p>
                                <p className="MenuText"><span className="MenuTextSp"></span>¥390</p>
                            </div>
                            <div className="MenuCap">
                                <p className="MenuTitele">野菜スープ</p>
                                <p className="MenuText"><span className="MenuTextSp"></span>¥390</p>
                            </div>
                            <div className="MenuCap">
                                <p className="MenuTitele">コーンクリームスープ</p>
                                <p className="MenuText"><span className="MenuTextSp"></span>¥390</p>
                            </div>
                            <div className="MenuCap">
                                <p className="MenuTitele">もやしスープ</p>
                                <p className="MenuText"><span className="MenuTextSp"></span>¥390</p>
                            </div>
                            <div className="MenuCap">
                                <p className="MenuTitele">ワカ玉スープ (ワカメ・玉子入)</p>
                                <p className="MenuText"><span className="MenuTextSp"></span>¥430</p>
                            </div>
                            <div className="MenuCap">
                                <p className="MenuTitele">プゴクスープ (干しダラのスープ)</p>
                                <p className="MenuText"><span className="MenuTextSp"></span>¥530</p>
                            </div>
                            <div className="MenuCap">
                                <p className="MenuTitele">テールスープ</p>
                                <p className="MenuText"><span className="MenuTextSp"></span>¥890</p>
                            </div>
                            <div className="MenuCap">
                                <p className="MenuTax"></p>
                            </div>
                        </Row>

                        <Row className="MenuSec" xs={1} md={1}>
                            <div className="MenuCap">
                                <p className="MenuTitele">盛り合わせキムチ</p>
                                <p className="MenuText"><span className="MenuTextSp"></span>¥580</p>
                            </div>
                            <div className="MenuCap">
                                <p className="MenuTitele">白菜キムチ</p>
                                <p className="MenuText"><span className="MenuTextSp"></span>¥420</p>
                            </div>
                            <div className="MenuCap">
                                <p className="MenuTitele">大根キムチ (カクテキ)</p>
                                <p className="MenuText"><span className="MenuTextSp"></span>¥420</p>
                            </div>
                            <div className="MenuCap">
                                <p className="MenuTitele">キュウリキムチ (オイキムチ)</p>
                                <p className="MenuText"><span className="MenuTextSp"></span>¥420</p>
                            </div>
                            <div className="MenuCap">
                                <p className="MenuTitele">ゴマの葉の醤油漬け</p>
                                <p className="MenuText"><span className="MenuTextSp"></span>¥380</p>
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
