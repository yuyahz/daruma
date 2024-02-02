import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import styled from "styled-components";
import * as FadeIn from "./components/FadeIn";
import { BottomSet } from "./components/BottomSet";
import BBQ_AllStuffs from "./assets/BBQ_AllStuffs.png";
import BBQ from "./assets/BBQ.png";
import TeburaSet from "./assets/TeburaSet.png";
import Set1600 from "./assets/Set1600.png";
import Set2100 from "./assets/Set2100.png";
import Takeout from "./assets/Takeout.svg";

const Styles = styled.div`
  .RentSecTitle {
    padding-top: 2%;
    text-align: center;
  }

  @media screen and (max-width: 992px) {
    .RentSecTitle {
      margin-top: 2rem;
    }
  }

  .RentSec {
    margin: 5% 0 0 0;
  }

  .RentTopSec {
    margin-bottom: 4%;
  }

  .RentBottomSec {
    margin-bottom: 2%;
  }

  .RentTitle {
    padding-bottom: 3%;
    margin-bottom: 2%;
    font-family: "Noto Serif JP", serif;
    background: linear-gradient(transparent 30%, #007bff 30%);
    /* filter: drop-shadow(2px 3px 5px rgba(0, 0, 0, 0.2)); */
  }

  .RentText {
    font-size: 90%;
    color: #f3f0db;
  }

  .RentTitleText {
    display: inline-block;
  }

  .RentTitleText2 {
    font-family: "Noto Serif JP", serif;
  }

  .RentSubTitle {
    padding: 20% 0 5%;
    margin-bottom: 5%;
    font-family: "Noto Serif JP", serif;
    border-bottom: solid 1px #007bff;
  }

  @media screen and (max-width: 768px) {
    .RentSubTitle {
      padding: 3% 0 5%;
    }
  }

  .RentCaption {
    padding: 3%;
  }

  .RentPic {
    margin: 0 auto;
    display: block;
    height: auto;
    max-width: 100%;
    /* filter: drop-shadow(2px 3px 5px rgba(0, 0, 0, 0.2)); */
  }

  .RentBr {
    white-space: pre-wrap;
    font-size: 60%;
  }

  .RentBtn {
    width: 70%;
    border-radius: 4rem;
  }

  .RentBtnSec {
    text-align: center;
    margin-bottom: 13%;
    filter: drop-shadow(2px 3px 5px rgba(0, 0, 0, 0.2));
  }

  .RentBtn:hover {
    transform: scale(0.95);
    transition: transform 2s cubic-bezier(0.25, 1, 0.5, 1);
    filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.2));
  }

  .RentTax {
    font-size: 90%;
    color: #f3f0db;
    text-align: center;
    margin: 5% 0 20% 0;
  }
`;

export const Rent = () => (
  <Styles>
    <div className="restrict-width">
      <Container fluid={true}>
        <Row className="RentSecTitle">
          <Col md={{ span: 8, offset: 2 }}>
            <div className="RentText">
              <h2 className="RentTitle">
                BBQ器具<h2 className="RentTitleText">無料貸し出し</h2>
              </h2>
              <p className="RentTitleText2">
                アウトドアで本格焼肉を手軽に！後片付けも楽々！
                使用後はそのまま当店まで返却するだけ !!
              </p>
            </div>
          </Col>
        </Row>

        <Row className="RentSec">
          <Col md={{ span: 8, offset: 2 }} className="RentTopSec">
            <Row xs={1} md={2}>
              <Col>
                <FadeIn.Up>
                  <Image className="RentPic" src={BBQ_AllStuffs} rounded />
                </FadeIn.Up>
              </Col>
              <Col>
                <div className="RentText">
                  <h3 className="RentSubTitle">器具貸し出し条件 </h3>
                  <p>
                    <u>
                      お肉10人前以上、またセットメニュー
                      5人前以上ご注文の方に限り無料貸し出し可能。
                    </u>
                  </p>
                  {/* <p>必要なお客様には 炭 1 袋 ¥780 で販売しております。</p> */}
                  <p>必要なお客様には 炭 1 袋 ¥850 で販売しております。</p>
                  <p>内容 ( 1kg , 着火剤付き , 約 1 台分)</p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row className="RentSec">
          <Col md={{ span: 8, offset: 2 }}>
            <Row xs={1} md={2}>
              <Col>
                <FadeIn.Up>
                  <Image className="RentPic" src={BBQ} rounded />
                </FadeIn.Up>
                <div className="RentCaption RentText">
                  <p>
                    一度に10人前のお肉が焼ける直径45cmの器具なので、大人数でもOK
                    !!
                  </p>
                </div>
              </Col>
              <Col>
                <FadeIn.Up>
                  <Image className="RentPic" src={TeburaSet} rounded />
                </FadeIn.Up>
                <div className="RentCaption RentText">
                  <p>人数分の箸、コップ、ゴミ袋は無料で差し上げます !!</p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row className="RentSec">
          <Col md={{ span: 8, offset: 2 }} className="RentBottomSec">
            <Row xs={1} md={2}>
              <Col>
                <FadeIn.Up>
                  <Image className="RentPic" src={Set1600} rounded />
                </FadeIn.Up>
                <div className="RentCaption RentText">
                  <p>BBQセットメニュー</p>
                  <p className="Rentbr">
                    {/* ￥1600 セット ( 1人前 ) */}
                    ￥1800 セット ( 1人前 )
                    <p className="Rentbr">
                      カルビ 60ｇ / ハラミ 80ｇ / 上ミノ 30ｇ
                      <p className="Rentbr">
                        ホルモン 30ｇ / 上ホルモン 30ｇ
                        <p className="Rentbr">ウインナー 2本</p>
                      </p>
                    </p>
                  </p>
                </div>
              </Col>
              <Col>
                <FadeIn.Up>
                  <Image className="RentPic" src={Set2100} rounded />
                </FadeIn.Up>
                <div className="RentCaption RentText">
                  <p>BBQセットメニュー</p>
                  <p className="Rentbr">
                    {/* ￥2100 セット ( 1人前 ) */}
                    ￥2300 セット ( 1人前 )
                    <p className="Rentbr">
                      カルビ 80ｇ / ハラミ 100ｇ / 上ミノ 30ｇ
                      <p className="Rentbr">
                        ホルモン 30ｇ / 上ホルモン 30ｇ / ブタ 50ｇ
                        <p className="Rentbr">ウインナー 2本</p>
                      </p>
                    </p>
                  </p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <p className="RentTax">※税込価格表示</p>
          </Col>
        </Row>

        {/* <Row>
        <Col md={{ span: 6, offset: 3 }} className="RentBtnSec">
          <a href={require("./assets/Document.pdf")} target="_blank">
            <Image className="RentBtn" src={Takeout} />
          </a>
        </Col>
      </Row> */}

        <BottomSet />
      </Container>
    </div>
  </Styles>
);
