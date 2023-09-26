import React from "react";
import "../MenuJsx.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import LunchDeco from "../assets/LunchDeco.svg";

export const Lunch = ({ data }) => {
  return (
    <React.Fragment>
      <div className="restrict-width">
        <Container fluid={true}>
          {/* <Row className="MenuTitleSpace">
          <Col>
            <div className="MenuDeco">
              <Image
                className="MenuDecoTitle"
                src={LunchDeco}
                alt="Logo"
                fluid
              />
            </div>
          </Col>
        </Row> */}

          <Row>
            <Col className="MenuTitle">
              <Image className="AssetTitle" src={LunchDeco} alt="Logo" fluid />
            </Col>
          </Row>

          <Row className="MenuSpace">
            <Col md={{ span: 8, offset: 2 }}>
              <Row xs={1} md={1}>
                <Col className="MenuLunchTitle">
                  <h3 className="MenuLunchText">
                    ランチメニューは、11:00～14:00　平日のみ実施中！
                  </h3>
                </Col>
              </Row>

              <Row className="MenuSec" xs={1} md={1}>
                <div className="MenuCap">
                  <p className={"MenuTitle" + " " + "MenuTitleBg"}>
                    焼肉セレクトランチ
                  </p>
                </div>
                <div className="MenuCapSet">
                  <p className="MenuTitele">
                    好きなお肉をセレクト!!{" "}
                    <span className="MenuSmText">
                      ※焼きしゃぶロースは必須となります。
                    </span>
                  </p>
                </div>
                <div className="MenuCapSet">
                  <p className="MenuTitele">
                    焼きしゃぶロース以外のその他のお肉は以下のメニューより２品お選び下さい。
                  </p>
                </div>
                <div className="MenuCapSet">
                  <p className="MenuTitele">
                    ハラミ、上ホルモン、ホルモン、レバー、ブタ、ブタバラ、トリ、セセリ、ウィンナー（3本）、
                    センマイ、ブタロース、よめなかせ、心臓、ギアラ
                  </p>
                </div>
                <div className="MenuCapSet">
                  <p className="MenuTitele">
                    ※お肉とは別に下記のメニュー付きです
                  </p>
                </div>
                <div className="MenuCapSet">
                  <p className="MenuTitele">
                    本日の一品、キムチ、サラダ、ライス、スープ（小）、デザート
                  </p>
                </div>
                <div className="MenuCapSet">
                  <p className="MenuTitele"></p>
                  <p className="MenuText">
                    {/* <span className="MenuTextSpSingle"></span>¥1180 */}
                    <span className="MenuTextSpSingle"></span>¥1290
                  </p>
                </div>
                <div className="MenuCap">
                  <p className={"MenuTitle" + " " + "MenuTitleBg"}>
                    ホルモンうどんランチ
                  </p>
                </div>
                <div className="MenuCapSet">
                  <p className="MenuTitele">
                    本日の一品、キムチ、サラダ、ライス、デザート
                  </p>
                  <p className="MenuText">
                    {/* <span className="MenuTextSpSingle"></span>¥880 */}
                    <span className="MenuTextSpSingle"></span>¥960
                  </p>
                </div>
                <div className="MenuCap">
                  <p className={"MenuTitle" + " " + "MenuTitleBg"}>
                    石焼ビビンバランチ
                  </p>
                </div>
                <div className="MenuCapSet">
                  <p className="MenuTitele">
                    本日の一品、キムチ、サラダ、スープ（小）、デザート
                  </p>
                  <p className="MenuText">
                    {/* <span className="MenuTextSpSingle"></span>¥1150 */}
                    <span className="MenuTextSpSingle"></span>¥1260
                  </p>
                </div>
                <div className="MenuCap">
                  <p className={"MenuTitle" + " " + "MenuTitleBg"}>
                    韓国ラーメンランチ
                  </p>
                </div>
                <div className="MenuCapSet">
                  <p className="MenuTitele">
                    本日の一品、キムチ、サラダ、ライス、デザート
                  </p>
                  <p className="MenuText">
                    {/* <span className="MenuTextSpSingle"></span>¥880 */}
                    <span className="MenuTextSpSingle"></span>¥960
                  </p>
                </div>
                <div className="MenuCap">
                  <p className={"MenuTitle" + " " + "MenuTitleBg"}>
                    豆腐チゲランチ
                  </p>
                </div>
                <div className="MenuCapSet">
                  <p className="MenuTitele">
                    本日の一品、キムチ、サラダ、ライス、デザート
                  </p>
                  <p className="MenuText">
                    {/* <span className="MenuTextSpSingle"></span>¥880 */}
                    <span className="MenuTextSpSingle"></span>¥960
                  </p>
                </div>
                <div className="MenuCap">
                  <p className={"MenuTitle" + " " + "MenuTitleBg"}>
                    カムジャタンランチ{" "}
                    <span className="MenuSmText">
                      （韓国風　豚スベアリブとじゃがいもの辛口チゲ）
                    </span>
                  </p>
                </div>
                <div className="MenuCapSet">
                  <p className="MenuTitele">
                    本日の一品、キムチ、サラダ、ライス、デザート
                  </p>
                  <p className="MenuText">
                    {/* <span className="MenuTextSpSingle"></span>¥1080 */}
                    <span className="MenuTextSpSingle"></span>¥1180
                  </p>
                </div>
                <div className="MenuCap">
                  <p className={"MenuTitle" + " " + "MenuTitleBg"}>
                    プゴクスープランチ{" "}
                    <span className="MenuSmText">
                      （干しダラの旨み、たっぷり野菜のスープ）
                    </span>
                  </p>
                </div>
                <div className="MenuCapSet">
                  <p className="MenuTitele">
                    ビビンバ（小）、本日の一品、キムチ、サラダ、デザート
                  </p>
                  <p className="MenuText">
                    {/* <span className="MenuTextSpSingle"></span>¥1150 */}
                    <span className="MenuTextSpSingle"></span>¥1260
                  </p>
                </div>
                <div className="MenuCap">
                  <p className={"MenuTitle" + " " + "MenuTitleBg"}>
                    にんにくチャーハンランチ
                  </p>
                </div>
                <div className="MenuCapSet">
                  <p className="MenuTitele">
                    本日の一品、キムチ、サラダ、スープ（小）、デザート
                  </p>
                  <p className="MenuText">
                    {/* <span className="MenuTextSpSingle"></span>¥780 */}
                    <span className="MenuTextSpSingle"></span>¥850
                  </p>
                </div>
                <div className="MenuCap">
                  <p className={"MenuTitle" + " " + "MenuTitleBg"}>
                    和牛すじ煮込み汁ランチ
                  </p>
                </div>
                <div className="MenuCapSet">
                  <p className="MenuTitele">
                    本日の一品、キムチ、サラダ、ライス、デザート
                  </p>
                  <p className="MenuText">
                    {/* <span className="MenuTextSpSingle"></span>¥880 */}
                    <span className="MenuTextSpSingle"></span>¥960
                  </p>
                </div>
                <div className="MenuCap">
                  {/* <p className="MenuTax">※税抜き価格表示</p> */}
                  <p className="MenuTax">※税込価格表示</p>
                </div>
              </Row>

              <Row xs={1} md={1}>
                <Col className="MenuLunchBottom">
                  <p className="MenuLunchBottomText">
                    <h4 className="MenuBr">韓国料理のチカラ</h4>
                    韓国料理は豊富な野菜、海産物、香辛料などを使って作るので現代人に不足しがちなビタミン、ミネラル、カルシウムも豊富に摂れる、
                    ヘルシーで栄養バランスにとても優れた料理です。唐辛子の辛さは、エネルギーの代謝をよくしてくれ、脂肪を燃焼させる働きがあります。その唐辛子をたっぷり使ったキムチには、
                    ビタミンＣが多く含まれている為、身体の抵抗力を高め、しみなどの原因になるメラニンの生成を防ぎ、しわ、たるみなどを防ぐコラーゲンの生成を助ける働きもあります。韓国料理は、
                    健康にも美容にも効果抜群の料理です。
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};
