import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Row, Col, ListGroup, Tab } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
  .contents {
    font-family: "Noto Serif JP", serif;
    color: #f3f0db;
  }

  .tab {
    margin: 6%;
  }

  .tabFrame {
    border: 5px solid #fff;
    border-radius: 15px;
    /* filter: drop-shadow(2px 3px 5px rgba(0, 0, 0, 0.2)); */
    background-color: #007bff;
  }

  .tabContent {
    margin: 8%;
  }

  .title {
    color: #f3f0db;
    padding-bottom: 5%;
  }

  .br {
    white-space: pre-wrap;
  }

  .font {
    font-size: 20px;
    font-weight: medium;
  }

  .calender {
    margin: 8% 0 8% 0;
    text-align: center;
    padding: 3%;
    border-radius: 15px;
    background-color: #fff;
    filter: drop-shadow(2px 3px 5px rgba(0, 0, 0, 0.2));
  }

  .bold {
    font-weight: 900;
  }

  .list-group {
    filter: none;
  }

  .date {
    filter: drop-shadow(2px 3px 5px rgba(0, 0, 0, 0.2));
  }

  .list-group {
    filter: none;
  }
`;

export const NewsList = () => {
  const [selectedTab, setSelectedTab] = useState("Article");
  const history = useHistory();

  const handleTabSelect = (key, event) => {
    event.preventDefault();
    setSelectedTab(key);
    history.push(`#${key}`);
  };

  return (
    <Styles>
      <Row>
        <Col>
          <Tab.Container activeKey={selectedTab} onSelect={handleTabSelect}>
            <Row>
              <Col sm={12} lg={4} className="date order-2 order-lg-1">
                <ListGroup className="tab">
                  <ListGroup.Item
                    action
                    href="Article"
                    active={selectedTab === "Article"}
                    onClick={(e) => handleTabSelect("Article", e)}
                  >
                    2025.1.1 <h6>新年のご挨拶と1月定休日のお知らせ</h6>
                  </ListGroup.Item>

                  <ListGroup.Item
                    action
                    href="Article2"
                    active={selectedTab === "Article2"}
                    onClick={(e) => handleTabSelect("Article2", e)}
                  >
                    2024.12.27 <h6>ご挨拶と年末年始定休日のお知らせ</h6>
                  </ListGroup.Item>

                  <ListGroup.Item
                    action
                    href="Article3"
                    active={selectedTab === "Article3"}
                    onClick={(e) => handleTabSelect("Article3", e)}
                  >
                    2020.11.17 <h6>New HP</h6>
                  </ListGroup.Item>

                  <ListGroup.Item
                    action
                    href="Article4"
                    active={selectedTab === "Article4"}
                    onClick={(e) => handleTabSelect("Article4", e)}
                  >
                    2011.4.14 <h6>義援金</h6>
                  </ListGroup.Item>
                </ListGroup>
              </Col>

              <Col sm={12} lg={8} className="contents order-1 order-lg-2">
                <Tab.Content className="tabFrame">
                  <Tab.Pane className="tabContent" eventKey="Article">
                    <h3 className="title">
                      🎍 新年あけましておめでとうございます 🐍
                    </h3>
                    <p className="br">
                      皆様におかれましては輝かしい新年をお迎えのこととお喜び申し上げます。
                      <br />
                      まだまだ寒さ厳しき折ではございますが、皆様方におかれましては風邪など引かないようお気をつけくださいませ。
                    </p>
                    <p className="br font">
                      2025年1月の定休日は
                      <strong> 6日</strong>,&nbsp;<strong>7日</strong>,&nbsp;
                      <strong>15日</strong>,&nbsp;<strong>20日</strong>,&nbsp;
                      <strong>27日</strong>
                      となります。
                    </p>
                    <p className="br">
                      今年もたくさんのお客様にご満足いただけるよう、スタッフ一同力を尽くしてまいります！
                      本年も何卒よろしくお願い申し上げます。
                    </p>
                    <p className="br">焼肉ダルマ青江店 スタッフ一同</p>
                  </Tab.Pane>

                  <Tab.Pane className="tabContent" eventKey="Article2">
                    <h3 className="title">ご挨拶と年末年始定休日のお知らせ</h3>
                    <p className="br">
                      今年も早いもので、年末のご挨拶をさせていただく時期となりました。
                      <br />
                      皆様におかれましては、ますますご清栄のこととお慶び申し上げます。
                      <br />
                      本年も沢山の皆様にご来店いただきました。 <br />
                      厚くお礼申し上げます。
                    </p>
                    <p className="br font">
                      年末年始のお休みは
                      <strong> 12月31日</strong> ~ <strong>1月1日</strong>
                      となります。
                    </p>
                    <p className="br font">
                      2025年1月の定休日は
                      <strong> 6日</strong>,&nbsp;<strong>7日</strong>,&nbsp;
                      <strong>15日</strong>,&nbsp;<strong>20日</strong>,&nbsp;
                      <strong>27日</strong>
                      となります。
                    </p>
                    <p className="br">
                      来年も相変わらぬご高配を頂けますようお願い申し上げて、{" "}
                      <br />
                      歳末のご挨拶とさせて頂きます。 <br />
                      それではよいお年をお過ごしくださいませ。
                    </p>
                    <p className="br">焼肉ダルマ青江店 スタッフ一同</p>
                  </Tab.Pane>

                  <Tab.Pane className="tabContent" eventKey="Article3">
                    <h3 className="title">
                      ホームページリニューアルのお知らせ
                    </h3>
                    <p className="br">
                      日頃より、焼肉ダルマ青江店のホームページをご利用いただき、誠にありがとうございます。
                    </p>
                    <p className="br">
                      本日、ホームページの全面リニューアルをいたしました。
                    </p>
                    <p className="br">
                      当ホームページは、スマートフォンやタブレット端末からもご覧いただけるレスポンシブサイトで作成してます。
                    </p>
                    <p className="br">
                      今後とも、内容の充実を図るとともに、わかりやすく・最新の情報を発信してまいりますので、何卒よろしくお願い申し上げます。
                    </p>
                  </Tab.Pane>

                  <Tab.Pane className="tabContent" eventKey="Article4">
                    <h3 className="title">義援金、店頭募金送金のご報告</h3>
                    <p className="br">
                      被災地の少しでも早い復興をお祈り申し上げます。
                    </p>
                    企業としては微力でありますが、日本赤十字社を通じて義援金をお送りいたしました。
                    引き続き店頭募金や出来る限りの支援活動は行ってまいります。
                    <p className="br">義援金</p>
                    <p className="br">焼肉ダルマ　浜店・青江店　　15万円</p>
                    <p className="br">店頭募金</p>
                    <p className="br">浜店　　　　　 　14,454円</p>
                    <p className="br">青江店　　　　　24,551円</p>
                    (すべて2011年4月14日送金)
                    皆様の善意に心から御礼申しあげます。
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Col>
      </Row>
    </Styles>
  );
};

//  NewsList.js_v1
// import React from "react";
// import { Row, Col, Image, ListGroup, Tab, TabContent } from "react-bootstrap";
// import styled from "styled-components";
// import calender from "../assets/calender2022_2023.svg";

// const Styles = styled.div`
//   .NewsSec {
//     font-family: "Noto Serif JP", serif;
//     color: #f3f0db;
//   }

//   .Tab {
//     margin: 6%;
//   }

//   .TabFrame {
//     border: 5px solid #fff;
//     border-radius: 15px;
//     /* filter: drop-shadow(2px 3px 5px rgba(0, 0, 0, 0.2)); */
//     background-color: #007bff;
//   }

//   .TabContent {
//     margin: 8%;
//   }

//   .title {
//     color: #f3f0db;
//     padding-bottom: 5%;
//   }

//   .br {
//     white-space: pre-wrap;
//   }

//   .font {
//     font-size: 20px;
//     font-weight: medium;
//   }

//   .calender {
//     margin: 8% 0 8% 0;
//     text-align: center;
//     padding: 3%;
//     border-radius: 15px;
//     background-color: #fff;
//     filter: drop-shadow(2px 3px 5px rgba(0, 0, 0, 0.2));
//   }

//   .bold {
//     font-weight: 900;
//   }

//   .list-group {
//     filter: none;
//   }

//   .order-sm-1 {
//     filter: drop-shadow(2px 3px 5px rgba(0, 0, 0, 0.2));
//   }
// `;

// export const NewsList = () => (
//   <Styles>
//     <Row>
//       <Col md={{ span: 8, offset: 2 }}>
//         <Tab.Container defaultActiveKey="Article">
//           <Row>
//             <Col sm={9} className="NewsSec order-sm-2">
//               <Tab.Content className="tabFrame">
//                 <Tab.Pane className="tabContent" eventKey="Article">
//                   <h3 className="title">2月の定休日について</h3>
//                   <p className="br">
//                     日頃より、焼肉ダルマ青江店のホームページをご利用いただき、誠にありがとうございます。
//                   </p>
//                   <p className="br font">
//                     2月のお休みは
//                     <strong>5日, 6日, 7日, 14日, 19日, 26日</strong>
//                     となります。
//                   </p>
//                   <p className="br">
//                     スタッフ一同、心よりお待ちいたしております。
//                   </p>
//                 </Tab.Pane>

//                 <Tab.Pane className="tabContent" eventKey="Article2">
//                   <h3 className="title">1月の定休日について</h3>
//                   <p className="br">
//                     日頃より、焼肉ダルマ青江店のホームページをご利用いただき、誠にありがとうございます。
//                   </p>
//                   <p className="br font">
//                     1月のお休みは <strong>1日, 10日, 15日, 22日, 29日</strong>
//                     となります。
//                   </p>
//                   <p className="br">
//                     スタッフ一同、心よりお待ちいたしております。
//                   </p>
//                 </Tab.Pane>

//                 <Tab.Pane className="tabContent" eventKey="Article3">
//                   <h3 className="title">ホームページリニューアルのお知らせ</h3>
//                   <p className="br">
//                     日頃より、焼肉ダルマ青江店のホームページをご利用いただき、誠にありがとうございます。
//                   </p>
//                   <p className="br">
//                     本日、ホームページの全面リニューアルをいたしました。
//                   </p>
//                   <p className="br">
//                     当ホームページは、スマートフォンやタブレット端末からもご覧いただけるレスポンシブサイトで作成してます。
//                   </p>
//                   <p className="br">
//                     今後とも、内容の充実を図るとともに、わかりやすく・最新の情報を発信してまいりますので、何卒よろしくお願い申し上げます。
//                   </p>
//                 </Tab.Pane>

//                 <Tab.Pane className="tabContent" eventKey="Article4">
//                   <h3 className="title">義援金、店頭募金送金のご報告</h3>
//                   <p className="br">
//                     被災地の少しでも早い復興をお祈り申し上げます。
//                   </p>
//                   企業としては微力でありますが、日本赤十字社を通じて義援金をお送りいたしました。
//                   引き続き店頭募金や出来る限りの支援活動は行ってまいります。
//                   <p className="br">義援金</p>
//                   <p className="br">焼肉ダルマ　浜店・青江店　　15万円</p>
//                   <p className="br">店頭募金</p>
//                   <p className="br">浜店　　　　　 　14,454円</p>
//                   <p className="br">青江店　　　　　24,551円</p>
//                   (すべて2011年4月14日送金) 皆様の善意に心から御礼申しあげます。
//                 </Tab.Pane>
//               </Tab.Content>
//             </Col>

//             <Col sm={3} className="order-sm-1">
//               <ListGroup className="tab">
//                 <ListGroup.Item action href="Article">
//                   2024.1.31 <h6>2月定休日</h6>
//                 </ListGroup.Item>
//                 <ListGroup.Item action href="Article2">
//                   2024.1.1 <h6>1月定休日</h6>
//                 </ListGroup.Item>
//                 <ListGroup.Item action href="Article3">
//                   2020.11.17 <h6>New HP</h6>
//                 </ListGroup.Item>
//                 <ListGroup.Item action href="Article4">
//                   2011.4.14 <h6>義援金</h6>
//                 </ListGroup.Item>
//               </ListGroup>
//             </Col>

//             {/* In order to if random day off happend
//             <Col sm={12} className="calender">
//               <Image src={calender2022_2023} alt="calender2022_2023" fluid />
//             </Col> */}
//           </Row>
//         </Tab.Container>
//       </Col>
//     </Row>
//   </Styles>
// );

// import React from "react";
// import { Row, Col, Image, ListGroup, Tab, TabContent } from "react-bootstrap";
// import styled from "styled-components";
// import calender from "../assets/calender2022_2023.svg";

// const Styles = styled.div`
//   .NewsSec {
//     font-family: "Noto Serif JP", serif;
//     color: #f3f0db;
//   }

//   .Tab {
//     margin: 6%;
//   }

//   .TabFrame {
//     border: 5px solid #fff;
//     border-radius: 15px;
//     /* filter: drop-shadow(2px 3px 5px rgba(0, 0, 0, 0.2)); */
//     background-color: #007bff;
//   }

//   .TabContent {
//     margin: 8%;
//   }

//   .title {
//     color: #f3f0db;
//     padding-bottom: 5%;
//   }

//   .br {
//     white-space: pre-wrap;
//   }

//   .font {
//     font-size: 20px;
//     font-weight: medium;
//   }

//   .calender {
//     margin: 8% 0 8% 0;
//     text-align: center;
//     padding: 3%;
//     border-radius: 15px;
//     background-color: #fff;
//     filter: drop-shadow(2px 3px 5px rgba(0, 0, 0, 0.2));
//   }

//   .bold {
//     font-weight: 900;
//   }

//   .list-group {
//     filter: none;
//   }

//   .order-sm-1 {
//     filter: drop-shadow(2px 3px 5px rgba(0, 0, 0, 0.2));
//   }
// `;

// export const NewsList = () => (
//   <Styles>
//     <Row>
//       <Col md={{ span: 8, offset: 2 }}>
//         <Tab.Container defaultActiveKey="Article">
//           <Row>
//             <Col sm={9} className="NewsSec order-sm-2">
//               <Tab.Content className="tabFrame">
//                 <Tab.Pane className="tabContent" eventKey="Article">
//                   <h3 className="title">2月の定休日について</h3>
//                   <p className="br">
//                     日頃より、焼肉ダルマ青江店のホームページをご利用いただき、誠にありがとうございます。
//                   </p>
//                   <p className="br font">
//                     2月のお休みは
//                     <strong>5日, 6日, 7日, 14日, 19日, 26日</strong>
//                     となります。
//                   </p>
//                   <p className="br">
//                     スタッフ一同、心よりお待ちいたしております。
//                   </p>
//                 </Tab.Pane>

//                 <Tab.Pane className="tabContent" eventKey="Article2">
//                   <h3 className="title">1月の定休日について</h3>
//                   <p className="br">
//                     日頃より、焼肉ダルマ青江店のホームページをご利用いただき、誠にありがとうございます。
//                   </p>
//                   <p className="br font">
//                     1月のお休みは <strong>1日, 10日, 15日, 22日, 29日</strong>
//                     となります。
//                   </p>
//                   <p className="br">
//                     スタッフ一同、心よりお待ちいたしております。
//                   </p>
//                 </Tab.Pane>

//                 <Tab.Pane className="tabContent" eventKey="Article3">
//                   <h3 className="title">ホームページリニューアルのお知らせ</h3>
//                   <p className="br">
//                     日頃より、焼肉ダルマ青江店のホームページをご利用いただき、誠にありがとうございます。
//                   </p>
//                   <p className="br">
//                     本日、ホームページの全面リニューアルをいたしました。
//                   </p>
//                   <p className="br">
//                     当ホームページは、スマートフォンやタブレット端末からもご覧いただけるレスポンシブサイトで作成してます。
//                   </p>
//                   <p className="br">
//                     今後とも、内容の充実を図るとともに、わかりやすく・最新の情報を発信してまいりますので、何卒よろしくお願い申し上げます。
//                   </p>
//                 </Tab.Pane>

//                 <Tab.Pane className="tabContent" eventKey="Article4">
//                   <h3 className="title">義援金、店頭募金送金のご報告</h3>
//                   <p className="br">
//                     被災地の少しでも早い復興をお祈り申し上げます。
//                   </p>
//                   企業としては微力でありますが、日本赤十字社を通じて義援金をお送りいたしました。
//                   引き続き店頭募金や出来る限りの支援活動は行ってまいります。
//                   <p className="br">義援金</p>
//                   <p className="br">焼肉ダルマ　浜店・青江店　　15万円</p>
//                   <p className="br">店頭募金</p>
//                   <p className="br">浜店　　　　　 　14,454円</p>
//                   <p className="br">青江店　　　　　24,551円</p>
//                   (すべて2011年4月14日送金) 皆様の善意に心から御礼申しあげます。
//                 </Tab.Pane>
//               </Tab.Content>
//             </Col>

//             <Col sm={3} className="order-sm-1">
//               <ListGroup className="tab">
//                 <ListGroup.Item action href="Article">
//                   2024.1.31 <h6>2月定休日</h6>
//                 </ListGroup.Item>
//                 <ListGroup.Item action href="Article2">
//                   2024.1.1 <h6>1月定休日</h6>
//                 </ListGroup.Item>
//                 <ListGroup.Item action href="Article3">
//                   2020.11.17 <h6>New HP</h6>
//                 </ListGroup.Item>
//                 <ListGroup.Item action href="Article4">
//                   2011.4.14 <h6>義援金</h6>
//                 </ListGroup.Item>
//               </ListGroup>
//             </Col>

//             {/* In order to if random day off happend
//             <Col sm={12} className="calender">
//               <Image src={calender2022_2023} alt="calender2022_2023" fluid />
//             </Col> */}
//           </Row>
//         </Tab.Container>
//       </Col>
//     </Row>
//   </Styles>
// );
