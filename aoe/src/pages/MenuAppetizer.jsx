import React from "react";
import "../MenuJsx.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import Menu_Appetizer from "../assets/Menu_Appetizer.svg";
import * as FadeIn from "../components/FadeIn";

export const Appetizer = ({ data }) => {
  return (
    <React.Fragment>
      <div className="restrict-width bottom-space">
        <Container fluid={true}>
          <FadeIn.Down>
            <Row>
              <Col className="menu-title-img-container">
                <Image
                  className="menu-title-img"
                  src={Menu_Appetizer}
                  alt="刺身、一品料理、生野菜"
                  fluid
                />
              </Col>
            </Row>
          </FadeIn.Down>

          <FadeIn.Left>
            <Row>
              <Col md={{ span: 8, offset: 2 }}>
                <Row className="menu-wrapper mb-5" xs={1} md={1}>
                  <div className="menu-subtitile-wrapper">
                    <p className="menu-subtitile">
                      <strong>お刺身</strong>
                    </p>
                  </div>
                  <div className="menu-caption">
                    <p className="menu-name">生センマイ</p>
                    <p className="menu-price-wrapper">
                      {/* <span className="menu-price"></span>¥740 */}
                      {/* <span className="menu-price"></span>¥830 */}
                      <span className="menu-price"></span>¥930
                    </p>
                  </div>
                  <div className="menu-caption">
                    <p className="menu-name">塩ごま生センマイ</p>
                    <p className="menu-price-wrapper">
                      {/* <span className="menu-price"></span>¥740 */}
                      {/* <span className="menu-price"></span>¥830 */}
                      <span className="menu-price"></span>¥930
                    </p>
                  </div>
                  <div className="menu-caption">
                    <p className="menu-tax"></p>
                  </div>
                </Row>

                <Row className="menu-wrapper mb-5" xs={1} md={1}>
                  <div className="menu-subtitile-wrapper">
                    <p className="menu-subtitile">
                      <strong>一品料理</strong>
                    </p>
                  </div>
                  <div className="menu-caption">
                    <p className="menu-name">元祖ホルモンうどん</p>
                    <p className="menu-price-wrapper">
                      {/* <span className="menu-price"></span>¥680 */}
                      {/* <span className="menu-price"></span>¥740 */}
                      <span className="menu-price"></span>¥840
                    </p>
                  </div>
                  <div className="menu-caption">
                    <p className="menu-name">チヂミ</p>
                    <p className="menu-price-wrapper">
                      {/* <span className="menu-price"></span>¥630 */}
                      {/* <span className="menu-price"></span>¥650 */}
                      <span className="menu-price"></span>¥680
                    </p>
                  </div>
                  <div className="menu-caption">
                    <p className="menu-name">豆腐チゲ</p>
                    <p className="menu-price-wrapper">
                      {/* <span className="menu-price"></span>¥580 */}
                      {/* <span className="menu-price"></span>¥630 */}
                      <span className="menu-price"></span>¥680
                    </p>
                  </div>
                  <div className="menu-caption">
                    <p className="menu-name">激辛韓国ラーメン（青唐辛子入）</p>
                    <p className="menu-price-wrapper">
                      {/* <span className="menu-price"></span>¥680 */}
                      {/* <span className="menu-price"></span>¥740 */}
                      <span className="menu-price"></span>¥790
                    </p>
                  </div>
                  <div className="menu-caption">
                    <p className="menu-name">ナムルの盛り合わせ</p>
                    <p className="menu-price-wrapper">
                      {/* <span className="menu-price"></span>¥470 */}
                      {/* <span className="menu-price"></span>¥480 */}
                      <span className="menu-price"></span>¥520
                    </p>
                  </div>
                  <div className="menu-caption">
                    <p className="menu-name">
                      ナムル単品（もやしor大根orほうれん草）
                    </p>
                    <p className="menu-price-wrapper">
                      {/* <span className="menu-price"></span>¥370 */}
                      {/* <span className="menu-price"></span>¥320 */}
                      <span className="menu-price"></span>¥370
                    </p>
                  </div>
                  <div className="menu-caption">
                    <p className="menu-name">チャンジャ</p>
                    <p className="menu-price-wrapper">
                      {/* <span className="menu-price"></span>¥420 */}
                      {/* <span className="menu-price"></span>¥460 */}
                      <span className="menu-price"></span>¥480
                    </p>
                  </div>
                  <div className="menu-caption">
                    <p className="menu-name">韓国のり</p>
                    <p className="menu-price-wrapper">
                      {/* <span className="menu-price"></span>¥370 */}
                      {/* <span className="menu-price"></span>¥280 */}
                      <span className="menu-price"></span>¥320
                    </p>
                  </div>
                  <div className="menu-caption">
                    <p className="menu-name">ニンニク（スライスorかたまり）</p>
                    <p className="menu-price-wrapper">
                      {/* <span className="menu-price"></span>¥390 */}
                      {/* <span className="menu-price"></span>¥420 */}
                      <span className="menu-price"></span>¥480
                    </p>
                  </div>
                  <div className="menu-caption">
                    <p className="menu-name">ニンニクホイル揚げ</p>
                    <p className="menu-price-wrapper">
                      {/* <span className="menu-price"></span>¥430 */}
                      {/* <span className="menu-price"></span>¥470 */}
                      <span className="menu-price"></span>¥530
                    </p>
                  </div>
                  <div className="menu-caption">
                    <p className="menu-name">手羽先の唐揚げ</p>
                    <p className="menu-price-wrapper">
                      {/* <span className="menu-price"></span>¥530 */}
                      {/* <span className="menu-price"></span>¥580 */}
                      <span className="menu-price"></span>¥600
                    </p>
                  </div>
                  <div className="menu-caption">
                    <p className="menu-name">フライドポテト</p>
                    <p className="menu-price-wrapper">
                      {/* <span className="menu-price"></span>¥420 */}
                      <span className="menu-price"></span>¥460
                    </p>
                  </div>
                  <div className="menu-caption">
                    <p className="menu-name">スルメ珍味（韓国風甘辛あえ）</p>
                    <p className="menu-price-wrapper">
                      {/* <span className="menu-price"></span>¥420 */}
                      {/* <span className="menu-price"></span>¥460 */}
                      <span className="menu-price"></span>¥480
                    </p>
                  </div>
                  <div className="menu-caption">
                    <p className="menu-name">牛スジ韓国煮</p>
                    <p className="menu-price-wrapper">
                      {/* <span className="menu-price"></span>¥420 */}
                      {/* <span className="menu-price"></span>¥460 */}
                      <span className="menu-price"></span>¥480
                    </p>
                  </div>
                  <div className="menu-caption">
                    <p className="menu-name">ピリ辛きゅうり漬け</p>
                    <p className="menu-price-wrapper">
                      {/* <span className="menu-price"></span>¥420 */}
                      <span className="menu-price"></span>¥460
                    </p>
                  </div>
                  <div className="menu-caption">
                    <p className="menu-tax"></p>
                  </div>
                </Row>

                <Row className="menu-wrapper mb-5" xs={1} md={1}>
                  <div className="menu-subtitile-wrapper">
                    <p className="menu-subtitile">
                      <strong>サラダ　/　野菜焼き</strong>
                    </p>
                  </div>
                  <div className="menu-caption">
                    <p className="menu-name">
                      野菜サラダ（和風/ゴマダレ/青じそ）
                    </p>
                    <p className="menu-price-wrapper">
                      {/* <span className="menu-price"></span>¥470 */}
                      {/* <span className="menu-price"></span>¥500 */}
                      <span className="menu-price"></span>¥550
                    </p>
                  </div>
                  <div className="menu-caption">
                    <p className="menu-name">
                      ツナサラダ（和風/ゴマダレ/青じそ）
                    </p>
                    <p className="menu-price-wrapper">
                      {/* <span className="menu-price"></span>¥520 */}
                      {/* <span className="menu-price"></span>¥570 */}
                      <span className="menu-price"></span>¥620
                    </p>
                  </div>
                  <div className="menu-caption">
                    <p className="menu-name">
                      ヘルシー海藻サラダ（和風/ゴマダレ/青じそ）
                    </p>
                    <p className="menu-price-wrapper">
                      {/* <span className="menu-price"></span>¥520 */}
                      {/* <span className="menu-price"></span>¥570 */}
                      <span className="menu-price"></span>¥620
                    </p>
                  </div>
                  <div className="menu-caption">
                    <p className="menu-name">ムンチサラダ</p>
                    <p className="menu-price-wrapper">
                      {/* <span className="menu-price"></span>¥470 */}
                      {/* <span className="menu-price"></span>¥500 */}
                      <span className="menu-price"></span>¥600
                    </p>
                  </div>
                  <div className="menu-caption">
                    <p className="menu-name">チョレギサラダ</p>
                    <p className="menu-price-wrapper">
                      {/* <span className="menu-price"></span>¥480 */}
                      {/* <span className="menu-price"></span>¥520 */}
                      <span className="menu-price"></span>¥600
                    </p>
                  </div>
                  <div className="menu-caption">
                    <p className="menu-name">シーザーサラダ</p>
                    <p className="menu-price-wrapper">
                      {/* <span className="menu-price"></span>¥520 */}
                      {/* <span className="menu-price"></span>¥570 */}
                      <span className="menu-price"></span>¥620
                    </p>
                  </div>
                  <div className="menu-caption">
                    <p className="menu-name">
                      チシャ（唐辛子味噌付きサニーレタス）
                    </p>
                    <p className="menu-price-wrapper">
                      {/* <span className="menu-price"></span>¥430 */}
                      {/* <span className="menu-price"></span>¥450 */}
                      <span className="menu-price"></span>¥480
                    </p>
                  </div>
                  <div className="menu-caption">
                    <p className="menu-name">
                      野菜焼き盛り合わせ（キャベツ/ピーマン/かぼちゃ/人参等）
                    </p>
                    <p className="menu-price-wrapper">
                      {/* <span className="menu-price"></span>¥430 */}
                      {/* <span className="menu-price"></span>¥450 */}
                      <span className="menu-price"></span>¥480
                    </p>
                  </div>
                  <div className="menu-caption">
                    <p className="menu-name">野菜焼き単品</p>
                    <p className="menu-price-wrapper">
                      {/* <span className="menu-price"></span>¥280 */}
                      {/* <span className="menu-price"></span>¥300 */}
                      <span className="menu-price"></span>¥350
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
