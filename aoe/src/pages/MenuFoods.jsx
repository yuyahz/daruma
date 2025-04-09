import React from "react";
import "../MenuJsx.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import Menu_Foods from "../assets/Menu_Foods.svg";
import * as FadeIn from "../components/FadeIn";

export const Foods = ({ data }) => {
  return (
    <React.Fragment>
      <div className="restrict-width bottom-space">
        <Container fluid={true}>
          <FadeIn.Down>
            <Row>
              <Col className="menu-title-img-container">
                <Image
                  className="menu-title-img"
                  src={Menu_Foods}
                  alt="ご飯もの、スープ、キムチ"
                  fluid
                />
              </Col>
            </Row>
          </FadeIn.Down>

          <FadeIn.Left>
            <Row>
              <Col md={{ span: 8, offset: 2 }}>
                <Row className="menu-wrapper mb-5" xs={1} md={1}>
                  <div className="menu-subtitile-wrapper">
                    <p className="menu-subtitile">
                      <strong>ごはん</strong>
                    </p>
                  </div>
                  <div className="menu-caption">
                    <p className="menu-name">クッパ</p>
                    <p className="menu-price-wrapper">
                      {/* <span className="menu-price">（小）¥480</span>（大）¥700 */}
                      {/* <span className="menu-price">（小）¥520</span>（大）¥770 */}
                      <span className="menu-price">（小）¥570</span>（大）¥820
                    </p>
                  </div>
                  <div className="menu-caption">
                    <p className="menu-name">テールクッパ</p>
                    <p className="menu-price-wrapper">
                      {/* <span className="menu-price"></span>¥1080 */}
                      {/* <span className="menu-price"></span>¥1200 */}
                      <span className="menu-price"></span>¥1380
                    </p>
                  </div>
                  <div className="menu-caption">
                    <p className="menu-name">にんにくチャーハン</p>
                    <p className="menu-price-wrapper">
                      {/* <span className="menu-price"></span>¥580 */}
                      {/* <span className="menu-price"></span>¥630 */}
                      <span className="menu-price"></span>¥730
                    </p>
                  </div>
                  <div className="menu-caption">
                    <p className="menu-name">トック</p>
                    <p className="menu-price-wrapper">
                      {/* <span className="menu-price"></span>¥700 */}
                      {/* <span className="menu-price"></span>¥770 */}
                      <span className="menu-price"></span>¥870
                    </p>
                  </div>
                  <div className="menu-caption">
                    <p className="menu-name">ビビンバ</p>
                    <p className="menu-price-wrapper">
                      {/* <span className="menu-price"></span>¥700 */}
                      {/* <span className="menu-price"></span>¥770 */}
                      <span className="menu-price"></span>¥870
                    </p>
                  </div>
                  <div className="menu-caption">
                    <p className="menu-name">石焼きチャンジャビビンバ</p>
                    <p className="menu-price-wrapper">
                      {/* <span className="menu-price"></span>¥1080 */}
                      {/* <span className="menu-price"></span>¥1050 */}
                      <span className="menu-price"></span>¥1280
                    </p>
                  </div>
                  <div className="menu-caption">
                    <p className="menu-name">石焼ビビンバ</p>
                    <p className="menu-price-wrapper">
                      {/* <span className="menu-price"></span>¥1080 */}
                      {/* <span className="menu-price"></span>¥1050 */}
                      <span className="menu-price"></span>¥1280
                    </p>
                  </div>
                  <div className="menu-caption">
                    <p className="menu-name">チャンジャ巻き１本</p>
                    <p className="menu-price-wrapper">
                      {/* <span className="menu-price"></span>¥300 */}
                      <span className="menu-price"></span>¥330
                    </p>
                  </div>
                  <div className="menu-caption">
                    <p className="menu-name">ご飯</p>
                    <p className="menu-price-wrapper">
                      {/* <span className="menu-price">（小）¥190</span>
                  <span className="menu-price">（中）¥220</span>（大）¥260 */}
                      {/* <span className="menu-price">（小）¥180</span>
                  <span className="menu-price">（中）¥220</span>（大）¥260 */}
                      <span className="menu-price">（小）¥180</span>
                      <span className="menu-price">（中）¥250</span>（大）¥320
                    </p>
                  </div>
                  <div className="menu-caption">
                    <p className="menu-name">冷麺（夏季のみ）</p>
                    <p className="menu-price-wrapper">
                      {/* <span className="menu-price">（小）¥680</span>（大）¥890 */}
                      <span className="menu-price">（小）¥740</span>（大）¥970
                    </p>
                  </div>
                  <div className="menu-caption">
                    <p className="menu-tax"></p>
                  </div>
                </Row>

                <Row className="menu-wrapper mb-5" xs={1} md={1}>
                  <div className="menu-subtitile-wrapper">
                    <p className="menu-subtitile">
                      <strong>スープ</strong>
                    </p>
                  </div>
                  <div className="menu-caption">
                    <p className="menu-name">ワカメスープ</p>
                    <p className="menu-price-wrapper">
                      {/* <span className="menu-price"></span>¥390 */}
                      {/* <span className="menu-price"></span>¥420 */}
                      <span className="menu-price"></span>¥520
                    </p>
                  </div>
                  <div className="menu-caption">
                    <p className="menu-name">玉子スープ</p>
                    <p className="menu-price-wrapper">
                      {/* <span className="menu-price"></span>¥390 */}
                      {/* <span className="menu-price"></span>¥420 */}
                      <span className="menu-price"></span>¥520
                    </p>
                  </div>
                  <div className="menu-caption">
                    <p className="menu-name">野菜スープ</p>
                    <p className="menu-price-wrapper">
                      {/* <span className="menu-price"></span>¥390 */}
                      {/* <span className="menu-price"></span>¥420 */}
                      <span className="menu-price"></span>¥520
                    </p>
                  </div>
                  <div className="menu-caption">
                    <p className="menu-name">コーンクリームスープ</p>
                    <p className="menu-price-wrapper">
                      {/* <span className="menu-price"></span>¥390 */}
                      {/* <span className="menu-price"></span>¥420 */}
                      <span className="menu-price"></span>¥520
                    </p>
                  </div>
                  <div className="menu-caption">
                    <p className="menu-name">もやしスープ</p>
                    <p className="menu-price-wrapper">
                      {/* <span className="menu-price"></span>¥390 */}
                      {/* <span className="menu-price"></span>¥420 */}
                      <span className="menu-price"></span>¥520
                    </p>
                  </div>
                  <div className="menu-caption">
                    <p className="menu-name">ワカ玉スープ（ワカメ・玉子入）</p>
                    <p className="menu-price-wrapper">
                      {/* <span className="menu-price"></span>¥430 */}
                      {/* <span className="menu-price"></span>¥470 */}
                      <span className="menu-price"></span>¥570
                    </p>
                  </div>
                  <div className="menu-caption">
                    <p className="menu-name">
                      プゴクスープ（干しダラのスープ）
                    </p>
                    <p className="menu-price-wrapper">
                      {/* <span className="menu-price"></span>¥530 */}
                      {/* <span className="menu-price"></span>¥580 */}
                      <span className="menu-price"></span>¥680
                    </p>
                  </div>
                  <div className="menu-caption">
                    <p className="menu-name">テールスープ</p>
                    <p className="menu-price-wrapper">
                      {/* <span className="menu-price"></span>¥890 */}
                      {/* <span className="menu-price"></span>¥970 */}
                      <span className="menu-price"></span>¥980
                    </p>
                  </div>
                  <div className="menu-caption">
                    <p className="menu-tax"></p>
                  </div>
                </Row>

                <Row className="menu-wrapper mb-5" xs={1} md={1}>
                  <div className="menu-subtitile-wrapper">
                    <p className="menu-subtitile">
                      <strong>キムチ</strong>
                    </p>
                  </div>
                  <div className="menu-caption">
                    <p className="menu-name">盛り合わせキムチ</p>
                    <p className="menu-price-wrapper">
                      <span className="menu-price"></span>¥580
                    </p>
                  </div>
                  <div className="menu-caption">
                    <p className="menu-name">白菜キムチ</p>
                    <p className="menu-price-wrapper">
                      <span className="menu-price"></span>¥420
                    </p>
                  </div>
                  <div className="menu-caption">
                    <p className="menu-name">大根キムチ（カクテキ）</p>
                    <p className="menu-price-wrapper">
                      <span className="menu-price"></span>¥420
                    </p>
                  </div>
                  <div className="menu-caption">
                    <p className="menu-name">キュウリキムチ（オイキムチ）</p>
                    <p className="menu-price-wrapper">
                      <span className="menu-price"></span>¥420
                    </p>
                  </div>
                  <div className="menu-caption">
                    <p className="menu-name">ゴマの葉の醤油漬け</p>
                    <p className="menu-price-wrapper">
                      {/* <span className="menu-price"></span>¥380 */}
                      <span className="menu-price"></span>¥420
                    </p>
                  </div>
                  <div className="menu-caption">
                    {/* <p className="menu-tax">※税抜き価格表示</p> */}
                    <p className="menu-tax">※税込価格表示</p>
                  </div>
                </Row>
              </Col>
            </Row>
          </FadeIn.Left>
        </Container>
      </div>
    </React.Fragment>
  );
};
