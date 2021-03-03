import React from "react";
import { Container, Row, Col, Image, Fade } from "react-bootstrap";
import * as FadeIn from "./components/FadeIn";
import styled from "styled-components";
import { BottomSet } from "./components/BottomSet";
import RecruitServer from "./assets/RecruitServer.png";
import RecruitKitchen from "./assets/RecruitKitchen.png";

const Styles = styled.div`
  .RecruitTitleSec {
    padding-top: 2%;
    text-align: center;
  }

  .RecruitTopSec {
    padding: 5% 0;
  }

  .RecruitBottomSec {
    padding-bottom: 8%;
  }

  .RecruitTitle {
    padding-bottom: 3%;
    margin-bottom: 5%;
    font-family: "Noto Serif JP", serif;
    background: linear-gradient(transparent 50%, #007bff 50%);
    filter: drop-shadow(2px 3px 5px rgba(0, 0, 0, 0.2));
  }

  .RecruitSubTitle {
    padding: 5% 0;
    margin-bottom: 5%;
    font-family: "Noto Serif JP", serif;
    border-bottom: solid 1px #007bff;
  }

  .RecruitTitleText {
    font-family: "Noto Serif JP", serif;
  }

  .RecruitText {
    font-size: 90%;
    color: #f3f0db;
  }

  .RecruitPic {
    margin: 0 auto;
    display: block;
    height: auto;
    max-width: 100%;
    filter: drop-shadow(2px 3px 5px rgba(0, 0, 0, 0.2));
  }
`;

export const Recruit = () => (
  <Styles>
    <Container fluid={true}>
      <Row className="RecruitTitleSec">
        <Col md={{ span: 6, offset: 3 }}>
          <div className="RecruitText">
            <h2 className="RecruitTitle">アルバイト募集中</h2>
            <p className="RecruitTitleText">
              未経験でも大丈夫！先輩スタッフが丁寧にお教えいたしますので、ご安心下さい。
              興味のある方は 086 - 224 - 3525 までお気軽にお電話下さい。
            </p>
          </div>
        </Col>
      </Row>

      <Row className="RecruitTopSec">
        <Col md={{ span: 8, offset: 2 }}>
          <Row xs={1} md={2}>
            <Col>
              <FadeIn.Up>
                <Image className="RecruitPic" src={RecruitServer} rounded />
              </FadeIn.Up>
            </Col>
            <Col>
              <div className="RecruitText">
                <h3 className="RecruitSubTitle">ホールスタッフ</h3>
                <p>条件　16歳以上　土日勤務可能な方</p>
                <p>・11時～22時の内5時間程度　※ラストまで入れる方歓迎</p>
                <p>・時給 ￥1000 ・研修期間中 ￥950</p>
                <p>・勤務時間、勤務日数は相談に応じます</p>
                <p>・食事付き・制服給与</p>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row className="RecruitBottomSec">
        <Col md={{ span: 8, offset: 2 }}>
          <Row xs={1} md={2}>
            <Col>
              <FadeIn.Up>
                <Image className="RecruitPic" src={RecruitKitchen} rounded />
              </FadeIn.Up>
            </Col>
            <Col>
              <div className="RecruitText">
                <h3 className="RecruitSubTitle">キッチンスタッフ</h3>
                <p>条件　16歳以上　土日勤務可能な方</p>
                <p>・11時～22時の内5時間程度　※ラストまで入れる方歓迎</p>
                <p>・時給 ￥1000 ・研修期間中 ￥950</p>
                <p>・勤務時間、勤務日数は相談に応じます</p>
                <p>・食事付き・制服給与</p>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>

      <BottomSet />
    </Container>
  </Styles>
);
