import React from "react";
import styled from "styled-components";
import * as FadeIn from "./components/FadeIn";
import { Container, Row, Col, Image } from "react-bootstrap";
import { BottomSet } from "./components/BottomSet";
import InfoBox from "./assets/Info_Box.webp";
import InfoFloor from "./assets/Info_Floor.webp";
import InfoParty_1 from "./assets/Info_Party_1.webp";
import InfoParty_2 from "./assets/Info_Party_2.webp";
import InfoWaitting_1 from "./assets/Info_Waitting_1.webp";
import Parking_1 from "./assets/Info_Parking_1.webp";
import Parking_2 from "./assets/Info_Parking_2.webp";

const Styles = styled.div`
  .InfoTitleWrapper {
    padding-top: 10%;
    text-align: center;
  }

  .InfoTitle {
    padding: 2.5% 3% 2.5% 3%;
    margin-bottom: 8%;
    font-family: "Noto Serif JP", serif;
    background: linear-gradient(transparent 0%, #007bff 0%);
    border-radius: 50px;
  }

  .InfoPic {
    max-width: 100%;
  }

  .InfoSec {
    padding: 3%;
  }

  .InfoBottomSec {
    margin-bottom: 5%;
  }

  .InfoFrame {
    margin: 0 2rem 2rem;
    padding: 3% 3% 1%;
    text-align: center;
    font-family: "Noto Serif JP", serif;
    background-color: #c73d13;
    border: 4px double #007bff;
    border-radius: 1rem;
  }

  .InfoCap {
    border-top: solid 1px #007bff;
    padding: 1% 0;
    color: #f3f0db;
  }

  .InfoCapTitele {
    text-align: left;
    float: left;
  }

  .InfoCapText {
    text-align: right;
  }

  .InfoCapSubText {
    text-align: right;
    font-size: 70%;
  }

  .InfoBr {
    white-space: pre-wrap;
    font-size: 12px;
  }

  .InfoParty_1 {
    margin-bottom: 3%;
  }

  .last-content {
    margin-bottom: 10%;
  }

  @media screen and (max-width: 992px) {
    .InfoTitleWrapper {
      padding-top: 60px;
    }
    .InfoFrame {
      margin: 0 0 2rem 0;
    }
  }

  @media screen and (max-width: 767px) {
    .last-content {
      margin-bottom: 20%;
    }
  }

  @media screen and (max-width: 575px) {
    .InfoCapTitele {
      float: none;
    }
    .InfoCapText {
      text-align: left;
    }
  }
`;

export const Info = () => (
  <Styles>
    <FadeIn.Down>
      <div className="restrict-width">
        <Container fluid={true}>
          <Row className="InfoTitleWrapper">
            <Col md={{ span: 8, offset: 2 }}>
              <div>
                <h2 className="InfoTitle">店内紹介</h2>
                <div className="InfoFrame">
                  <p>明るい店内は、アットホームな雰囲気!!</p>
                  <p>宴会、2次会に最適な広さです。</p>
                  <p>
                    お座敷の席が多いため、お子様連れのお客様もゆっくりお食事が楽しんで頂けます。店内が広く段差も少ないため車椅子のお客様も、安心してご来店いただけます。
                  </p>
                </div>
              </div>
            </Col>
          </Row>

          <Row className="InfoSecTitle">
            <Col md={{ span: 8, offset: 2 }} className="InfoBottomSec">
              <Row xs={1} md={1}>
                <Col>
                  <FadeIn.Up>
                    <Image src={InfoBox} className="InfoPic" rounded />
                  </FadeIn.Up>
                </Col>
                <div className="InfoSec">
                  <div className="InfoCap">
                    <p className="InfoCapTitele">BOX席</p>
                    {/* <p className="InfoCapText">6人席 × 3</p> */}
                  </div>
                </div>
              </Row>
            </Col>
          </Row>

          <Row className="InfoSecTitle">
            <Col md={{ span: 8, offset: 2 }} className="InfoBottomSec">
              <Row xs={1} md={1}>
                <Col>
                  <FadeIn.Up>
                    <Image src={InfoFloor} className="InfoPic" rounded />
                  </FadeIn.Up>
                </Col>
                <div className="InfoSec">
                  <div className="InfoCap">
                    <p className="InfoCapTitele">板の間</p>
                    {/* <p className="InfoCapText">４人席 × 5　6人席 × 3</p> */}
                  </div>
                </div>
              </Row>
            </Col>
          </Row>

          <Row className="InfoSecTitle">
            <Col md={{ span: 8, offset: 2 }} className="InfoBottomSec">
              <Row xs={1} md={1}>
                <Col>
                  <FadeIn.Up>
                    <Image
                      className={"InfoPic" + " " + " InfoParty_1"}
                      src={InfoParty_1}
                      rounded
                    />
                  </FadeIn.Up>
                </Col>
                <Col>
                  <FadeIn.Up>
                    <Image src={InfoParty_2} className="InfoPic" rounded />
                  </FadeIn.Up>
                </Col>
                <div className="InfoSec">
                  <div className="InfoCap">
                    <p className="InfoCapTitele">宴会場</p>
                    <p className="InfoCapText">
                      宴会場は最大６０名まで利用可能
                      <p className="InfoBr">
                        ※(少人数でご利用したいお客様は、個室としてもご利用して頂けます)
                      </p>
                    </p>
                  </div>
                </div>
              </Row>
            </Col>
          </Row>

          <Row className="InfoSecTitle">
            <Col md={{ span: 8, offset: 2 }} className="InfoBottomSec">
              <Row xs={1} md={1}>
                <Col>
                  <FadeIn.Up>
                    <Image src={InfoWaitting_1} className="InfoPic" rounded />
                  </FadeIn.Up>
                </Col>
                <div className="InfoSec">
                  <div className="InfoCap">
                    <p className="InfoCapTitele">待合室</p>
                    <p className="InfoCapText">
                      ベビーベッド、おもちゃ、ベビーチェアあり
                    </p>
                  </div>
                </div>
              </Row>
            </Col>
          </Row>

          <Row className="InfoSecTitle">
            <Col md={{ span: 8, offset: 2 }} className="InfoBottomSec">
              <Row xs={1} md={1}>
                <Col>
                  <FadeIn.Up>
                    <Image src={Parking_1} className="InfoPic" rounded />
                  </FadeIn.Up>
                </Col>
              </Row>
              <div className="InfoSec">
                <div className="InfoCap">
                  <p className="InfoCapTitele">第一駐車場</p>
                  <p className="InfoCapText">最大16台停車可能</p>
                </div>
              </div>
            </Col>
          </Row>

          <Row className="InfoSecTitle last-content">
            <Col md={{ span: 8, offset: 2 }} className="InfoBottomSec">
              <Row xs={1} md={1}>
                <Col>
                  <FadeIn.Up>
                    <Image src={Parking_2} className="InfoPic" rounded />
                  </FadeIn.Up>
                </Col>
                <div className="InfoSec">
                  <div className="InfoCap">
                    <p className="InfoCapTitele">第二駐車場</p>
                    <p className="InfoCapText">最大16台停車可能</p>
                  </div>
                </div>
              </Row>
            </Col>
          </Row>

          <BottomSet />
        </Container>
      </div>
    </FadeIn.Down>
  </Styles>
);
