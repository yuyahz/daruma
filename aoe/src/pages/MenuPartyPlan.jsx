import React from "react";
import "../MenuJsx.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import PartyPlanDeco from "../assets/PartyPlanDeco.svg";

export const PartyPlan = ({ data }) => {
  return (
    <React.Fragment>
      <div className="restrict-width">
        <Container fluid={true}>
          {/* <Row className="MenuTitleSpace">
          <Col>
            <div className="MenuDeco">
              <Image
                className="MenuDecoTitle"
                src={PartyPlanDeco}
                alt="Logo"
                fluid
              />
            </div>
          </Col>
        </Row> */}

          <Row>
            <Col className="MenuTitle">
              <Image
                className="AssetTitle"
                src={PartyPlanDeco}
                alt="Logo"
                fluid
              />
            </Col>
          </Row>

          <Row className="MenuSpace">
            <Col md={{ span: 8, offset: 2 }}>
              <Row className="MenuSec" xs={1} md={1}>
                <div className="MenuCapSetParty">
                  <p>
                    ※ 表示価格は1名様料金です。
                    <p className="MenuBrParty">
                      ※コースメニューは3名様以上より承ります。
                    </p>
                  </p>
                </div>
                <div className="MenuHdCap">
                  <p className="MenuHdTitele">コース・内容</p>
                </div>
                <div className="MenuCap">
                  {/* <p className={"MenuTitle" + " " + "MenuTitleBg"}>
                  2,000円 コース
                </p> */}
                  <p className={"MenuTitle" + " " + "MenuTitleBg"}>
                    2,200円 コース
                  </p>
                </div>
                <div className="MenuCapSet">
                  <p className="MenuTitele">
                    カルビ、ブタバラ、トリ、ホルモン、トントロ、ムンチサラダ、盛キムチ、野菜焼
                  </p>
                </div>
                <div className="MenuCap">
                  {/* <p className={"MenuTitle" + " " + "MenuTitleBg"}>
                  3,000円コース
                </p> */}
                  <p className={"MenuTitle" + " " + "MenuTitleBg"}>
                    3,300円 コース
                  </p>
                </div>
                <div className={"MenuTitle" + " " + "MenuTitleBgSub"}>
                  <div className="MenuCapSet">
                    <p className="MenuTitele">
                      （Ａコース）いろんなお肉を食べたい方
                    </p>
                  </div>
                  <div className="MenuCapSet">
                    <p className="MenuTitele">
                      塩タン、カルビ、ロース、上ミノ、上ホルモン、ブタ、ムンチサラダ、盛キムチ、
                      野菜焼、本日のデザート
                    </p>
                  </div>
                </div>
                <div className={"MenuTitle" + " " + "MenuTitleBgSub"}>
                  <div className="MenuCapSet">
                    <p className="MenuTitele">
                      （Bコース）お肉をガツンと食べたい方
                    </p>
                  </div>
                  <div className="MenuCapSet">
                    <p className="MenuTitele">
                      カルビ、ロース、ブタ、ホルモン、トントロ、チシャ、もやしナムル、キムチ、
                      本日のデザート
                    </p>
                  </div>
                </div>
                <div className={"MenuTitle" + " " + "MenuTitleBgSub"}>
                  <div className="MenuCapSet">
                    <p className="MenuTitele">
                      （Ｃコース）お肉とオリジナルメニューを食べたい方　※要予約
                    </p>
                  </div>
                  <div className="MenuCapSet">
                    <p className="MenuTitele">
                      カルビ、ロース、セセリ、ブタ、ホルモン、ムンチサラダ、もやしナムル、チシャ、
                      牛スジ韓国煮、揚げ物、ピリ辛きゅうり漬け、本日のデザート
                    </p>
                  </div>
                </div>
                <div className="MenuCap">
                  {/* <p className={"MenuTitle" + " " + "MenuTitleBg"}>
                  4,000円コース
                </p> */}
                  <p className={"MenuTitle" + " " + "MenuTitleBg"}>
                    4,400円 コース
                  </p>
                </div>
                <div className="MenuCapSet">
                  <p className="MenuTitele">
                    上ロース、上カルビ、塩上タン、上ミノ、上ホルモン、ムンチサラダ、チシャ、
                    キムチ、本日のデザート
                  </p>
                </div>
                <div className="MenuCap">
                  <p className="MenuTitele">※ライスセット追加 </p>
                  <p className="MenuText">
                    <span className="MenuTextSpSingle"></span>
                  </p>
                </div>
                <div className="MenuCapSet">
                  {/* <p className="MenuTitele">
                  + 400円で中ライスとスープ小が追加できます。
                </p> */}
                  <p className="MenuTitele">
                    + 440円で中ライスとスープ小が追加できます。
                  </p>
                </div>
                <div className="MenuCap">
                  <p className="MenuTitele">※飲み放題コース追加（要予約）</p>
                  <p className="MenuText">
                    <span className="MenuTextSpSingle"></span>
                  </p>
                </div>
                <div className="MenuCapSet">
                  {/* <p className="MenuTitele">
                  各コースに + 1,500円で90分 / +
                  2,000円で120分飲み放題にできます。
                </p> */}
                  <p className="MenuTitele">
                    各コースに + 1,600円で90分 / +
                    2,200円で120分飲み放題にできます。
                  </p>
                </div>

                <div className="MenuCap">
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
