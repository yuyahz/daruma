import React from "react";
import styled from "styled-components";
import * as FadeIn from "./components/FadeIn";
import { Container, Row, Col, Image, Fade } from "react-bootstrap";
import { BottomSet } from "./components/BottomSet";
import RecruitServer from "./assets/RecruitServer.png";
import RecruitKitchen from "./assets/RecruitKitchen.png";

const Styles = styled.div`
  .RecruitTitleWrapper {
    padding-top: 10%;
    text-align: center;
  }

  .RecruitTopWrapper {
    padding: 5% 0;
  }

  .RecruitBottomWrapper {
    padding-bottom: 8%;
    margin-bottom: 10%;
  }

  .RecruitTitle {
    padding: 2.5% 3% 2.5% 3%;
    margin-bottom: 8%;
    font-family: "Noto Serif JP", serif;
    background: linear-gradient(transparent 0%, #007bff 0%);
    border-radius: 50px;
  }

  .RecruitSubTitle {
    padding-top: 5%;
    margin-bottom: 5%;
    font-family: "Noto Serif JP", serif;
    border-bottom: solid 1px #007bff;
  }

  .RecruitTitleTextWrapper {
    margin: 0 auto;
    max-width: 600px;
    font-family: "Noto Serif JP", serif;
  }

  .RecruitPic {
    margin: 0 auto;
    display: block;
    height: auto;
    max-width: 100%;
  }

  @media screen and (max-width: 992px) {
    .RecruitTitleWrapper {
      padding-top: 60px;
    }
    .RecruitTopWrapper {
      padding: 10% 0;
    }
  }

  @media screen and (max-width: 767px) {
    .RecruitBottomWrapper {
      margin-bottom: 20%;
    }
  }
`;

export const Recruit = () => (
  <Styles>
    <FadeIn.Down>
      <div className="restrict-width">
        <Container fluid={true}>
          <Row className="RecruitTitleWrapper">
            <Col md={{ span: 8, offset: 2 }}>
              <div>
                <h2 className="RecruitTitle">アルバイト募集中</h2>
                <p className="RecruitTitleTextWrapper">
                  未経験でも大丈夫！先輩スタッフが丁寧にお教えいたしますので、ご安心下さい。
                  興味のある方は 086 - 224 - 3525 までお気軽にお電話下さい。
                </p>
              </div>
            </Col>
          </Row>

          <Row className="RecruitTopWrapper">
            <Col md={{ span: 8, offset: 2 }}>
              <Row xs={1} md={2}>
                <Col>
                  <FadeIn.Up>
                    <Image className="RecruitPic" src={RecruitServer} rounded />
                  </FadeIn.Up>
                </Col>
                <Col>
                  <div>
                    <h3 className="RecruitSubTitle">ホールスタッフ</h3>
                    <p>条件　16歳以上　土日勤務可能な方</p>
                    <p>
                      ・11時～22時の内5時間程度　
                      <br />
                      ※ラストまで入れる方歓迎
                    </p>
                    <p>・時給 ￥1000 ・研修期間中 ￥950</p>
                    <p>・勤務時間、勤務日数は相談に応じます</p>
                    <p>・食事付き・制服給与</p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>

          <Row className="RecruitBottomWrapper">
            <Col md={{ span: 8, offset: 2 }}>
              <Row xs={1} md={2}>
                <Col>
                  <FadeIn.Up>
                    <Image
                      className="RecruitPic"
                      src={RecruitKitchen}
                      rounded
                    />
                  </FadeIn.Up>
                </Col>
                <Col>
                  <div>
                    <h3 className="RecruitSubTitle">キッチンスタッフ</h3>
                    <p>条件　16歳以上　土日勤務可能な方</p>
                    <p>
                      ・11時～22時の内5時間程度　
                      <br />
                      ※ラストまで入れる方歓迎
                    </p>
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
      </div>
    </FadeIn.Down>
  </Styles>
);
