import React from "react";
import styled from "styled-components";
import * as FadeIn from "./components/FadeIn";
import { Container, Row, Col, Image } from "react-bootstrap";
import { BottomSet } from "./components/BottomSet";
import BBQ_AllStuffs from "./assets/Rent_BBQ_AllStuffs.webp";
import BBQ from "./assets/Rent_BBQ.webp";
import TeburaSet from "./assets/Rent_TeburaSet.webp";
import Set1600 from "./assets/Rent_Set1600.webp";
import Set2100 from "./assets/Rent_Set2100.webp";

const Styles = styled.div`
  .RentTitleWrapper {
    padding-top: 10%;
    text-align: center;
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
    padding: 2.5% 3% 1% 3%;
    margin-bottom: 8%;
    font-family: "Noto Serif JP", serif;
    background: linear-gradient(transparent 0%, #007bff 0%);
    border-radius: 50px;
    /* filter: drop-shadow(2px 3px 5px rgba(0, 0, 0, 0.2)); */
  }

  .RentTitleText {
    display: inline-block;
  }

  .RentTitleText2 {
    font-family: "Noto Serif JP", serif;
  }

  .RentSubTitle {
    padding-top: 5%;
    margin-bottom: 5%;
    font-family: "Noto Serif JP", serif;
    border-bottom: solid 1px #007bff;
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
    text-align: center;
    margin-top: 5%;
  }

  .fax-container-rent {
    margin: 10% 0;
  }

  .fax-wrapper-rent {
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    text-align: left;
    border-radius: 10px;
    transition: background-color 0.2s ease-out, color 0.2s ease-out;

    h3 {
      color: #fff;
    }

    li {
      padding-bottom: 6px;
      margin-left: 16px;
    }
  }

  a:hover {
    text-decoration: none;
  }

  .fax-container-rent:hover {
    background-color: #007bff;
    color: #fff;
    padding: 24px 24px 0 24px;
    border-radius: 10px;
  }

  .RentFax {
    margin-bottom: 100px !important;
  }

  @media screen and (max-width: 992px) {
    .RentTitleWrapper {
      padding-top: 60px;
    }
  }

  @media screen and (max-width: 767px) {
    .RentFax {
      margin-bottom: 25% !important;
    }
    .fax-container-rent {
      margin: 30% 0;
    }
  }
`;

export const Rent = () => (
  <Styles>
    <FadeIn.Down>
      <div className="restrict-width">
        <Container fluid={true}>
          <Row className="RentTitleWrapper">
            <Col md={{ span: 8, offset: 2 }}>
              <div>
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

          <Col
            className="Fax d-flex align-items-center justify-content-center"
            md={{ span: 8, offset: 2 }}
            id="Fax"
          >
            <p className="RentTax mb-0">※税込価格表示</p>
          </Col>

          <Row id="takeout" className="fax-container-rent RentFax">
            <Col
              className="Fax d-flex align-items-center justify-content-center"
              md={{ span: 8, offset: 2 }}
              id="Fax"
            >
              <FadeIn.Up>
                <h3>お肉のみのお持ち帰り方はこちら</h3>
                <a href={require("./assets/Document.pdf")} target="_blank">
                  <div className="fax-wrapper-rent">
                    <ol type="1" className="against-reboot m-0 p-0">
                      <li>
                        お持ち帰りをご希望のお客様は<u>こちら</u>
                        をクリックして頂き、FAX用紙をダウンロード。
                      </li>
                      <li>必要事項を記入後、当店まで送付して頂きます。</li>
                      <li>
                        受け取り完了後、指定日に商品をお引き取りください。
                      </li>
                    </ol>
                  </div>
                </a>
              </FadeIn.Up>
            </Col>
          </Row>

          <BottomSet />
        </Container>
      </div>
    </FadeIn.Down>
  </Styles>
);
