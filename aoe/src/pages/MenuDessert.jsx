import React from "react";
import "../MenuJsx.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import DessertDeco from "../assets/DessertDeco.svg";

export const Dessert = ({ data }) => {
  return (
    <React.Fragment>
      <Container fluid={true}>
        <Row className="MenuTitleSpace">
          <Col>
            <div className="MenuDeco">
              <Image
                className="MenuDecoTitle"
                src={DessertDeco}
                alt="Logo"
                fluid
              />
            </div>
          </Col>
        </Row>

        <Row className="MenuSpace">
          <Col md={{ span: 8, offset: 2 }}>
            <Row className="MenuSec" xs={1} md={1}>
              <div className="MenuCap">
                <p className="MenuTitele">ソフトクリーム</p>
                <p className="MenuText">
                  <span className="MenuTextSp"></span>¥310
                </p>
              </div>
              <div className="MenuCap">
                <p className="MenuTitele">オレンジシャーベット（果肉入り）</p>
                <p className="MenuText">
                  <span className="MenuTextSp"></span>¥510
                </p>
              </div>
              <div className="MenuCap">
                <p className="MenuTitele">アップルシャーベット（果肉入り）</p>
                <p className="MenuText">
                  <span className="MenuTextSp"></span>¥510
                </p>
              </div>
              <div className="MenuCap">
                <p className="MenuTitele">パインシャーベット（果肉入り）</p>
                <p className="MenuText">
                  <span className="MenuTextSp"></span>¥530
                </p>
              </div>
              <div className="MenuCap">
                <p className="MenuTitele">かぼちゃMINIアイス</p>
                <p className="MenuText">
                  <span className="MenuTextSp"></span>¥530
                </p>
              </div>
              <div className="MenuCap">
                <p className="MenuTitele">生チョコアイス（チョコ・抹茶）</p>
                <p className="MenuText">
                  <span className="MenuTextSp"></span>¥370
                </p>
              </div>
              <div className="MenuCap">
                <p className="MenuTitele">クリームソーダ</p>
                <p className="MenuText">
                  <span className="MenuTextSp"></span>¥500
                </p>
              </div>
              <div className="MenuCap">
                <p className="MenuTitele">クリームコーラ</p>
                <p className="MenuText">
                  <span className="MenuTextSp"></span>¥500
                </p>
              </div>
              <div className="MenuCap">
                <p className="MenuTax">※税抜き価格表示</p>
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};
