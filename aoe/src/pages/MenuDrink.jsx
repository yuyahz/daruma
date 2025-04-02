import React from "react";
import "../MenuJsx.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import DrinkDeco from "../assets/DrinkDeco.svg";

export const Drink = ({ data }) => {
  return (
    <React.Fragment>
      <div className="restrict-width bottom-space">
        <Container fluid={true}>
          <Row>
            <Col className="MenuTitleImgContainer">
              <Image
                className="MenuTitleImg"
                src={DrinkDeco}
                alt="Logo"
                fluid
              />
            </Col>
          </Row>

          <Row>
            <Col md={{ span: 8, offset: 2 }}>
              <Row className="MenuWrapper mb-5" xs={1} md={1}>
                <div className="MenuCaption">
                  <p className={"MenuTitle" + " " + "MenuTitleBg"}>ビール</p>
                  <p className="MenuTitele">生ビール / 小ジョッキ (キリン) </p>
                  <p className="MenuText">
                    {/* <span className="MenuTextSp"></span>¥530 */}
                    {/* <span className="MenuTextSp"></span>¥580 */}
                    <span className="MenuTextSp"></span>¥630
                  </p>
                </div>
                <div className="MenuCaption">
                  <p className="MenuTitele">生ビール / 中ジョッキ (キリン) </p>
                  <p className="MenuText">
                    {/* <span className="MenuTextSp"></span>¥580 */}
                    {/* <span className="MenuTextSp"></span>¥630 */}
                    <span className="MenuTextSp"></span>¥680
                  </p>
                </div>
                <div className="MenuCaption">
                  <p className="MenuTitele">ビール / 中瓶 (キリンorアサヒ) </p>
                  <p className="MenuText">
                    {/* <span className="MenuTextSp"></span>¥530 */}
                    {/* <span className="MenuTextSp"></span>¥580 */}
                    <span className="MenuTextSp"></span>¥600
                  </p>
                </div>
                <div className="MenuCaption">
                  <p className="MenuTitele">ノンアルコールビール</p>
                  <p className="MenuText">
                    {/* <span className="MenuTextSp"></span>¥420 */}
                    {/* <span className="MenuTextSp"></span>¥460 */}
                    <span className="MenuTextSp"></span>¥500
                  </p>
                </div>
                <div className="MenuCaption">
                  <p className="MenuTax"></p>
                </div>
              </Row>

              <Row className="MenuWrapper mb-5" xs={1} md={1}>
                <div className="MenuCaption">
                  <p className={"MenuTitle" + " " + "MenuTitleBg"}>
                    お酒　/　焼酎　/　その他
                  </p>
                  <p className="MenuTitele">お酒</p>
                  <p className="MenuText">
                    {/* <span className="MenuTextSp"> (1合) ¥320</span> (2合) ¥630 */}
                    <span className="MenuTextSp"> (1合) ¥350</span> (2合) ¥690
                  </p>
                </div>
                <div className="MenuCaption">
                  <p className="MenuTitele">生冷酒</p>
                  <p className="MenuText">
                    {/* <span className="MenuTextSp"></span>¥630 */}
                    {/* <span className="MenuTextSp"></span>¥690 */}
                    <span className="MenuTextSp"></span>¥730
                  </p>
                </div>
                <div className="MenuCaption">
                  <p className="MenuTitele">梅酒</p>
                  <p className="MenuText">
                    {/* <span className="MenuTextSp"></span>¥420 */}
                    {/* <span className="MenuTextSp"></span>¥460 */}
                    <span className="MenuTextSp"></span>¥500
                  </p>
                </div>
                <div className="MenuCaption">
                  <p className="MenuTitele">梅酒ソーダ</p>
                  <p className="MenuText">
                    {/* <span className="MenuTextSp"></span>¥530 */}
                    <span className="MenuTextSp"></span>¥580
                  </p>
                </div>
                <div className="MenuCaption">
                  <p className="MenuTitele">麦 / 二階堂</p>
                  <p className="MenuText">
                    {/* <span className="MenuTextSp"></span>¥530 */}
                    {/* <span className="MenuTextSp"></span>¥580 */}
                    <span className="MenuTextSp"></span>¥600
                  </p>
                </div>
                <div className="MenuCaption">
                  <p className="MenuTitele">麦 / 二階堂 (吉四六) </p>
                  <p className="MenuText">
                    {/* <span className="MenuTextSp"></span>¥630 */}
                    <span className="MenuTextSp"></span>¥690
                  </p>
                </div>
                <div className="MenuCaption">
                  {/* <p className="MenuTitele">芋 / 達磨だるま</p> */}
                  <p className="MenuTitele">芋</p>
                  <p className="MenuText">
                    {/* <span className="MenuTextSp"></span>¥630 */}
                    <span className="MenuTextSp"></span>¥690
                  </p>
                </div>
                <div className="MenuCaption">
                  <p className="MenuTitele">米 / 粋すい</p>
                  <p className="MenuText">
                    {/* <span className="MenuTextSp"></span>¥630 */}
                    <span className="MenuTextSp"></span>¥690
                  </p>
                </div>
                <div className="MenuCaption">
                  <p className="MenuTitele">泡盛 / 八重泉やえせん (古酒) </p>
                  <p className="MenuText">
                    {/* <span className="MenuTextSp"></span>¥650 */}
                    {/* <span className="MenuTextSp"></span>¥710 */}
                    <span className="MenuTextSp"></span>¥730
                  </p>
                </div>
                <div className="MenuCaption">
                  <p className="MenuTitele">韓国焼酎</p>
                  <p className="MenuText">
                    {/* <span className="MenuTextSp"> (1杯) ¥320</span> (1本) ¥840 */}
                    <span className="MenuTextSp"> (1杯) ¥350</span> (1本) ¥1000
                  </p>
                </div>
                <div className="MenuCaption">
                  <p className="MenuTitele">高麗人参焼酎</p>
                  <p className="MenuText">
                    {/* <span className="MenuTextSp"></span> (1杯) ¥840 */}
                    <span className="MenuTextSp"></span> (1杯) ¥920
                  </p>
                </div>
                <div className="MenuCaption">
                  <p className="MenuTitele">マッコリ (米) </p>
                  <p className="MenuText">
                    {/* <span className="MenuTextSp"> (1杯) ¥320</span> (1瓶) ¥1050 */}
                    {/* <span className="MenuTextSp"> (1杯) ¥350</span> (1瓶) ¥1150 */}
                    <span className="MenuTextSp"> (1杯) ¥380</span> (1瓶) ¥1200
                  </p>
                </div>
                <div className="MenuCaption">
                  <p className="MenuTax"></p>
                </div>
              </Row>

              <Row className="MenuWrapper mb-5" xs={1} md={1}>
                <div className="MenuCaption">
                  <p className={"MenuTitle" + " " + "MenuTitleBg"}>
                    チューハイ
                  </p>
                  <p className="MenuTitele">
                    レモン / ライム / グレープフルーツ / カシス / カルピス /
                    ライチ / ゆず / シークァーサー / 巨峰
                  </p>
                  <p className="MenuText">
                    {/* <span className="MenuTextSp"></span>ALL ¥420 */}
                    {/* <span className="MenuTextSp"></span>ALL ¥460 */}
                    <span className="MenuTextSp"></span>ALL ¥500
                  </p>
                </div>
                <div className="MenuCaption">
                  <p className="MenuTax"></p>
                </div>
              </Row>

              <Row className="MenuWrapper" xs={1} md={1}>
                <div className="MenuCaption">
                  <p className={"MenuTitle" + " " + "MenuTitleBg"}>ワイン</p>
                  <p className="MenuTitele">ハーフボトル (赤・白・ロゼ) </p>
                  <p className="MenuText">
                    {/* <span className="MenuTextSp"></span>¥1050 */}
                    <span className="MenuTextSp"></span>¥1150
                  </p>
                </div>
                <div className="MenuCaption">
                  <p className="MenuTitele">グラスワイン</p>
                  <p className="MenuText">
                    {/* <span className="MenuTextSp"></span>¥420 */}
                    <span className="MenuTextSp"></span>¥460
                  </p>
                </div>
                <div className="MenuCaption">
                  <p className="MenuTax"></p>
                </div>
              </Row>

              <Row className="MenuWrapper" xs={1} md={1}>
                <div className="MenuCaption">
                  <p className={"MenuTitle" + " " + "MenuTitleBg"}>
                    ウィスキー
                  </p>
                  <p className="MenuTitele">ウィスキー</p>
                  <p className="MenuText">
                    {/* <span className="MenuTextSp"></span>¥740 */}
                    {/* <span className="MenuTextSp"></span>¥470 */}
                    <span className="MenuTextSp"></span>¥520
                  </p>
                </div>
                {/* <div className="MenuCaption">
                <p className="MenuTitele">ブランデー</p>
                <p className="MenuText">
                  <span className="MenuTextSp"></span>¥740
                  <span className="MenuTextSp"></span>¥520
                </p>
              </div> */}
                <div className="MenuCaption">
                  <p className="MenuTitele">ハイボール</p>
                  <p className="MenuText">
                    {/* <span className="MenuTextSp"></span>¥430 */}
                    {/* <span className="MenuTextSp"></span>¥470 */}
                    <span className="MenuTextSp"></span>¥520
                  </p>
                </div>
                <div className="MenuCaption">
                  <p className="MenuTitele">コークハイ</p>
                  <p className="MenuText">
                    {/* <span className="MenuTextSp"></span>¥480 */}
                    {/* <span className="MenuTextSp"></span>¥520 */}
                    <span className="MenuTextSp"></span>¥570
                  </p>
                </div>
                <div className="MenuCaption">
                  <p className="MenuTitele">ジンジャーハイ</p>
                  <p className="MenuText">
                    {/* <span className="MenuTextSp"></span>¥480 */}
                    {/* <span className="MenuTextSp"></span>¥520 */}
                    <span className="MenuTextSp"></span>¥570
                  </p>
                </div>
                <div className="MenuCaption">
                  <p className="MenuTax"></p>
                </div>
              </Row>

              <Row className="MenuWrapper mb-5" xs={1} md={1}>
                <div className="MenuCaption">
                  <p className={"MenuTitle" + " " + "MenuTitleBg"}>
                    ソフトドリンク
                  </p>
                  <p className="MenuTitele">
                    ウーロン茶 / コーラ / オレンジジュース / キリンレモン /
                    カルピス / ジンジャエール
                  </p>
                  <p className="MenuText">
                    {/* <span className="MenuTextSp"></span>ALL¥220 */}
                    {/* <span className="MenuTextSp"></span>ALL¥240 */}
                    <span className="MenuTextSp"></span>ALL¥280
                  </p>
                </div>
                <div className="MenuCaption">
                  <p className="MenuTitele">黒ウーロン茶</p>
                  <p className="MenuText">
                    {/* <span className="MenuTextSp"></span>¥330 */}
                    {/* <span className="MenuTextSp"></span>¥360 */}
                    <span className="MenuTextSp"></span>ALL¥400
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
