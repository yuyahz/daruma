import React from "react";
import "../MenuJsx.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import RicedishesDeco from "../assets/RicedishesDeco.svg";

export const RiceDishes = ({ data }) => {
  return (
    <React.Fragment>
      <div className="restrict-width bottom-space">
        <Container fluid={true}>
          <Row>
            <Col className="MenuTitleImgContainer">
              <Image
                className="MenuTitleImg"
                src={RicedishesDeco}
                alt="Logo"
                fluid
              />
            </Col>
          </Row>

          <Row>
            <Col md={{ span: 8, offset: 2 }}>
              <Row className="MenuWrapper mb-5" xs={1} md={1}>
                <div className="MenuSubtitleWrapper">
                  <p className="MenuSubtitle">
                    <strong>ごはん</strong>
                  </p>
                </div>
                <div className="MenuCaption">
                  <p className="MenuTitele">クッパ</p>
                  <p className="MenuText">
                    {/* <span className="MenuTextSp">（小）¥480</span>（大）¥700 */}
                    {/* <span className="MenuTextSp">（小）¥520</span>（大）¥770 */}
                    <span className="MenuTextSp">（小）¥570</span>（大）¥820
                  </p>
                </div>
                <div className="MenuCaption">
                  <p className="MenuTitele">テールクッパ</p>
                  <p className="MenuText">
                    {/* <span className="MenuTextSp"></span>¥1080 */}
                    {/* <span className="MenuTextSp"></span>¥1200 */}
                    <span className="MenuTextSp"></span>¥1380
                  </p>
                </div>
                <div className="MenuCaption">
                  <p className="MenuTitele">にんにくチャーハン</p>
                  <p className="MenuText">
                    {/* <span className="MenuTextSp"></span>¥580 */}
                    {/* <span className="MenuTextSp"></span>¥630 */}
                    <span className="MenuTextSp"></span>¥730
                  </p>
                </div>
                <div className="MenuCaption">
                  <p className="MenuTitele">トック</p>
                  <p className="MenuText">
                    {/* <span className="MenuTextSp"></span>¥700 */}
                    {/* <span className="MenuTextSp"></span>¥770 */}
                    <span className="MenuTextSp"></span>¥870
                  </p>
                </div>
                <div className="MenuCaption">
                  <p className="MenuTitele">ビビンバ</p>
                  <p className="MenuText">
                    {/* <span className="MenuTextSp"></span>¥700 */}
                    {/* <span className="MenuTextSp"></span>¥770 */}
                    <span className="MenuTextSp"></span>¥870
                  </p>
                </div>
                <div className="MenuCaption">
                  <p className="MenuTitele">石焼きチャンジャビビンバ</p>
                  <p className="MenuText">
                    {/* <span className="MenuTextSp"></span>¥1080 */}
                    {/* <span className="MenuTextSp"></span>¥1050 */}
                    <span className="MenuTextSp"></span>¥1280
                  </p>
                </div>
                <div className="MenuCaption">
                  <p className="MenuTitele">石焼ビビンバ</p>
                  <p className="MenuText">
                    {/* <span className="MenuTextSp"></span>¥1080 */}
                    {/* <span className="MenuTextSp"></span>¥1050 */}
                    <span className="MenuTextSp"></span>¥1280
                  </p>
                </div>
                <div className="MenuCaption">
                  <p className="MenuTitele">チャンジャ巻き１本</p>
                  <p className="MenuText">
                    {/* <span className="MenuTextSp"></span>¥300 */}
                    <span className="MenuTextSp"></span>¥330
                  </p>
                </div>
                <div className="MenuCaption">
                  <p className="MenuTitele">ご飯</p>
                  <p className="MenuText">
                    {/* <span className="MenuTextSp">（小）¥190</span>
                  <span className="MenuTextSp">（中）¥220</span>（大）¥260 */}
                    {/* <span className="MenuTextSp">（小）¥180</span>
                  <span className="MenuTextSp">（中）¥220</span>（大）¥260 */}
                    <span className="MenuTextSp">（小）¥180</span>
                    <span className="MenuTextSp">（中）¥250</span>（大）¥320
                  </p>
                </div>
                <div className="MenuCaption">
                  <p className="MenuTitele">冷麺（夏季のみ）</p>
                  <p className="MenuText">
                    {/* <span className="MenuTextSp">（小）¥680</span>（大）¥890 */}
                    <span className="MenuTextSp">（小）¥740</span>（大）¥970
                  </p>
                </div>
                <div className="MenuCaption">
                  <p className="MenuTax"></p>
                </div>
              </Row>

              <Row className="MenuWrapper mb-5" xs={1} md={1}>
                <div className="MenuSubtitleWrapper">
                  <p className="MenuSubtitle">
                    <strong>スープ</strong>
                  </p>
                </div>
                <div className="MenuCaption">
                  <p className="MenuTitele">ワカメスープ</p>
                  <p className="MenuText">
                    {/* <span className="MenuTextSp"></span>¥390 */}
                    {/* <span className="MenuTextSp"></span>¥420 */}
                    <span className="MenuTextSp"></span>¥520
                  </p>
                </div>
                <div className="MenuCaption">
                  <p className="MenuTitele">玉子スープ</p>
                  <p className="MenuText">
                    {/* <span className="MenuTextSp"></span>¥390 */}
                    {/* <span className="MenuTextSp"></span>¥420 */}
                    <span className="MenuTextSp"></span>¥520
                  </p>
                </div>
                <div className="MenuCaption">
                  <p className="MenuTitele">野菜スープ</p>
                  <p className="MenuText">
                    {/* <span className="MenuTextSp"></span>¥390 */}
                    {/* <span className="MenuTextSp"></span>¥420 */}
                    <span className="MenuTextSp"></span>¥520
                  </p>
                </div>
                <div className="MenuCaption">
                  <p className="MenuTitele">コーンクリームスープ</p>
                  <p className="MenuText">
                    {/* <span className="MenuTextSp"></span>¥390 */}
                    {/* <span className="MenuTextSp"></span>¥420 */}
                    <span className="MenuTextSp"></span>¥520
                  </p>
                </div>
                <div className="MenuCaption">
                  <p className="MenuTitele">もやしスープ</p>
                  <p className="MenuText">
                    {/* <span className="MenuTextSp"></span>¥390 */}
                    {/* <span className="MenuTextSp"></span>¥420 */}
                    <span className="MenuTextSp"></span>¥520
                  </p>
                </div>
                <div className="MenuCaption">
                  <p className="MenuTitele">ワカ玉スープ（ワカメ・玉子入）</p>
                  <p className="MenuText">
                    {/* <span className="MenuTextSp"></span>¥430 */}
                    {/* <span className="MenuTextSp"></span>¥470 */}
                    <span className="MenuTextSp"></span>¥570
                  </p>
                </div>
                <div className="MenuCaption">
                  <p className="MenuTitele">プゴクスープ（干しダラのスープ）</p>
                  <p className="MenuText">
                    {/* <span className="MenuTextSp"></span>¥530 */}
                    {/* <span className="MenuTextSp"></span>¥580 */}
                    <span className="MenuTextSp"></span>¥680
                  </p>
                </div>
                <div className="MenuCaption">
                  <p className="MenuTitele">テールスープ</p>
                  <p className="MenuText">
                    {/* <span className="MenuTextSp"></span>¥890 */}
                    {/* <span className="MenuTextSp"></span>¥970 */}
                    <span className="MenuTextSp"></span>¥980
                  </p>
                </div>
                <div className="MenuCaption">
                  <p className="MenuTax"></p>
                </div>
              </Row>

              <Row className="MenuWrapper mb-5" xs={1} md={1}>
                <div className="MenuSubtitleWrapper">
                  <p className="MenuSubtitle">
                    <strong>キムチ</strong>
                  </p>
                </div>
                <div className="MenuCaption">
                  <p className="MenuTitele">盛り合わせキムチ</p>
                  <p className="MenuText">
                    <span className="MenuTextSp"></span>¥580
                  </p>
                </div>
                <div className="MenuCaption">
                  <p className="MenuTitele">白菜キムチ</p>
                  <p className="MenuText">
                    <span className="MenuTextSp"></span>¥420
                  </p>
                </div>
                <div className="MenuCaption">
                  <p className="MenuTitele">大根キムチ（カクテキ）</p>
                  <p className="MenuText">
                    <span className="MenuTextSp"></span>¥420
                  </p>
                </div>
                <div className="MenuCaption">
                  <p className="MenuTitele">キュウリキムチ（オイキムチ）</p>
                  <p className="MenuText">
                    <span className="MenuTextSp"></span>¥420
                  </p>
                </div>
                <div className="MenuCaption">
                  <p className="MenuTitele">ゴマの葉の醤油漬け</p>
                  <p className="MenuText">
                    {/* <span className="MenuTextSp"></span>¥380 */}
                    <span className="MenuTextSp"></span>¥420
                  </p>
                </div>
                <div className="MenuCaption">
                  {/* <p className="MenuTax">※税抜き価格表示</p> */}
                  <p className="MenuTax">※税込価格表示</p>
                </div>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};
