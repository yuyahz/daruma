import React from "react";
import "../MenuJsx.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import Menu_Set from "../assets/Menu_Set.svg";
import * as FadeIn from "../components/FadeIn";

export const Set = ({ data }) => {
  return (
    <React.Fragment>
      <div className="restrict-width bottom-space">
        <Container fluid={true}>
          <FadeIn.Down>
            <Row>
              <Col className="menu-title-img-container">
                <Image
                  className="menu-title-img"
                  src={Menu_Set}
                  alt="宴会メニュー"
                  fluid
                />
              </Col>
            </Row>
          </FadeIn.Down>

          <FadeIn.Left>
            <Row>
              <Col md={{ span: 8, offset: 2 }}>
                <Row className="menu-wrapper" xs={1} md={1}>
                  <div className="menu-subtitile-wrapper">
                    <p className="menu-subtitile">
                      <strong>コース　/　内容</strong>
                    </p>
                  </div>
                  <div className="menu-caption">
                    {/* <p className="menu-subtitle-bg-primary">
                  2,000円 コース
                </p> */}
                    <p className="menu-subtitle-bg-primary">2,500円 コース</p>
                  </div>
                  <div className="menu-captionSet">
                    <p className="menu-name">
                      カルビ、ブタバラ、トリ、ホルモン、トントロ、ムンチサラダ、盛キムチ、野菜焼
                    </p>
                  </div>
                  <div className="menu-caption menu-specific-spacing">
                    {/* <p className="menu-subtitle-bg-primary">
                  3,000円コース
                </p> */}
                    <p className="menu-subtitle-bg-primary">3,500円 コース</p>
                  </div>
                  <div
                    className={"MenuTitle" + " " + "menu-subtitle-bg-secondary"}
                  >
                    <div className="menu-captionSet">
                      <p className="menu-name">
                        （Ａコース）いろんなお肉を食べたい方
                      </p>
                    </div>
                    <div className="menu-captionSet">
                      <p className="menu-name">
                        塩タン、カルビ、ロース、上ミノ、上ホルモン、ブタ、ムンチサラダ、盛キムチ、
                        野菜焼、本日のデザート
                      </p>
                    </div>
                  </div>
                  <div
                    className={"MenuTitle" + " " + "menu-subtitle-bg-secondary"}
                  >
                    <div className="menu-captionSet">
                      <p className="menu-name">
                        （Bコース）お肉をガツンと食べたい方
                      </p>
                    </div>
                    <div className="menu-captionSet">
                      <p className="menu-name">
                        カルビ、ロース、ブタ、ホルモン、トントロ、チシャ、もやしナムル、キムチ、
                        本日のデザート
                      </p>
                    </div>
                  </div>
                  <div
                    className={"MenuTitle" + " " + "menu-subtitle-bg-secondary"}
                  >
                    <div className="menu-captionSet">
                      <p className="menu-name">
                        （Ｃコース）お肉とオリジナルメニューを食べたい方　※要予約
                      </p>
                    </div>
                    <div className="menu-captionSet">
                      <p className="menu-name">
                        カルビ、ロース、セセリ、ブタ、ホルモン、ムンチサラダ、もやしナムル、チシャ、
                        牛スジ韓国煮、揚げ物、ピリ辛きゅうり漬け、本日のデザート
                      </p>
                    </div>
                  </div>
                  <div className="menu-caption menu-specific-spacing">
                    {/* <p className="menu-subtitle-bg-primary">
                  4,000円コース
                </p> */}
                    <p className="menu-subtitle-bg-primary">4,500円 コース</p>
                  </div>
                  <div className="menu-captionSet">
                    <p className="menu-name">
                      上ロース、上カルビ、塩上タン、上ミノ、上ホルモン、ムンチサラダ、チシャ、
                      キムチ、本日のデザート
                    </p>
                  </div>
                  <div className="menu-caption">
                    <p className="menu-name">※ライスセット追加 </p>
                    <p className="menu-price-wrapper">
                      <span className="menu-priceSingle"></span>
                    </p>
                  </div>
                  <div className="menu-captionSet">
                    {/* <p className="menu-name">
                  + 400円で中ライスとスープ小が追加できます。
                </p> */}
                    <p className="menu-name">
                      + 500円で中ライスとスープ小が追加できます。
                    </p>
                  </div>
                  <div className="menu-caption">
                    <p className="menu-name">※飲み放題コース追加（要予約）</p>
                    <p className="menu-price-wrapper">
                      <span className="menu-priceSingle"></span>
                    </p>
                  </div>
                  <div className="menu-captionSet">
                    {/* <p className="menu-name">
                  各コースに + 1,500円で90分 / +
                  2,000円で120分飲み放題にできます。
                </p> */}
                    <p className="menu-name">
                      各コースに + 2,000円で90分 / +
                      2,500円で120分飲み放題にできます。
                    </p>
                  </div>

                  <div className="menu-caption">
                    {/* <p className="menu-tax">※税抜き価格表示</p> */}
                    <p className="menu-tax">※税込価格表示</p>
                  </div>

                  <div className="menu-captionSetParty">
                    <p>
                      ※ 表示価格は1名様料金です。
                      <p className="menu-line-break-party">
                        ※ コースメニューは3名様以上より承ります。
                      </p>
                    </p>
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
