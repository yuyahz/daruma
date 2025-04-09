import React from "react";
import "../MenuJsx.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import Menu_Yakiniku from "../assets/Menu_Yakiniku.svg";
import * as FadeIn from "../components/FadeIn";

export const Yakiniku = ({ data }) => {
  return (
    <React.Fragment>
      <div className="restrict-width bottom-space">
        <Container fluid={true}>
          <FadeIn.Down>
            <Row d-flex justify-content-center>
              <Col className="menu-title-img-container">
                <Image
                  className="menu-title-img"
                  src={Menu_Yakiniku}
                  alt="焼肉"
                  fluid
                />
              </Col>
            </Row>
          </FadeIn.Down>

          <FadeIn.Left>
            <Row>
              <Col md={{ span: 8, offset: 2 }}>
                <Row className="menu-wrapper" xs={1} md={1}>
                  <div className="menu-subtitile-wrapper">
                    <p className="menu-subtitile">
                      <strong>牛肉</strong>
                    </p>
                    <p className="menu-subtitile-rightside-wrapper">
                      <span className="menu-subtitile-rightside">
                        <strong>通常</strong>
                      </span>
                      <strong>ハーフ</strong>
                    </p>
                  </div>
                  <div className="menu-caption">
                    <p className="menu-name">カルビ</p>
                    <p className="menu-price-wrapper">
                      {/* <span className="menu-price">¥960</span>¥530 */}
                      {/* <span className="menu-price">¥980</span>¥540 */}
                      <span className="menu-price">¥1180</span>¥700
                    </p>
                  </div>
                  <div className="menu-caption">
                    <p className="menu-name">ハラミ</p>
                    <p className="menu-price-wrapper">
                      {/* <span className="menu-price">¥840</span>¥530 */}
                      {/* <span className="menu-price">¥880</span>¥490 */}
                      <span className="menu-price">¥980</span>¥580
                    </p>
                  </div>
                  <div className="menu-caption">
                    <p className="menu-name">タン</p>
                    <p className="menu-price-wrapper">
                      {/* <span className="menu-price">¥960</span>¥530 */}
                      {/* <span className="menu-price">¥980</span>¥540 */}
                      <span className="menu-price">¥1180</span>¥700
                    </p>
                  </div>
                  <div className="menu-caption">
                    <p className="menu-name">ネギ塩タン</p>
                    <p className="menu-price-wrapper">
                      {/* <span className="menu-price">¥960</span>¥530 */}
                      {/* <span className="menu-price">¥980</span>¥540 */}
                      <span className="menu-price">¥1280</span>¥760
                    </p>
                  </div>
                  <div className="menu-caption">
                    <p className="menu-name">ロース</p>
                    <p className="menu-price-wrapper">
                      {/* <span className="menu-price">¥1060 </span>¥590 */}
                      {/* <span className="menu-price">¥1150 </span>¥640 */}
                      <span className="menu-price">¥1280</span>¥760
                    </p>
                  </div>
                  <div className="menu-caption">
                    <p className="menu-name">味わいカルビ（中落ち）</p>
                    <p className="menu-price-wrapper">
                      {/* <span className="menu-price">¥680</span>¥380 */}
                      {/* <span className="menu-price">¥740</span>¥410 */}
                      <span className="menu-price">¥880</span>¥520
                    </p>
                  </div>
                  <div className="menu-caption">
                    <p className="menu-name">ギアラ（赤セン）</p>
                    <p className="menu-price-wrapper">
                      {/* <span className="menu-price">¥530</span>¥270 */}
                      {/* <span className="menu-price">¥630</span>¥350 */}
                      <span className="menu-price">¥680</span>¥400
                    </p>
                  </div>
                  <div className="menu-caption">
                    <p className="menu-name">上ミノ</p>
                    <p className="menu-price-wrapper">
                      {/* <span className="menu-price">¥820</span>¥450 */}
                      {/* <span className="menu-price">¥860</span>¥480 */}
                      <span className="menu-price">¥980</span>¥580
                    </p>
                  </div>
                  <div className="menu-caption">
                    <p className="menu-name">センマイ</p>
                    <p className="menu-price-wrapper">
                      {/* <span className="menu-price">¥580</span>¥300 */}
                      {/* <span className="menu-price">¥630</span>¥350 */}
                      <span className="menu-price">¥680</span>¥400
                    </p>
                  </div>
                  <div className="menu-caption">
                    <p className="menu-name">上ホルモン</p>
                    <p className="menu-price-wrapper">
                      {/* <span className="menu-price">¥700</span>¥380 */}
                      {/* <span className="menu-price">¥780</span>¥430 */}
                      <span className="menu-price">¥880</span>¥520
                    </p>
                  </div>
                  <div className="menu-caption">
                    <p className="menu-name">ホルモン</p>
                    <p className="menu-price-wrapper">
                      {/* <span className="menu-price">¥630</span>¥330 */}
                      {/* <span className="menu-price">¥680</span>¥380 */}
                      <span className="menu-price">¥780</span>¥460
                    </p>
                  </div>
                  <div className="menu-caption">
                    <p className="menu-name">よめなかせ</p>
                    <p className="menu-price-wrapper">
                      {/* <span className="menu-price">580</span>¥300 */}
                      {/* <span className="menu-price">¥630</span>¥350 */}
                      <span className="menu-price">¥780</span>¥460
                    </p>
                  </div>
                  <div className="menu-caption">
                    <p className="menu-name">混合</p>
                    <p className="menu-price-wrapper">
                      {/* <span className="menu-price">¥580</span> ¥300 */}
                      {/* <span className="menu-price">¥630</span> ¥350 */}
                      <span className="menu-price">¥780</span>¥460
                    </p>
                  </div>
                  <div className="menu-caption">
                    <p className="menu-name">レバー</p>
                    <p className="menu-price-wrapper">
                      {/* <span className="menu-price">¥630</span>¥330 */}
                      {/* <span className="menu-price">¥680</span>¥380 */}
                      <span className="menu-price">¥780</span>¥460
                    </p>
                  </div>
                  <div className="menu-caption">
                    <p className="menu-name">心臓</p>
                    <p className="menu-price-wrapper">
                      {/* <span className="menu-price">¥630</span>¥330 */}
                      {/* <span className="menu-price">¥680</span>¥380 */}
                      <span className="menu-price">¥780</span>¥460
                    </p>
                  </div>
                  <div className="menu-caption">
                    <p className="menu-name">牛ホホ肉（ツラミ）</p>
                    <p className="menu-price-wrapper">
                      {/* <span className="menu-price">¥580</span>¥330 */}
                      {/* <span className="menu-price">¥630</span>¥350 */}
                      <span className="menu-price">¥780</span>¥460
                    </p>
                  </div>
                  <div className="menu-caption">
                    <p className="menu-name">骨つきカルビ</p>
                    <p className="menu-price-wrapper">
                      {/* <span className="menu-price">¥1010</span>¥560 */}
                      {/* <span className="menu-price">¥1150</span>¥640 */}
                      <span className="menu-price">¥1250</span>¥750
                    </p>
                  </div>
                  <div className="menu-caption">
                    <p className="menu-name">上カルビ</p>
                    <p className="menu-price-wrapper">
                      {/* <span className="menu-price">¥1310</span>¥730 */}
                      {/* <span className="menu-price">¥1440</span>¥800 */}
                      <span className="menu-price">¥1540</span>¥920
                    </p>
                  </div>
                  <div className="menu-caption">
                    <p className="menu-name">上タン（10食限定）</p>
                    <p className="menu-price-wrapper">
                      {/* <span className="menu-price">¥1730</span>¥960 */}
                      {/* <span className="menu-price">¥1900</span>¥1060 */}
                      <span className="menu-price">¥1980</span>¥1180
                    </p>
                  </div>
                  <div className="menu-caption">
                    <p className="menu-name">上ロース</p>
                    <p className="menu-price-wrapper">
                      {/* <span className="menu-price">¥1730</span>¥960 */}
                      {/* <span className="menu-price">¥1900</span>¥1060 */}
                      <span className="menu-price">¥1980</span>¥1180
                    </p>
                  </div>
                  <div className="menu-caption">
                    <p className="menu-tax"></p>
                  </div>
                </Row>

                <Row className="menu-wrapper" xs={1} md={1}>
                  <div className="menu-subtitile-wrapper">
                    <p className="menu-subtitile">
                      <strong>豚肉</strong>
                    </p>
                    <p className="menu-subtitile-rightside-wrapper">
                      <span className="menu-subtitile-rightside">
                        <strong>通常</strong>
                      </span>
                      <strong>ハーフ</strong>
                    </p>
                  </div>
                  <div className="menu-caption">
                    <p className="menu-name">豚トロ</p>
                    <p className="menu-price-wrapper">
                      {/* <span className="menu-price">¥580</span>¥320 */}
                      {/* <span className="menu-price">¥550</span>¥300 */}
                      <span className="menu-price">¥680</span>¥400
                    </p>
                  </div>
                  <div className="menu-caption">
                    <p className="menu-name">豚肉（つらみ）</p>
                    <p className="menu-price-wrapper">
                      {/* <span className="menu-price">¥550</span>¥300 */}
                      {/* <span className="menu-price">¥580</span>¥320 */}
                      <span className="menu-price">¥680</span>¥400
                    </p>
                  </div>
                  <div className="menu-caption">
                    <p className="menu-name">豚ロース</p>
                    <p className="menu-price-wrapper">
                      {/* <span className="menu-price">¥600</span>¥330 */}
                      {/* <span className="menu-price">¥650</span>¥360 */}
                      <span className="menu-price">¥750</span>¥450
                    </p>
                  </div>
                  <div className="menu-caption">
                    <p className="menu-name">豚バラ</p>
                    <p className="menu-price-wrapper">
                      {/* <span className="menu-price">¥600</span>¥330 */}
                      {/* <span className="menu-price">¥650</span>¥360 */}
                      <span className="menu-price">¥750</span>¥450
                    </p>
                  </div>
                  <div className="menu-caption">
                    <p className="menu-name">歌声（タレ・辛ダレ）※豚の軟骨</p>
                    <p className="menu-price-wrapper">
                      {/* <span className="menu-price">¥500</span>¥270 */}
                      <span className="menu-price">¥650</span>¥390
                    </p>
                  </div>
                  <div className="menu-caption">
                    <p className="menu-tax"></p>
                  </div>
                </Row>

                <Row className="menu-wrapper" xs={1} md={1}>
                  <div className="menu-subtitile-wrapper">
                    <p className="menu-subtitile">
                      <strong>鶏肉</strong>
                    </p>
                    <p className="menu-subtitile-rightside-wrapper">
                      <span className="menu-subtitile-rightside">
                        <strong>通常</strong>
                      </span>
                      <strong>ハーフ</strong>
                    </p>
                  </div>
                  <div className="menu-caption">
                    <p className="menu-name">若ドリ</p>
                    <p className="menu-price-wrapper">
                      {/* <span className="menu-price">¥600</span>¥330 */}
                      {/* <span className="menu-price">¥580</span>¥320 */}
                      <span className="menu-price">¥630</span>¥370
                    </p>
                  </div>
                  <div className="menu-caption">
                    <p className="menu-name">鶏のせせり</p>
                    <p className="menu-price-wrapper">
                      {/* <span className="menu-price">¥600</span>¥330 */}
                      <span className="menu-price">¥630</span>¥370
                    </p>
                  </div>
                  <div className="menu-caption">
                    <p className="menu-name">あらびきウィンナー</p>
                    <p className="menu-price-wrapper">
                      {/* <span className="menu-priceSingle">¥530</span> */}
                      <span className="menu-priceSingle">¥580</span>
                    </p>
                  </div>
                  <div className="menu-caption">
                    <p className="menu-name">厚切りベーコン</p>
                    <p className="menu-price-wrapper">
                      {/* <span className="menu-priceSingle">¥550</span> */}
                      <span className="menu-priceSingle">¥630</span>
                    </p>
                  </div>
                  <div className="menu-caption">
                    <p className="menu-tax"></p>
                  </div>
                </Row>

                <Row className="menu-wrapper" xs={1} md={1}>
                  <div className="menu-subtitile-wrapper">
                    <p className="menu-subtitile">
                      <strong>海鮮</strong>
                    </p>
                    <p className="menu-subtitile-rightside-wrapper">
                      <span className="menu-subtitile-rightside">
                        <strong>通常</strong>
                      </span>
                      <strong>ハーフ</strong>
                    </p>
                  </div>
                  <div className="menu-caption">
                    <p className="menu-name">イカ</p>
                    <p className="menu-price-wrapper">
                      {/* <span className="menu-priceSingle">¥680</span> */}
                      <span className="menu-priceSingle">¥780</span>
                    </p>
                  </div>
                  <div className="menu-caption">
                    <p className="menu-name">エビ</p>
                    <p className="menu-price-wrapper">
                      {/* <span className="menu-priceSingle">¥790</span> */}
                      <span className="menu-priceSingle">¥880</span>
                    </p>
                  </div>
                  <div className="menu-caption">
                    <p className="menu-name">貝柱</p>
                    <p className="menu-price-wrapper">
                      {/* <span className="menu-priceSingle">¥790</span> */}
                      <span className="menu-priceSingle">¥880</span>
                    </p>
                  </div>
                  <div className="menu-caption">
                    <p className="menu-name">海の幸セット</p>
                    <p className="menu-price-wrapper">
                      {/* <span className="menu-priceSingle">¥890</span> */}
                      <span className="menu-priceSingle">¥1180</span>
                    </p>
                  </div>
                  <div className="menu-caption">
                    <p className="menu-tax"></p>
                  </div>
                </Row>

                <Row className="menu-wrapper" xs={1} md={1}>
                  <div className="menu-subtitile-wrapper">
                    <p className="menu-subtitile">
                      <strong>セットメニュー</strong>
                    </p>
                  </div>
                  <div className="menu-caption">
                    <p className="menu-subtitle-bg-primary">
                      ファミリーセット（３～４人前）
                    </p>
                  </div>
                  <div className="menu-captionSet">
                    <p className="menu-name">
                      カルビ、ハラミ、あじわいカルビ、ホルモン、トリ、ブタ、ウィンナー、野菜
                    </p>
                    <p className="menu-price-wrapper">
                      {/* <span className="menu-priceSingle">¥3400</span> */}
                      {/* <span className="menu-priceSingle">¥3800</span> */}
                      <span className="menu-priceSingle">¥3980</span>
                    </p>
                  </div>
                  <div className="menu-caption">
                    <p className="menu-subtitle-bg-primary">
                      ペアセット（２人前）
                    </p>
                  </div>
                  <div className="menu-captionSet">
                    <p className="menu-name">
                      カルビ、ハラミ、あじわいカルビ、ホルモン、トリ、ウィンナー、野菜
                    </p>
                    <p className="menu-price-wrapper">
                      {/* <span className="menu-priceSingle">¥2400</span> */}
                      {/* <span className="menu-priceSingle">¥2700</span> */}
                      <span className="menu-priceSingle">¥2980</span>
                    </p>
                  </div>
                  <div className="menu-caption">
                    <p className="menu-subtitle-bg-primary">
                      ホルモンセット（２人前）
                    </p>
                  </div>
                  <div className="menu-captionSet">
                    <p className="menu-name">
                      上ホルモン、よめなかせ、歌声、ホルモン、ギアラ
                    </p>
                    <p className="menu-price-wrapper">
                      {/* <span className="menu-priceSingle">¥1580</span> */}
                      {/* <span className="menu-priceSingle">¥1800</span> */}
                      <span className="menu-priceSingle">¥1980</span>
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
