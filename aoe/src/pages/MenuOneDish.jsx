import React from "react";
import "../MenuJsx.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import OnedishDeco from "../assets/OnedishDeco.svg";

export const OneDish = ({ data }) => {
  return (
    <React.Fragment>
      <Container fluid={true}>
        <Row className="MenuTitleSpace">
          <Col>
            <div className="MenuDeco">
              <Image
                className="MenuDecoTitle"
                src={OnedishDeco}
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
                <p className="MenuTitele">生センマイ</p>
                <p className="MenuText">
                  <span className="MenuTextSp"></span>¥740
                </p>
              </div>
              <div className="MenuCap">
                <p className="MenuTitele">塩ごま生センマイ</p>
                <p className="MenuText">
                  <span className="MenuTextSp"></span>¥740
                </p>
              </div>
              <div className="MenuCap">
                <p className="MenuTax"></p>
              </div>
            </Row>

            <Row className="MenuSec" xs={1} md={1}>
              <div className="MenuCap">
                <p className="MenuTitele">元祖ホルモンうどん</p>
                <p className="MenuText">
                  <span className="MenuTextSp"></span>¥680
                </p>
              </div>
              <div className="MenuCap">
                <p className="MenuTitele">チヂミ</p>
                <p className="MenuText">
                  <span className="MenuTextSp"></span>¥630
                </p>
              </div>
              <div className="MenuCap">
                <p className="MenuTitele">豆腐チゲ</p>
                <p className="MenuText">
                  <span className="MenuTextSp"></span>¥580
                </p>
              </div>
              <div className="MenuCap">
                <p className="MenuTitele">激辛韓国ラーメン（青唐辛子入）</p>
                <p className="MenuText">
                  <span className="MenuTextSp"></span>¥680
                </p>
              </div>
              <div className="MenuCap">
                <p className="MenuTitele">ナムルの盛り合わせ</p>
                <p className="MenuText">
                  <span className="MenuTextSp"></span>¥470
                </p>
              </div>
              <div className="MenuCap">
                <p className="MenuTitele">
                  ナムル単品（もやしor大根orほうれん草）
                </p>
                <p className="MenuText">
                  <span className="MenuTextSp"></span>¥370
                </p>
              </div>
              <div className="MenuCap">
                <p className="MenuTitele">チャンジャ</p>
                <p className="MenuText">
                  <span className="MenuTextSp"></span>¥420
                </p>
              </div>
              <div className="MenuCap">
                <p className="MenuTitele">韓国のり</p>
                <p className="MenuText">
                  <span className="MenuTextSp"></span>¥370
                </p>
              </div>
              <div className="MenuCap">
                <p className="MenuTitele">ニンニク（スライスorかたまり）</p>
                <p className="MenuText">
                  <span className="MenuTextSp"></span>¥390
                </p>
              </div>
              <div className="MenuCap">
                <p className="MenuTitele">ニンニクホイル揚げ</p>
                <p className="MenuText">
                  <span className="MenuTextSp"></span>¥430
                </p>
              </div>
              <div className="MenuCap">
                <p className="MenuTitele">手羽先の唐揚げ</p>
                <p className="MenuText">
                  <span className="MenuTextSp"></span>¥530
                </p>
              </div>
              <div className="MenuCap">
                <p className="MenuTitele">フライドポテト</p>
                <p className="MenuText">
                  <span className="MenuTextSp"></span>¥420
                </p>
              </div>
              <div className="MenuCap">
                <p className="MenuTitele">スルメ珍味（韓国風甘辛あえ）</p>
                <p className="MenuText">
                  <span className="MenuTextSp"></span>¥420
                </p>
              </div>
              <div className="MenuCap">
                <p className="MenuTitele">牛スジ韓国煮</p>
                <p className="MenuText">
                  <span className="MenuTextSp"></span>¥420
                </p>
              </div>
              <div className="MenuCap">
                <p className="MenuTitele">ピリ辛きゅうり漬け</p>
                <p className="MenuText">
                  <span className="MenuTextSp"></span>¥420
                </p>
              </div>
              <div className="MenuCap">
                <p className="MenuTax"></p>
              </div>
            </Row>

            <Row className="MenuSec" xs={1} md={1}>
              <div className="MenuCap">
                <p className="MenuTitele">野菜サラダ（和風/ゴマダレ/青じそ）</p>
                <p className="MenuText">
                  <span className="MenuTextSp"></span>¥470
                </p>
              </div>
              <div className="MenuCap">
                <p className="MenuTitele">ツナサラダ（和風/ゴマダレ/青じそ）</p>
                <p className="MenuText">
                  <span className="MenuTextSp"></span>¥520
                </p>
              </div>
              <div className="MenuCap">
                <p className="MenuTitele">
                  ヘルシー海藻サラダ（和風/ゴマダレ/青じそ）
                </p>
                <p className="MenuText">
                  <span className="MenuTextSp"></span>¥520
                </p>
              </div>
              <div className="MenuCap">
                <p className="MenuTitele">ムンチサラダ</p>
                <p className="MenuText">
                  <span className="MenuTextSp"></span>¥470
                </p>
              </div>
              <div className="MenuCap">
                <p className="MenuTitele">チョレギサラダ</p>
                <p className="MenuText">
                  <span className="MenuTextSp"></span>¥480
                </p>
              </div>
              <div className="MenuCap">
                <p className="MenuTitele">シーザーサラダ</p>
                <p className="MenuText">
                  <span className="MenuTextSp"></span>¥520
                </p>
              </div>
              <div className="MenuCap">
                <p className="MenuTitele">
                  チシャ（唐辛子味噌付きサニーレタス）
                </p>
                <p className="MenuText">
                  <span className="MenuTextSp"></span>¥430
                </p>
              </div>
              <div className="MenuCap">
                <p className="MenuTitele">
                  野菜焼き盛り合わせ（キャベツ/ピーマン/かぼちゃ/人参等）
                </p>
                <p className="MenuText">
                  <span className="MenuTextSp"></span>¥430
                </p>
              </div>
              <div className="MenuCap">
                <p className="MenuTitele">野菜焼き単品</p>
                <p className="MenuText">
                  <span className="MenuTextSp"></span>¥280
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
