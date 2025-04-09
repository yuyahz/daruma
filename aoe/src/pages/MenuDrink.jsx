import React from "react";
import "../MenuJsx.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import Menu_Drinks from "../assets/Menu_Drinks.svg";
import * as FadeIn from "../components/FadeIn";

export const Drink = ({ data }) => {
  return (
    <React.Fragment>
      <div className="restrict-width bottom-space">
        <Container fluid={true}>
          <FadeIn.Down>
            <Row>
              <Col className="menu-title-img-container">
                <Image
                  className="menu-title-img"
                  src={Menu_Drinks}
                  alt="お飲み物"
                  fluid
                />
              </Col>
            </Row>
          </FadeIn.Down>

          <FadeIn.Left>
            <Row>
              <Col md={{ span: 8, offset: 2 }}>
                <Row className="menu-wrapper mb-5" xs={1} md={1}>
                  <div className="menu-caption">
                    <p className="menu-subtitle-bg-primary">ビール</p>
                    <p className="menu-name">生ビール / 小ジョッキ (キリン) </p>
                    <p className="menu-price-wrapper">
                      {/* <span className="menu-price"></span>¥530 */}
                      {/* <span className="menu-price"></span>¥580 */}
                      <span className="menu-price"></span>¥630
                    </p>
                  </div>
                  <div className="menu-caption">
                    <p className="menu-name">生ビール / 中ジョッキ (キリン) </p>
                    <p className="menu-price-wrapper">
                      {/* <span className="menu-price"></span>¥580 */}
                      {/* <span className="menu-price"></span>¥630 */}
                      <span className="menu-price"></span>¥680
                    </p>
                  </div>
                  <div className="menu-caption">
                    <p className="menu-name">ビール / 中瓶 (キリンorアサヒ) </p>
                    <p className="menu-price-wrapper">
                      {/* <span className="menu-price"></span>¥530 */}
                      {/* <span className="menu-price"></span>¥580 */}
                      <span className="menu-price"></span>¥600
                    </p>
                  </div>
                  <div className="menu-caption">
                    <p className="menu-name">ノンアルコールビール</p>
                    <p className="menu-price-wrapper">
                      {/* <span className="menu-price"></span>¥420 */}
                      {/* <span className="menu-price"></span>¥460 */}
                      <span className="menu-price"></span>¥500
                    </p>
                  </div>
                  <div className="menu-caption">
                    <p className="menu-tax"></p>
                  </div>
                </Row>

                <Row className="menu-wrapper mb-5" xs={1} md={1}>
                  <div className="menu-caption">
                    <p className="menu-subtitle-bg-primary">
                      お酒　/　焼酎　/　その他
                    </p>
                    <p className="menu-name">お酒</p>
                    <p className="menu-price-wrapper">
                      {/* <span className="menu-price"> (1合) ¥320</span> (2合) ¥630 */}
                      <span className="menu-price"> (1合) ¥350</span> (2合) ¥690
                    </p>
                  </div>
                  <div className="menu-caption">
                    <p className="menu-name">生冷酒</p>
                    <p className="menu-price-wrapper">
                      {/* <span className="menu-price"></span>¥630 */}
                      {/* <span className="menu-price"></span>¥690 */}
                      <span className="menu-price"></span>¥730
                    </p>
                  </div>
                  <div className="menu-caption">
                    <p className="menu-name">梅酒</p>
                    <p className="menu-price-wrapper">
                      {/* <span className="menu-price"></span>¥420 */}
                      {/* <span className="menu-price"></span>¥460 */}
                      <span className="menu-price"></span>¥500
                    </p>
                  </div>
                  <div className="menu-caption">
                    <p className="menu-name">梅酒ソーダ</p>
                    <p className="menu-price-wrapper">
                      {/* <span className="menu-price"></span>¥530 */}
                      <span className="menu-price"></span>¥580
                    </p>
                  </div>
                  <div className="menu-caption">
                    <p className="menu-name">麦 / 二階堂</p>
                    <p className="menu-price-wrapper">
                      {/* <span className="menu-price"></span>¥530 */}
                      {/* <span className="menu-price"></span>¥580 */}
                      <span className="menu-price"></span>¥600
                    </p>
                  </div>
                  <div className="menu-caption">
                    <p className="menu-name">麦 / 二階堂 (吉四六) </p>
                    <p className="menu-price-wrapper">
                      {/* <span className="menu-price"></span>¥630 */}
                      <span className="menu-price"></span>¥690
                    </p>
                  </div>
                  <div className="menu-caption">
                    {/* <p className="menu-name">芋 / 達磨だるま</p> */}
                    <p className="menu-name">芋</p>
                    <p className="menu-price-wrapper">
                      {/* <span className="menu-price"></span>¥630 */}
                      <span className="menu-price"></span>¥690
                    </p>
                  </div>
                  <div className="menu-caption">
                    <p className="menu-name">米 / 粋すい</p>
                    <p className="menu-price-wrapper">
                      {/* <span className="menu-price"></span>¥630 */}
                      <span className="menu-price"></span>¥690
                    </p>
                  </div>
                  <div className="menu-caption">
                    <p className="menu-name">泡盛 / 八重泉やえせん (古酒) </p>
                    <p className="menu-price-wrapper">
                      {/* <span className="menu-price"></span>¥650 */}
                      {/* <span className="menu-price"></span>¥710 */}
                      <span className="menu-price"></span>¥730
                    </p>
                  </div>
                  <div className="menu-caption">
                    <p className="menu-name">韓国焼酎</p>
                    <p className="menu-price-wrapper">
                      {/* <span className="menu-price"> (1杯) ¥320</span> (1本) ¥840 */}
                      <span className="menu-price"> (1杯) ¥350</span> (1本)
                      ¥1000
                    </p>
                  </div>
                  <div className="menu-caption">
                    <p className="menu-name">高麗人参焼酎</p>
                    <p className="menu-price-wrapper">
                      {/* <span className="menu-price"></span> (1杯) ¥840 */}
                      <span className="menu-price"></span> (1杯) ¥920
                    </p>
                  </div>
                  <div className="menu-caption">
                    <p className="menu-name">マッコリ (米) </p>
                    <p className="menu-price-wrapper">
                      {/* <span className="menu-price"> (1杯) ¥320</span> (1瓶) ¥1050 */}
                      {/* <span className="menu-price"> (1杯) ¥350</span> (1瓶) ¥1150 */}
                      <span className="menu-price"> (1杯) ¥380</span> (1瓶)
                      ¥1200
                    </p>
                  </div>
                  <div className="menu-caption">
                    <p className="menu-tax"></p>
                  </div>
                </Row>

                <Row className="menu-wrapper mb-5" xs={1} md={1}>
                  <div className="menu-caption">
                    <p className="menu-subtitle-bg-primary">チューハイ</p>
                    <p className="menu-name">
                      レモン / ライム / グレープフルーツ / カシス / カルピス /
                      ライチ / ゆず / シークァーサー / 巨峰
                    </p>
                    <p className="menu-price-wrapper">
                      {/* <span className="menu-price"></span>ALL ¥420 */}
                      {/* <span className="menu-price"></span>ALL ¥460 */}
                      <span className="menu-price"></span>ALL ¥500
                    </p>
                  </div>
                  <div className="menu-caption">
                    <p className="menu-tax"></p>
                  </div>
                </Row>

                <Row className="menu-wrapper" xs={1} md={1}>
                  <div className="menu-caption">
                    <p className="menu-subtitle-bg-primary">ワイン</p>
                    <p className="menu-name">ハーフボトル (赤・白・ロゼ) </p>
                    <p className="menu-price-wrapper">
                      {/* <span className="menu-price"></span>¥1050 */}
                      <span className="menu-price"></span>¥1150
                    </p>
                  </div>
                  <div className="menu-caption">
                    <p className="menu-name">グラスワイン</p>
                    <p className="menu-price-wrapper">
                      {/* <span className="menu-price"></span>¥420 */}
                      <span className="menu-price"></span>¥460
                    </p>
                  </div>
                  <div className="menu-caption">
                    <p className="menu-tax"></p>
                  </div>
                </Row>

                <Row className="menu-wrapper" xs={1} md={1}>
                  <div className="menu-caption">
                    <p className="menu-subtitle-bg-primary">ウィスキー</p>
                    <p className="menu-name">ウィスキー</p>
                    <p className="menu-price-wrapper">
                      {/* <span className="menu-price"></span>¥740 */}
                      {/* <span className="menu-price"></span>¥470 */}
                      <span className="menu-price"></span>¥520
                    </p>
                  </div>
                  {/* <div className="menu-caption">
                <p className="menu-name">ブランデー</p>
                <p className="menu-price-wrapper">
                  <span className="menu-price"></span>¥740
                  <span className="menu-price"></span>¥520
                </p>
              </div> */}
                  <div className="menu-caption">
                    <p className="menu-name">ハイボール</p>
                    <p className="menu-price-wrapper">
                      {/* <span className="menu-price"></span>¥430 */}
                      {/* <span className="menu-price"></span>¥470 */}
                      <span className="menu-price"></span>¥520
                    </p>
                  </div>
                  <div className="menu-caption">
                    <p className="menu-name">コークハイ</p>
                    <p className="menu-price-wrapper">
                      {/* <span className="menu-price"></span>¥480 */}
                      {/* <span className="menu-price"></span>¥520 */}
                      <span className="menu-price"></span>¥570
                    </p>
                  </div>
                  <div className="menu-caption">
                    <p className="menu-name">ジンジャーハイ</p>
                    <p className="menu-price-wrapper">
                      {/* <span className="menu-price"></span>¥480 */}
                      {/* <span className="menu-price"></span>¥520 */}
                      <span className="menu-price"></span>¥570
                    </p>
                  </div>
                  <div className="menu-caption">
                    <p className="menu-tax"></p>
                  </div>
                </Row>

                <Row className="menu-wrapper mb-5" xs={1} md={1}>
                  <div className="menu-caption">
                    <p className="menu-subtitle-bg-primary">ソフトドリンク</p>
                    <p className="menu-name">
                      ウーロン茶 / コーラ / オレンジジュース / キリンレモン /
                      カルピス / ジンジャエール
                    </p>
                    <p className="menu-price-wrapper">
                      {/* <span className="menu-price"></span>ALL¥220 */}
                      {/* <span className="menu-price"></span>ALL¥240 */}
                      <span className="menu-price"></span>ALL¥280
                    </p>
                  </div>
                  <div className="menu-caption">
                    <p className="menu-name">黒ウーロン茶</p>
                    <p className="menu-price-wrapper">
                      {/* <span className="menu-price"></span>¥330 */}
                      {/* <span className="menu-price"></span>¥360 */}
                      <span className="menu-price"></span>ALL¥400
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
