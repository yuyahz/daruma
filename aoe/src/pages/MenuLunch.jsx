import React from "react";
import "../MenuJsx.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import Menu_Lunch from "../assets/Menu_Lunch.svg";
import * as FadeIn from "../components/FadeIn";

export const Lunch = ({ data }) => {
  return (
    <React.Fragment>
      <div className="restrict-width bottom-space">
        <Container fluid={true}>
          <FadeIn.Down>
            <Row>
              <Col className="menu-title-img-container">
                <Image
                  className="menu-title-img"
                  src={Menu_Lunch}
                  alt="韓国ランチ"
                  fluid
                />
              </Col>
            </Row>
          </FadeIn.Down>

          <FadeIn.Left>
            <Row>
              <Col md={{ span: 8, offset: 2 }}>
                <Row xs={1} md={1}>
                  <Col className="menu-lunch-titile-wrapper">
                    <h3 className="menu-lunch-titile">青江店限定!</h3>
                    <h3 className="menu-lunch-subtitile">
                      お昼のランチメニュー 11:00～14:00まで平日のみ実施中！
                    </h3>
                  </Col>
                </Row>

                <Row className="menu-wrapper" xs={1} md={1}>
                  <div className="menu-caption">
                    <p className="menu-subtitle-bg-primary">
                      焼肉セレクトランチ
                    </p>
                  </div>
                  <div className="menu-captionSet">
                    <p className="menu-name">
                      好きなお肉をセレクト!!{" "}
                      <span className="MenuSmText">
                        ※焼きしゃぶロースは必須となります。
                      </span>
                    </p>
                  </div>
                  <div className="menu-captionSet">
                    <p className="menu-name">
                      焼きしゃぶロース以外のその他のお肉は以下のメニューより２品お選び下さい。
                    </p>
                  </div>
                  <div className="menu-captionSet">
                    <p className="menu-name">
                      ハラミ、上ホルモン、ホルモン、レバー、ブタ、ブタバラ、トリ、セセリ、ウィンナー（3本）、
                      センマイ、ブタロース、よめなかせ、心臓、ギアラ
                    </p>
                  </div>
                  <div className="menu-captionSet">
                    <p className="menu-name">
                      ※お肉とは別に下記のメニュー付きです
                    </p>
                  </div>
                  <div className="menu-captionSet">
                    <p className="menu-name">
                      本日の一品、キムチ、サラダ、ライス、スープ（小）、デザート
                    </p>
                  </div>
                  <div className="menu-captionSet">
                    <p className="menu-name"></p>
                    <p className="menu-price-wrapper">
                      {/* <span className="menu-priceSingle"></span>¥1180 */}
                      {/* <span className="menu-priceSingle"></span>¥1290 */}
                      {/* <span className="menu-priceSingle"></span>¥1360 */}
                      <span className="menu-priceSingle"></span>¥1390
                    </p>
                  </div>
                  <div className="menu-caption menu-specific-spacing">
                    <p className="menu-subtitle-bg-primary">
                      ホルモンうどんランチ
                    </p>
                  </div>
                  <div className="menu-captionSet">
                    <p className="menu-name">
                      本日の一品、キムチ、サラダ、ライス、デザート
                    </p>
                    <p className="menu-price-wrapper">
                      {/* <span className="menu-priceSingle"></span>¥880 */}
                      {/* <span className="menu-priceSingle"></span>¥960 */}
                      <span className="menu-priceSingle"></span>¥1060
                    </p>
                  </div>
                  <div className="menu-caption menu-specific-spacing">
                    <p className="menu-subtitle-bg-primary">
                      石焼ビビンバランチ
                    </p>
                  </div>
                  <div className="menu-captionSet">
                    <p className="menu-name">
                      本日の一品、キムチ、サラダ、スープ（小）、デザート
                    </p>
                    <p className="menu-price-wrapper">
                      {/* <span className="menu-priceSingle"></span>¥1150 */}
                      {/* <span className="menu-priceSingle"></span>¥1260 */}
                      <span className="menu-priceSingle"></span>¥1390
                    </p>
                  </div>
                  <div className="menu-caption menu-specific-spacing">
                    <p className="menu-subtitle-bg-primary">
                      韓国ラーメンランチ
                    </p>
                  </div>
                  <div className="menu-captionSet">
                    <p className="menu-name">
                      本日の一品、キムチ、サラダ、ライス、デザート
                    </p>
                    <p className="menu-price-wrapper">
                      {/* <span className="menu-priceSingle"></span>¥880 */}
                      {/* <span className="menu-priceSingle"></span>¥960 */}
                      <span className="menu-priceSingle"></span>¥1060
                    </p>
                  </div>
                  <div className="menu-caption menu-specific-spacing">
                    <p className="menu-subtitle-bg-primary">豆腐チゲランチ</p>
                  </div>
                  <div className="menu-captionSet">
                    <p className="menu-name">
                      本日の一品、キムチ、サラダ、ライス、デザート
                    </p>
                    <p className="menu-price-wrapper">
                      {/* <span className="menu-priceSingle"></span>¥880 */}
                      {/* <span className="menu-priceSingle"></span>¥960 */}
                      <span className="menu-priceSingle"></span>¥1060
                    </p>
                  </div>
                  <div className="menu-caption menu-specific-spacing">
                    <p className="menu-subtitle-bg-primary">
                      カムジャタンランチ{" "}
                      <span className="MenuSmText">
                        （韓国風　豚スベアリブとじゃがいもの辛口チゲ）
                      </span>
                    </p>
                  </div>
                  <div className="menu-captionSet">
                    <p className="menu-name">
                      本日の一品、キムチ、サラダ、ライス、デザート
                    </p>
                    <p className="menu-price-wrapper">
                      {/* <span className="menu-priceSingle"></span>¥1080 */}
                      {/* <span className="menu-priceSingle"></span>¥1180 */}
                      <span className="menu-priceSingle"></span>¥1280
                    </p>
                  </div>
                  <div className="menu-caption menu-specific-spacing">
                    <p className="menu-subtitle-bg-primary">
                      プゴクスープランチ{" "}
                      <span className="MenuSmText">
                        （干しダラの旨み、たっぷり野菜のスープ）
                      </span>
                    </p>
                  </div>
                  <div className="menu-captionSet">
                    <p className="menu-name">
                      ビビンバ（小）、本日の一品、キムチ、サラダ、デザート
                    </p>
                    <p className="menu-price-wrapper">
                      {/* <span className="menu-priceSingle"></span>¥1150 */}
                      {/* <span className="menu-priceSingle"></span>¥1260 */}
                      <span className="menu-priceSingle"></span>¥1360
                    </p>
                  </div>
                  <div className="menu-caption menu-specific-spacing">
                    <p className="menu-subtitle-bg-primary">
                      にんにくチャーハンランチ
                    </p>
                  </div>
                  <div className="menu-captionSet">
                    <p className="menu-name">
                      本日の一品、キムチ、サラダ、スープ（小）、デザート
                    </p>
                    <p className="menu-price-wrapper">
                      {/* <span className="menu-priceSingle"></span>¥780 */}
                      {/* <span className="menu-priceSingle"></span>¥850 */}
                      <span className="menu-priceSingle"></span>¥950
                    </p>
                  </div>
                  <div className="menu-caption menu-specific-spacing">
                    <p className="menu-subtitle-bg-primary">
                      和牛すじ煮込み汁ランチ
                    </p>
                  </div>
                  <div className="menu-captionSet">
                    <p className="menu-name">
                      本日の一品、キムチ、サラダ、ライス、デザート
                    </p>
                    <p className="menu-price-wrapper">
                      {/* <span className="menu-priceSingle"></span>¥880 */}
                      {/* <span className="menu-priceSingle"></span>¥960 */}
                      <span className="menu-priceSingle"></span>¥1060
                    </p>
                  </div>
                  <div className="menu-caption">
                    {/* <p className="menu-tax">※税抜き価格表示</p> */}
                    <p className="menu-tax">※税込価格表示</p>
                  </div>
                </Row>

                <Row xs={1} md={1}>
                  <Col className="menu-lunch-bottom-block">
                    <p className="menu-lunch-bottom-text">
                      <h4 className="menu-line-break">韓国料理のチカラ</h4>
                      韓国料理は豊富な野菜、海産物、香辛料などを使って作るので現代人に不足しがちなビタミン、ミネラル、カルシウムも豊富に摂れる、
                      ヘルシーで栄養バランスにとても優れた料理です。唐辛子の辛さは、エネルギーの代謝をよくしてくれ、脂肪を燃焼させる働きがあります。その唐辛子をたっぷり使ったキムチには、
                      ビタミンＣが多く含まれている為、身体の抵抗力を高め、しみなどの原因になるメラニンの生成を防ぎ、しわ、たるみなどを防ぐコラーゲンの生成を助ける働きもあります。韓国料理は、
                      健康にも美容にも効果抜群の料理です。
                    </p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </FadeIn.Left>
        </Container>
      </div>
    </React.Fragment>
  );
};
