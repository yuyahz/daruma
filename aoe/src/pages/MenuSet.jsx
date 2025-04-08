import React from "react";
import "../MenuJsx.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import Menu_Set from "../assets/Menu_Set.svg";

export const Set = ({ data }) => {
  return (
    <React.Fragment>
      <div className="restrict-width bottom-space">
        <Container fluid={true}>
          <Row>
            <Col className="MenuTitleImgContainer">
              <Image
                className="MenuTitleImg"
                src={Menu_Set}
                alt="宴会メニュー"
                fluid
              />
            </Col>
          </Row>

          <Row>
            <Col md={{ span: 8, offset: 2 }}>
              <Row className="MenuWrapper" xs={1} md={1}>
                <div className="MenuSubtitleWrapper">
                  <p className="MenuSubtitle">
                    <strong>コース　/　内容</strong>
                  </p>
                </div>
                <div className="MenuCaption">
                  {/* <p className={"MenuTitle" + " " + "MenuTitleBg"}>
                  2,000円 コース
                </p> */}
                  <p className={"MenuTitle" + " " + "MenuTitleBg"}>
                    2,500円 コース
                  </p>
                </div>
                <div className="MenuCaptionSet">
                  <p className="MenuTitele">
                    カルビ、ブタバラ、トリ、ホルモン、トントロ、ムンチサラダ、盛キムチ、野菜焼
                  </p>
                </div>
                <div className="MenuCaption SpecificSpace">
                  {/* <p className={"MenuTitle" + " " + "MenuTitleBg"}>
                  3,000円コース
                </p> */}
                  <p className={"MenuTitle" + " " + "MenuTitleBg"}>
                    3,500円 コース
                  </p>
                </div>
                <div className={"MenuTitle" + " " + "MenuTitleBgSub"}>
                  <div className="MenuCaptionSet">
                    <p className="MenuTitele">
                      （Ａコース）いろんなお肉を食べたい方
                    </p>
                  </div>
                  <div className="MenuCaptionSet">
                    <p className="MenuTitele">
                      塩タン、カルビ、ロース、上ミノ、上ホルモン、ブタ、ムンチサラダ、盛キムチ、
                      野菜焼、本日のデザート
                    </p>
                  </div>
                </div>
                <div className={"MenuTitle" + " " + "MenuTitleBgSub"}>
                  <div className="MenuCaptionSet">
                    <p className="MenuTitele">
                      （Bコース）お肉をガツンと食べたい方
                    </p>
                  </div>
                  <div className="MenuCaptionSet">
                    <p className="MenuTitele">
                      カルビ、ロース、ブタ、ホルモン、トントロ、チシャ、もやしナムル、キムチ、
                      本日のデザート
                    </p>
                  </div>
                </div>
                <div className={"MenuTitle" + " " + "MenuTitleBgSub"}>
                  <div className="MenuCaptionSet">
                    <p className="MenuTitele">
                      （Ｃコース）お肉とオリジナルメニューを食べたい方　※要予約
                    </p>
                  </div>
                  <div className="MenuCaptionSet">
                    <p className="MenuTitele">
                      カルビ、ロース、セセリ、ブタ、ホルモン、ムンチサラダ、もやしナムル、チシャ、
                      牛スジ韓国煮、揚げ物、ピリ辛きゅうり漬け、本日のデザート
                    </p>
                  </div>
                </div>
                <div className="MenuCaption SpecificSpace">
                  {/* <p className={"MenuTitle" + " " + "MenuTitleBg"}>
                  4,000円コース
                </p> */}
                  <p className={"MenuTitle" + " " + "MenuTitleBg"}>
                    4,500円 コース
                  </p>
                </div>
                <div className="MenuCaptionSet">
                  <p className="MenuTitele">
                    上ロース、上カルビ、塩上タン、上ミノ、上ホルモン、ムンチサラダ、チシャ、
                    キムチ、本日のデザート
                  </p>
                </div>
                <div className="MenuCaption">
                  <p className="MenuTitele">※ライスセット追加 </p>
                  <p className="MenuText">
                    <span className="MenuTextSpSingle"></span>
                  </p>
                </div>
                <div className="MenuCaptionSet">
                  {/* <p className="MenuTitele">
                  + 400円で中ライスとスープ小が追加できます。
                </p> */}
                  <p className="MenuTitele">
                    + 500円で中ライスとスープ小が追加できます。
                  </p>
                </div>
                <div className="MenuCaption">
                  <p className="MenuTitele">※飲み放題コース追加（要予約）</p>
                  <p className="MenuText">
                    <span className="MenuTextSpSingle"></span>
                  </p>
                </div>
                <div className="MenuCaptionSet">
                  {/* <p className="MenuTitele">
                  各コースに + 1,500円で90分 / +
                  2,000円で120分飲み放題にできます。
                </p> */}
                  <p className="MenuTitele">
                    各コースに + 2,000円で90分 / +
                    2,500円で120分飲み放題にできます。
                  </p>
                </div>

                <div className="MenuCaption">
                  {/* <p className="MenuTax">※税抜き価格表示</p> */}
                  <p className="MenuTax">※税込価格表示</p>
                </div>

                <div className="MenuCaptionSetParty">
                  <p>
                    ※ 表示価格は1名様料金です。
                    <p className="MenuBrParty">
                      ※ コースメニューは3名様以上より承ります。
                    </p>
                  </p>
                </div>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};
