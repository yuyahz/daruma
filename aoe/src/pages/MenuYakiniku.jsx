import React from "react";
import "../MenuJsx.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import YakinikuDeco from "../assets/YakinikuDeco.svg";

export const Yakiniku = ({ data }) => {
  return (
    <React.Fragment>
      <Container fluid={true}>
        <Row className="MenuTitleSpace">
          <Col>
            <div className="MenuDeco">
              <Image
                className="MenuDecoTitle"
                src={YakinikuDeco}
                alt="Logo"
                fluid
              />
            </div>
          </Col>
        </Row>

        <Row>
          <Col className="MobileTitle">
            <Image
              className="MobileDecoTitle"
              src={YakinikuDeco}
              alt="Logo"
              fluid
            />
          </Col>
        </Row>

        <Row className="MenuSpace">
          <Col md={{ span: 8, offset: 2 }}>
            <Row className="MenuSec" xs={1} md={1}>
              <div className="MenuHdCap">
                <p className="MenuHdTitele">部位</p>
                <p className="MenuHdText">
                  <span className="HdTextSp">通常</span>ハーフ
                </p>
              </div>
              <div className="MenuCap">
                <p className="MenuTitele">カルビ</p>
                <p className="MenuText">
                  <span className="MenuTextSp">¥960</span>¥530
                </p>
              </div>
              <div className="MenuCap">
                <p className="MenuTitele">ハラミ</p>
                <p className="MenuText">
                  <span className="MenuTextSp">¥840</span>¥530
                </p>
              </div>
              <div className="MenuCap">
                <p className="MenuTitele">タン</p>
                <p className="MenuText">
                  <span className="MenuTextSp">¥960</span>¥530
                </p>
              </div>
              <div className="MenuCap">
                <p className="MenuTitele">ネギ塩タン</p>
                <p className="MenuText">
                  <span className="MenuTextSp">¥960</span>¥530
                </p>
              </div>
              <div className="MenuCap">
                <p className="MenuTitele">ロース</p>
                <p className="MenuText">
                  <span className="MenuTextSp">¥1060 </span>¥590
                </p>
              </div>
              <div className="MenuCap">
                <p className="MenuTitele">味わいカルビ（中落ち）</p>
                <p className="MenuText">
                  <span className="MenuTextSp">¥680</span>¥380
                </p>
              </div>
              <div className="MenuCap">
                <p className="MenuTitele">ギアラ（赤セン）</p>
                <p className="MenuText">
                  <span className="MenuTextSp">¥530</span>¥270
                </p>
              </div>
              <div className="MenuCap">
                <p className="MenuTitele">上ミノ</p>
                <p className="MenuText">
                  <span className="MenuTextSp">¥820</span>¥450
                </p>
              </div>
              <div className="MenuCap">
                <p className="MenuTitele">センマイ</p>
                <p className="MenuText">
                  <span className="MenuTextSp">¥580</span>¥300
                </p>
              </div>
              <div className="MenuCap">
                <p className="MenuTitele">上ホルモン</p>
                <p className="MenuText">
                  <span className="MenuTextSp">¥700</span>¥380
                </p>
              </div>
              <div className="MenuCap">
                <p className="MenuTitele">ホルモン</p>
                <p className="MenuText">
                  <span className="MenuTextSp">¥630</span>¥330
                </p>
              </div>
              <div className="MenuCap">
                <p className="MenuTitele">よめなかせ</p>
                <p className="MenuText">
                  <span className="MenuTextSp">¥580</span>¥300
                </p>
              </div>
              <div className="MenuCap">
                <p className="MenuTitele">混合</p>
                <p className="MenuText">
                  <span className="MenuTextSp">¥580</span> ¥300
                </p>
              </div>
              <div className="MenuCap">
                <p className="MenuTitele">レバー</p>
                <p className="MenuText">
                  <span className="MenuTextSp">¥630</span>¥330
                </p>
              </div>
              <div className="MenuCap">
                <p className="MenuTitele">心臓</p>
                <p className="MenuText">
                  <span className="MenuTextSp">¥630</span>¥330
                </p>
              </div>
              <div className="MenuCap">
                <p className="MenuTitele">牛ホホ肉（ツラミ）</p>
                <p className="MenuText">
                  <span className="MenuTextSp">¥580</span>¥300
                </p>
              </div>
              <div className="MenuCap">
                <p className="MenuTitele">骨つきカルビ</p>
                <p className="MenuText">
                  <span className="MenuTextSp">¥1010</span>¥560
                </p>
              </div>
              <div className="MenuCap">
                <p className="MenuTitele">上カルビ</p>
                <p className="MenuText">
                  <span className="MenuTextSp">¥1310</span>¥730
                </p>
              </div>
              <div className="MenuCap">
                <p className="MenuTitele">上タン（10食限定）</p>
                <p className="MenuText">
                  <span className="MenuTextSp">¥1730</span>¥960
                </p>
              </div>
              <div className="MenuCap">
                <p className="MenuTitele">上ロース</p>
                <p className="MenuText">
                  <span className="MenuTextSp">¥1730</span>¥960
                </p>
              </div>
              <div className="MenuCap">
                <p className="MenuTax"></p>
              </div>
            </Row>

            <Row className="MenuSec" xs={1} md={1}>
              <div className="MenuHdSec">
                <div className="MenuHdCap">
                  <p className="MenuHdTitele">部位</p>
                  <p className="MenuHdText">
                    <span className="HdTextSp">通常</span>ハーフ
                  </p>
                </div>
              </div>
              <div className="MenuCap">
                <p className="MenuTitele">豚トロ</p>
                <p className="MenuText">
                  <span className="MenuTextSp">¥550</span>¥300
                </p>
              </div>
              <div className="MenuCap">
                <p className="MenuTitele">豚肉（つらみ）</p>
                <p className="MenuText">
                  <span className="MenuTextSp">¥550</span>¥300
                </p>
              </div>
              <div className="MenuCap">
                <p className="MenuTitele">豚ロース</p>
                <p className="MenuText">
                  <span className="MenuTextSp">¥600</span>¥330
                </p>
              </div>
              <div className="MenuCap">
                <p className="MenuTitele">豚バラ</p>
                <p className="MenuText">
                  <span className="MenuTextSp">¥600</span>¥330
                </p>
              </div>
              <div className="MenuCap">
                <p className="MenuTitele">歌声（タレ・辛ダレ）※豚の軟骨</p>
                <p className="MenuText">
                  <span className="MenuTextSp">¥500</span>¥270
                </p>
              </div>
              <div className="MenuCap">
                <p className="MenuTax"></p>
              </div>
            </Row>

            <Row className="MenuSec" xs={1} md={1}>
              <div className="MenuHdSec">
                <div className="MenuHdCap">
                  <p className="MenuHdTitele">部位</p>
                  <p className="MenuHdText">
                    <span className="HdTextSp">通常</span>ハーフ
                  </p>
                </div>
              </div>
              <div className="MenuCap">
                <p className="MenuTitele">若ドリ</p>
                <p className="MenuText">
                  <span className="MenuTextSp">¥600</span>¥330
                </p>
              </div>
              <div className="MenuCap">
                <p className="MenuTitele">鶏のせせり</p>
                <p className="MenuText">
                  <span className="MenuTextSp">¥600</span>¥330
                </p>
              </div>
              <div className="MenuCap">
                <p className="MenuTitele">あらびきウィンナー</p>
                <p className="MenuText">
                  <span className="MenuTextSpSingle">¥530</span>
                </p>
              </div>
              <div className="MenuCap">
                <p className="MenuTitele">厚切りベーコン</p>
                <p className="MenuText">
                  <span className="MenuTextSpSingle">¥550</span>
                </p>
              </div>
              <div className="MenuCap">
                <p className="MenuTax"></p>
              </div>
            </Row>

            <Row className="MenuSec" xs={1} md={1}>
              <div className="MenuHdSec">
                <div className="MenuHdCap">
                  <p className="MenuHdTitele">部位</p>
                  <p className="MenuHdText">
                    <span className="HdTextSp">通常</span>ハーフ
                  </p>
                </div>
              </div>
              <div className="MenuCap">
                <p className="MenuTitele">イカ</p>
                <p className="MenuText">
                  <span className="MenuTextSpSingle">¥680</span>
                </p>
              </div>
              <div className="MenuCap">
                <p className="MenuTitele">エビ</p>
                <p className="MenuText">
                  <span className="MenuTextSpSingle">¥790</span>
                </p>
              </div>
              <div className="MenuCap">
                <p className="MenuTitele">貝柱</p>
                <p className="MenuText">
                  <span className="MenuTextSpSingle">¥790</span>
                </p>
              </div>
              <div className="MenuCap">
                <p className="MenuTitele">海の幸セット</p>
                <p className="MenuText">
                  <span className="MenuTextSpSingle">¥890</span>
                </p>
              </div>
              <div className="MenuCap">
                <p className="MenuTax"></p>
              </div>
            </Row>

            <Row className="MenuSec" xs={1} md={1}>
              <div className="MenuHdSec">
                <div className="MenuHdCap">
                  <p className="MenuHdTitele">内容</p>
                </div>
              </div>
              <div className="MenuCap">
                <p className={"MenuTitle" + " " + "MenuTitleBg"}>
                  ファミリーセット（３～４人前）
                </p>
              </div>
              <div className="MenuCapSet">
                <p className="MenuTitele">
                  カルビ、ハラミ、あじわいカルビ、ホルモン、トリ、ブタ、ウィンナー、野菜
                </p>
                <p className="MenuText">
                  <span className="MenuTextSpSingle">¥3400</span>
                </p>
              </div>
              <div className="MenuCap">
                <p className={"MenuTitle" + " " + "MenuTitleBg"}>
                  ペアセット（２人前）
                </p>
              </div>
              <div className="MenuCapSet">
                <p className="MenuTitele">
                  カルビ、ハラミ、あじわいカルビ、ホルモン、トリ、ウィンナー、野菜
                </p>
                <p className="MenuText">
                  <span className="MenuTextSpSingle">¥2400</span>
                </p>
              </div>
              <div className="MenuCap">
                <p className={"MenuTitle" + " " + "MenuTitleBg"}>
                  ホルモンセット（２人前）
                </p>
              </div>
              <div className="MenuCapSet">
                <p className="MenuTitele">
                  上ホルモン、よめなかせ、歌声、ホルモン、ギアラ
                </p>
                <p className="MenuText">
                  <span className="MenuTextSpSingle">¥1580</span>
                </p>
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
};
