import React from "react";
import "../MenuJsx.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import DessertDeco from "../assets/DessertDeco.svg";

export const Dessert = ({ data }) => {
  return (
    <React.Fragment>
      <div className="restrict-width bottom-space">
        <Container fluid={true} style={{ margin: "0 0 20% 0" }}>
          <Row>
            <Col className="MenuTitleImgContainer">
              <Image
                className="MenuTitleImg"
                src={DessertDeco}
                alt="Logo"
                fluid
              />
            </Col>
          </Row>

          <Row>
            <Col md={{ span: 8, offset: 2 }}>
              <Row className="MenuWrapper" xs={1} md={1}>
                <div className="MenuCaption">
                  <p className="MenuTitele">ソフトクリーム</p>
                  <p className="MenuText">
                    {/* <span className="MenuTextSp"></span>¥310 */}
                    {/* <span className="MenuTextSp"></span>¥340 */}
                    <span className="MenuTextSp"></span>¥360
                  </p>
                </div>
                <div className="MenuCaption">
                  <p className="MenuTitele">ココナッツシャーベット</p>
                  <p className="MenuText">
                    {/* <span className="MenuTextSp"></span>¥510 */}
                    {/* <span className="MenuTextSp"></span>¥560 */}
                    <span className="MenuTextSp"></span>¥580
                  </p>
                </div>
                <div className="MenuCaption">
                  <p className="MenuTitele">ピーチシャーベット</p>
                  <p className="MenuText">
                    {/* <span className="MenuTextSp"></span>¥510 */}
                    {/* <span className="MenuTextSp"></span>¥560 */}
                    <span className="MenuTextSp"></span>¥580
                  </p>
                </div>
                <div className="MenuCaption">
                  <p className="MenuTitele">パインシャーベット (果肉入り)</p>
                  <p className="MenuText">
                    {/* <span className="MenuTextSp"></span>¥530 */}
                    {/* <span className="MenuTextSp"></span>¥580 */}
                    <span className="MenuTextSp"></span>¥600
                  </p>
                </div>
                <div className="MenuCaption">
                  <p className="MenuTitele">カカオショコラアイス</p>
                  <p className="MenuText">
                    {/* <span className="MenuTextSp"></span>¥530 */}
                    {/* <span className="MenuTextSp"></span>¥580 */}
                    <span className="MenuTextSp"></span>¥600
                  </p>
                </div>
                <div className="MenuCaption">
                  <p className="MenuTitele">生チョコアイス (チョコ・抹茶)</p>
                  <p className="MenuText">
                    {/* <span className="MenuTextSp"></span>¥370 */}
                    {/* <span className="MenuTextSp"></span>¥400 */}
                    <span className="MenuTextSp"></span>¥420
                  </p>
                </div>
                <div className="MenuCaption">
                  <p className="MenuTitele">クリームソーダ</p>
                  <p className="MenuText">
                    {/* <span className="MenuTextSp"></span>¥500 */}
                    {/* <span className="MenuTextSp"></span>¥550 */}
                    <span className="MenuTextSp"></span>¥570
                  </p>
                </div>
                <div className="MenuCaption">
                  <p className="MenuTitele">クリームコーラ</p>
                  <p className="MenuText">
                    {/* <span className="MenuTextSp"></span>¥500 */}
                    {/* <span className="MenuTextSp"></span>¥550 */}
                    <span className="MenuTextSp"></span>¥570
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
