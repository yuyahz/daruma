import React from "react";
import "../MenuJsx.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import YakinikuDeco from "../assets/YakinikuDeco.svg";

export const Yakiniku = ({ data }) => {
  return (
    <React.Fragment>
      <div className="restrict-width bottom-space">
        <Container fluid={true}>
          <Row d-flex justify-content-center>
            <Col className="MenuTitleImgContainer">
              <Image
                className="MenuTitleImg"
                src={YakinikuDeco}
                alt="Logo"
                fluid
              />
            </Col>
          </Row>

          <Row>
            <Col md={{ span: 8, offset: 2 }}>
              <Row className="MenuWrapper" xs={1} md={1}>
                <div className="MenuSubtitleWrapper">
                  <p className="MenuSubtitle">
                    <strong>牛肉</strong>
                  </p>
                  <p className="MenuSubtitileRightWrapper">
                    <span className="MenuSubtitileRight">
                      <strong>通常</strong>
                    </span>
                    <strong>ハーフ</strong>
                  </p>
                </div>
                <div className="MenuCaption">
                  <p className="MenuTitele">カルビ</p>
                  <p className="MenuText">
                    {/* <span className="MenuTextSp">¥960</span>¥530 */}
                    {/* <span className="MenuTextSp">¥980</span>¥540 */}
                    <span className="MenuTextSp">¥1180</span>¥700
                  </p>
                </div>
                <div className="MenuCaption">
                  <p className="MenuTitele">ハラミ</p>
                  <p className="MenuText">
                    {/* <span className="MenuTextSp">¥840</span>¥530 */}
                    {/* <span className="MenuTextSp">¥880</span>¥490 */}
                    <span className="MenuTextSp">¥980</span>¥580
                  </p>
                </div>
                <div className="MenuCaption">
                  <p className="MenuTitele">タン</p>
                  <p className="MenuText">
                    {/* <span className="MenuTextSp">¥960</span>¥530 */}
                    {/* <span className="MenuTextSp">¥980</span>¥540 */}
                    <span className="MenuTextSp">¥1180</span>¥700
                  </p>
                </div>
                <div className="MenuCaption">
                  <p className="MenuTitele">ネギ塩タン</p>
                  <p className="MenuText">
                    {/* <span className="MenuTextSp">¥960</span>¥530 */}
                    {/* <span className="MenuTextSp">¥980</span>¥540 */}
                    <span className="MenuTextSp">¥1280</span>¥760
                  </p>
                </div>
                <div className="MenuCaption">
                  <p className="MenuTitele">ロース</p>
                  <p className="MenuText">
                    {/* <span className="MenuTextSp">¥1060 </span>¥590 */}
                    {/* <span className="MenuTextSp">¥1150 </span>¥640 */}
                    <span className="MenuTextSp">¥1280</span>¥760
                  </p>
                </div>
                <div className="MenuCaption">
                  <p className="MenuTitele">味わいカルビ（中落ち）</p>
                  <p className="MenuText">
                    {/* <span className="MenuTextSp">¥680</span>¥380 */}
                    {/* <span className="MenuTextSp">¥740</span>¥410 */}
                    <span className="MenuTextSp">¥880</span>¥520
                  </p>
                </div>
                <div className="MenuCaption">
                  <p className="MenuTitele">ギアラ（赤セン）</p>
                  <p className="MenuText">
                    {/* <span className="MenuTextSp">¥530</span>¥270 */}
                    {/* <span className="MenuTextSp">¥630</span>¥350 */}
                    <span className="MenuTextSp">¥680</span>¥400
                  </p>
                </div>
                <div className="MenuCaption">
                  <p className="MenuTitele">上ミノ</p>
                  <p className="MenuText">
                    {/* <span className="MenuTextSp">¥820</span>¥450 */}
                    {/* <span className="MenuTextSp">¥860</span>¥480 */}
                    <span className="MenuTextSp">¥980</span>¥580
                  </p>
                </div>
                <div className="MenuCaption">
                  <p className="MenuTitele">センマイ</p>
                  <p className="MenuText">
                    {/* <span className="MenuTextSp">¥580</span>¥300 */}
                    {/* <span className="MenuTextSp">¥630</span>¥350 */}
                    <span className="MenuTextSp">¥680</span>¥400
                  </p>
                </div>
                <div className="MenuCaption">
                  <p className="MenuTitele">上ホルモン</p>
                  <p className="MenuText">
                    {/* <span className="MenuTextSp">¥700</span>¥380 */}
                    {/* <span className="MenuTextSp">¥780</span>¥430 */}
                    <span className="MenuTextSp">¥880</span>¥520
                  </p>
                </div>
                <div className="MenuCaption">
                  <p className="MenuTitele">ホルモン</p>
                  <p className="MenuText">
                    {/* <span className="MenuTextSp">¥630</span>¥330 */}
                    {/* <span className="MenuTextSp">¥680</span>¥380 */}
                    <span className="MenuTextSp">¥780</span>¥460
                  </p>
                </div>
                <div className="MenuCaption">
                  <p className="MenuTitele">よめなかせ</p>
                  <p className="MenuText">
                    {/* <span className="MenuTextSp">580</span>¥300 */}
                    {/* <span className="MenuTextSp">¥630</span>¥350 */}
                    <span className="MenuTextSp">¥780</span>¥460
                  </p>
                </div>
                <div className="MenuCaption">
                  <p className="MenuTitele">混合</p>
                  <p className="MenuText">
                    {/* <span className="MenuTextSp">¥580</span> ¥300 */}
                    {/* <span className="MenuTextSp">¥630</span> ¥350 */}
                    <span className="MenuTextSp">¥780</span>¥460
                  </p>
                </div>
                <div className="MenuCaption">
                  <p className="MenuTitele">レバー</p>
                  <p className="MenuText">
                    {/* <span className="MenuTextSp">¥630</span>¥330 */}
                    {/* <span className="MenuTextSp">¥680</span>¥380 */}
                    <span className="MenuTextSp">¥780</span>¥460
                  </p>
                </div>
                <div className="MenuCaption">
                  <p className="MenuTitele">心臓</p>
                  <p className="MenuText">
                    {/* <span className="MenuTextSp">¥630</span>¥330 */}
                    {/* <span className="MenuTextSp">¥680</span>¥380 */}
                    <span className="MenuTextSp">¥780</span>¥460
                  </p>
                </div>
                <div className="MenuCaption">
                  <p className="MenuTitele">牛ホホ肉（ツラミ）</p>
                  <p className="MenuText">
                    {/* <span className="MenuTextSp">¥580</span>¥330 */}
                    {/* <span className="MenuTextSp">¥630</span>¥350 */}
                    <span className="MenuTextSp">¥780</span>¥460
                  </p>
                </div>
                <div className="MenuCaption">
                  <p className="MenuTitele">骨つきカルビ</p>
                  <p className="MenuText">
                    {/* <span className="MenuTextSp">¥1010</span>¥560 */}
                    {/* <span className="MenuTextSp">¥1150</span>¥640 */}
                    <span className="MenuTextSp">¥1250</span>¥750
                  </p>
                </div>
                <div className="MenuCaption">
                  <p className="MenuTitele">上カルビ</p>
                  <p className="MenuText">
                    {/* <span className="MenuTextSp">¥1310</span>¥730 */}
                    {/* <span className="MenuTextSp">¥1440</span>¥800 */}
                    <span className="MenuTextSp">¥1540</span>¥920
                  </p>
                </div>
                <div className="MenuCaption">
                  <p className="MenuTitele">上タン（10食限定）</p>
                  <p className="MenuText">
                    {/* <span className="MenuTextSp">¥1730</span>¥960 */}
                    {/* <span className="MenuTextSp">¥1900</span>¥1060 */}
                    <span className="MenuTextSp">¥1980</span>¥1180
                  </p>
                </div>
                <div className="MenuCaption">
                  <p className="MenuTitele">上ロース</p>
                  <p className="MenuText">
                    {/* <span className="MenuTextSp">¥1730</span>¥960 */}
                    {/* <span className="MenuTextSp">¥1900</span>¥1060 */}
                    <span className="MenuTextSp">¥1980</span>¥1180
                  </p>
                </div>
                <div className="MenuCaption">
                  <p className="MenuTax"></p>
                </div>
              </Row>

              <Row className="MenuWrapper" xs={1} md={1}>
                <div className="MenuSubtitleWrapper">
                  <p className="MenuSubtitle">
                    <strong>豚肉</strong>
                  </p>
                  <p className="MenuSubtitileRightWrapper">
                    <span className="MenuSubtitileRight">
                      <strong>通常</strong>
                    </span>
                    <strong>ハーフ</strong>
                  </p>
                </div>
                <div className="MenuCaption">
                  <p className="MenuTitele">豚トロ</p>
                  <p className="MenuText">
                    {/* <span className="MenuTextSp">¥580</span>¥320 */}
                    {/* <span className="MenuTextSp">¥550</span>¥300 */}
                    <span className="MenuTextSp">¥680</span>¥400
                  </p>
                </div>
                <div className="MenuCaption">
                  <p className="MenuTitele">豚肉（つらみ）</p>
                  <p className="MenuText">
                    {/* <span className="MenuTextSp">¥550</span>¥300 */}
                    {/* <span className="MenuTextSp">¥580</span>¥320 */}
                    <span className="MenuTextSp">¥680</span>¥400
                  </p>
                </div>
                <div className="MenuCaption">
                  <p className="MenuTitele">豚ロース</p>
                  <p className="MenuText">
                    {/* <span className="MenuTextSp">¥600</span>¥330 */}
                    {/* <span className="MenuTextSp">¥650</span>¥360 */}
                    <span className="MenuTextSp">¥750</span>¥450
                  </p>
                </div>
                <div className="MenuCaption">
                  <p className="MenuTitele">豚バラ</p>
                  <p className="MenuText">
                    {/* <span className="MenuTextSp">¥600</span>¥330 */}
                    {/* <span className="MenuTextSp">¥650</span>¥360 */}
                    <span className="MenuTextSp">¥750</span>¥450
                  </p>
                </div>
                <div className="MenuCaption">
                  <p className="MenuTitele">歌声（タレ・辛ダレ）※豚の軟骨</p>
                  <p className="MenuText">
                    {/* <span className="MenuTextSp">¥500</span>¥270 */}
                    <span className="MenuTextSp">¥650</span>¥390
                  </p>
                </div>
                <div className="MenuCaption">
                  <p className="MenuTax"></p>
                </div>
              </Row>

              <Row className="MenuWrapper" xs={1} md={1}>
                <div className="MenuSubtitleWrapper">
                  <p className="MenuSubtitle">
                    <strong>鶏肉</strong>
                  </p>
                  <p className="MenuSubtitileRightWrapper">
                    <span className="MenuSubtitileRight">
                      <strong>通常</strong>
                    </span>
                    <strong>ハーフ</strong>
                  </p>
                </div>
                <div className="MenuCaption">
                  <p className="MenuTitele">若ドリ</p>
                  <p className="MenuText">
                    {/* <span className="MenuTextSp">¥600</span>¥330 */}
                    {/* <span className="MenuTextSp">¥580</span>¥320 */}
                    <span className="MenuTextSp">¥630</span>¥370
                  </p>
                </div>
                <div className="MenuCaption">
                  <p className="MenuTitele">鶏のせせり</p>
                  <p className="MenuText">
                    {/* <span className="MenuTextSp">¥600</span>¥330 */}
                    <span className="MenuTextSp">¥630</span>¥370
                  </p>
                </div>
                <div className="MenuCaption">
                  <p className="MenuTitele">あらびきウィンナー</p>
                  <p className="MenuText">
                    {/* <span className="MenuTextSpSingle">¥530</span> */}
                    <span className="MenuTextSpSingle">¥580</span>
                  </p>
                </div>
                <div className="MenuCaption">
                  <p className="MenuTitele">厚切りベーコン</p>
                  <p className="MenuText">
                    {/* <span className="MenuTextSpSingle">¥550</span> */}
                    <span className="MenuTextSpSingle">¥630</span>
                  </p>
                </div>
                <div className="MenuCaption">
                  <p className="MenuTax"></p>
                </div>
              </Row>

              <Row className="MenuWrapper" xs={1} md={1}>
                <div className="MenuSubtitleWrapper">
                  <p className="MenuSubtitle">
                    <strong>海鮮</strong>
                  </p>
                  <p className="MenuSubtitileRightWrapper">
                    <span className="MenuSubtitileRight">
                      <strong>通常</strong>
                    </span>
                    <strong>ハーフ</strong>
                  </p>
                </div>
                <div className="MenuCaption">
                  <p className="MenuTitele">イカ</p>
                  <p className="MenuText">
                    {/* <span className="MenuTextSpSingle">¥680</span> */}
                    <span className="MenuTextSpSingle">¥780</span>
                  </p>
                </div>
                <div className="MenuCaption">
                  <p className="MenuTitele">エビ</p>
                  <p className="MenuText">
                    {/* <span className="MenuTextSpSingle">¥790</span> */}
                    <span className="MenuTextSpSingle">¥880</span>
                  </p>
                </div>
                <div className="MenuCaption">
                  <p className="MenuTitele">貝柱</p>
                  <p className="MenuText">
                    {/* <span className="MenuTextSpSingle">¥790</span> */}
                    <span className="MenuTextSpSingle">¥880</span>
                  </p>
                </div>
                <div className="MenuCaption">
                  <p className="MenuTitele">海の幸セット</p>
                  <p className="MenuText">
                    {/* <span className="MenuTextSpSingle">¥890</span> */}
                    <span className="MenuTextSpSingle">¥1180</span>
                  </p>
                </div>
                <div className="MenuCaption">
                  <p className="MenuTax"></p>
                </div>
              </Row>

              <Row className="MenuWrapper" xs={1} md={1}>
                <div className="MenuSubtitleWrapper">
                  <p className="MenuSubtitle">
                    <strong>セットメニュー</strong>
                  </p>
                </div>
                <div className="MenuCaption">
                  <p className={"MenuTitle" + " " + "MenuTitleBg"}>
                    ファミリーセット（３～４人前）
                  </p>
                </div>
                <div className="MenuCaptionSet">
                  <p className="MenuTitele">
                    カルビ、ハラミ、あじわいカルビ、ホルモン、トリ、ブタ、ウィンナー、野菜
                  </p>
                  <p className="MenuText">
                    {/* <span className="MenuTextSpSingle">¥3400</span> */}
                    {/* <span className="MenuTextSpSingle">¥3800</span> */}
                    <span className="MenuTextSpSingle">¥3980</span>
                  </p>
                </div>
                <div className="MenuCaption">
                  <p className={"MenuTitle" + " " + "MenuTitleBg"}>
                    ペアセット（２人前）
                  </p>
                </div>
                <div className="MenuCaptionSet">
                  <p className="MenuTitele">
                    カルビ、ハラミ、あじわいカルビ、ホルモン、トリ、ウィンナー、野菜
                  </p>
                  <p className="MenuText">
                    {/* <span className="MenuTextSpSingle">¥2400</span> */}
                    {/* <span className="MenuTextSpSingle">¥2700</span> */}
                    <span className="MenuTextSpSingle">¥2980</span>
                  </p>
                </div>
                <div className="MenuCaption">
                  <p className={"MenuTitle" + " " + "MenuTitleBg"}>
                    ホルモンセット（２人前）
                  </p>
                </div>
                <div className="MenuCaptionSet">
                  <p className="MenuTitele">
                    上ホルモン、よめなかせ、歌声、ホルモン、ギアラ
                  </p>
                  <p className="MenuText">
                    {/* <span className="MenuTextSpSingle">¥1580</span> */}
                    {/* <span className="MenuTextSpSingle">¥1800</span> */}
                    <span className="MenuTextSpSingle">¥1980</span>
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
