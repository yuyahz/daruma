import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import styled from "styled-components";
import * as FadeIn from "./components/FadeIn";
import { BottomSet } from "./components/BottomSet";
import InfoBox from "./assets/InfoBox.png";
import InfoFloor from "./assets/InfoFloor.png";
import InfoParty_1 from "./assets/InfoParty_1.png";
import InfoParty_2 from "./assets/InfoParty_2.png";
import InfoWaitting_1 from "./assets/InfoWaitting_1.png";
import Parking_1 from "./assets/Parking_1.png";
import Parking_2 from "./assets/Parking_2.png";

const Styles = styled.div`
  .InfoSecTitle {
    padding-top: 2%;
    text-align: center;
  }

  .InfoTitle {
    padding-bottom: 3%;
    font-family: "Noto Serif JP", serif;
    background: linear-gradient(transparent 30%, #007bff 30%);
    filter: drop-shadow(2px 3px 5px rgba(0, 0, 0, 0.2));
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

  .InfoText {
    font-size: 90%;
    color: #f3f0db;
  }

  .InfoFrame {
    margin: 13% 5% 15%;
    padding: 3% 3% 1%;
    font-family: "Noto Serif JP", serif;
    background-color: #c73d13;
    border: 4px double #007bff;
    border-radius: 1rem;
    filter: drop-shadow(2px 3px 5px rgba(1, 1, 0, 0.3));
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
    font-size: 60%;
  }

  .InfoParty_1 {
    margin-bottom: 3%;
  }
`;

export const Info = () => (
  <Styles>
    <Container fluid={true}>
      <Row className="InfoSecTitle">
        <Col md={{ span: 8, offset: 2 }}>
          <div className="InfoText">
            <h2 className="InfoTitle">店内紹介</h2>
            <div className="InfoFrame">
              <p>
                明るい店内は、アットホームな雰囲気！宴会、2次会に最適な広さです。
              </p>
              <p>
                お座敷の席が多いため、お子様連れのお客様も、ゆっくりお食事が楽しめます。
              </p>
              <p>
                店内が広く、段差も少ないため車椅子のお客様も、安心してご来店いただけます。
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
                  宴会場は最大６０名まで、利用可能
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
              <p className="InfoCapText">最大　16台</p>
            </div>
          </div>
        </Col>
      </Row>

      <Row className="InfoSecTitle">
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
                <p className="InfoCapText">最大 16台</p>
              </div>
            </div>
          </Row>
        </Col>
      </Row>

      <BottomSet />
    </Container>
  </Styles>
);
