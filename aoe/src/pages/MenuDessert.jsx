import React from "react";
import "../MenuJsx.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import Menu_Dessert from "../assets/Menu_Dessert.svg";
import * as FadeIn from "../components/FadeIn";

export const Dessert = ({ data }) => {
  return (
    <React.Fragment>
      <div className="restrict-width bottom-space">
        <Container fluid={true} style={{ margin: "0 0 20% 0" }}>
          <FadeIn.Down>
            <Row>
              <Col className="menu-title-img-container">
                <Image
                  className="menu-title-img"
                  src={Menu_Dessert}
                  alt="デザート"
                  fluid
                />
              </Col>
            </Row>
          </FadeIn.Down>

          <FadeIn.Left>
            <Row>
              <Col md={{ span: 8, offset: 2 }}>
                <Row className="menu-wrapper" xs={1} md={1}>
                  <div className="menu-caption">
                    <p className="menu-name">ソフトクリーム</p>
                    <p className="menu-price-wrapper">
                      {/* <span className="menu-price"></span>¥310 */}
                      {/* <span className="menu-price"></span>¥340 */}
                      <span className="menu-price"></span>¥360
                    </p>
                  </div>
                  <div className="menu-caption">
                    <p className="menu-name">ココナッツシャーベット</p>
                    <p className="menu-price-wrapper">
                      {/* <span className="menu-price"></span>¥510 */}
                      {/* <span className="menu-price"></span>¥560 */}
                      <span className="menu-price"></span>¥580
                    </p>
                  </div>
                  <div className="menu-caption">
                    <p className="menu-name">ピーチシャーベット</p>
                    <p className="menu-price-wrapper">
                      {/* <span className="menu-price"></span>¥510 */}
                      {/* <span className="menu-price"></span>¥560 */}
                      <span className="menu-price"></span>¥580
                    </p>
                  </div>
                  <div className="menu-caption">
                    <p className="menu-name">パインシャーベット (果肉入り)</p>
                    <p className="menu-price-wrapper">
                      {/* <span className="menu-price"></span>¥530 */}
                      {/* <span className="menu-price"></span>¥580 */}
                      <span className="menu-price"></span>¥600
                    </p>
                  </div>
                  <div className="menu-caption">
                    <p className="menu-name">カカオショコラアイス</p>
                    <p className="menu-price-wrapper">
                      {/* <span className="menu-price"></span>¥530 */}
                      {/* <span className="menu-price"></span>¥580 */}
                      <span className="menu-price"></span>¥600
                    </p>
                  </div>
                  <div className="menu-caption">
                    <p className="menu-name">生チョコアイス (チョコ・抹茶)</p>
                    <p className="menu-price-wrapper">
                      {/* <span className="menu-price"></span>¥370 */}
                      {/* <span className="menu-price"></span>¥400 */}
                      <span className="menu-price"></span>¥420
                    </p>
                  </div>
                  <div className="menu-caption">
                    <p className="menu-name">クリームソーダ</p>
                    <p className="menu-price-wrapper">
                      {/* <span className="menu-price"></span>¥500 */}
                      {/* <span className="menu-price"></span>¥550 */}
                      <span className="menu-price"></span>¥570
                    </p>
                  </div>
                  <div className="menu-caption">
                    <p className="menu-name">クリームコーラ</p>
                    <p className="menu-price-wrapper">
                      {/* <span className="menu-price"></span>¥500 */}
                      {/* <span className="menu-price"></span>¥550 */}
                      <span className="menu-price"></span>¥570
                    </p>
                  </div>
                  <div className="menu-caption">
                    {/* <p className="menu-tax">※税抜き価格表示</p> */}
                    <p className="menu-tax">※税込価格表示</p>
                  </div>
                </Row>
              </Col>
            </Row>
          </FadeIn.Left>
        </Container>
      </div>
    </React.Fragment>
  );
};
