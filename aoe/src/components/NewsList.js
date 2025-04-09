import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Row, Col, ListGroup, Tab } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
  .contents {
    h3,
    strong {
      font-family: "Noto Serif JP", serif;
    }
  }

  .tab-wrapper {
    margin: 6%;

    @media screen and (max-width: 992px) {
      margin: 3% 0;
    }
  }

  .tab-contnet-wrapper {
    border: 5px solid #fff;
    border-radius: 15px;
    background-color: #007bff;

    @media screen and (max-width: 576px) {
      border: 1px solid #fff;
    }
  }

  .tab-contnet {
    margin: 8%;
  }

  .title {
    color: #f3f0db;
    padding-bottom: 5%;
  }

  .line-break {
    white-space: pre-wrap;
  }

  .font-attention {
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

  .list-group {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 12px;
    margin: 20px 0;
    filter: none;
  }

  .list-group-item {
    width: 100%;
    border-radius: 20px;
    padding: 16px;
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, 0.125);
    transition: background-color 0.3s, color 0.3s, box-shadow 0.3s;

    h6 {
      display: inline-block;
      margin: 0 0 0 8px;
    }

    &:first-child {
      border-top-left-radius: 20px !important;
      border-top-right-radius: 20px !important;
    }

    &:last-child {
      border-bottom-left-radius: 20px !important;
      border-bottom-right-radius: 20px !important;
    }

    // Hover effect shared by both normal and active items
    &:hover {
      background-color: #007bff !important;
      color: white !important;
    }
    &.active {
      background-color: #007bff !important;
      color: white !important;
      filter: drop-shadow(2px 3px 5px rgba(0, 0, 0, 0.2));

      &::before {
        color: white;
      }
    }
  }

  @media screen and (max-width: 992px) {
    .list-group-item {
      width: auto;
      padding: 8px 16px;
    }
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
                <ListGroup className="tab-wrapper">
                  <ListGroup.Item
                    action
                    href="Article"
                    active={selectedTab === "Article"}
                    onClick={(e) => handleTabSelect("Article", e)}
                  >
                    2025.3.31 <h6>4月定休日のお知らせ</h6>
                  </ListGroup.Item>

                  <ListGroup.Item
                    action
                    href="Article1"
                    active={selectedTab === "Article1"}
                    onClick={(e) => handleTabSelect("Article1", e)}
                  >
                    2025.2.27 <h6>3月定休日のお知らせ</h6>
                  </ListGroup.Item>

                  <ListGroup.Item
                    action
                    href="Article2"
                    active={selectedTab === "Article2"}
                    onClick={(e) => handleTabSelect("Article2", e)}
                  >
                    2025.1.1 <h6>新年のご挨拶</h6>
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
                <Tab.Content className="tab-contnet-wrapper">
                  <Tab.Pane className="tab-contnet" eventKey="Article">
                    <h3 className="title">4月の定休日</h3>
                    <p className="line-break">
                      日頃より、焼肉ダルマ青江店のホームページをご利用いただき、誠にありがとうございます。
                    </p>
                    <p>4月のお休みは、</p>
                    <p className="line-break font">
                      <strong>4月7日</strong>&nbsp;/&nbsp;
                      <strong>4月14日</strong>&nbsp;/&nbsp;
                      <strong>4月21日</strong>&nbsp;/&nbsp;
                      <strong>4月22日</strong>&nbsp;/&nbsp;
                      <strong>4月28日</strong>
                    </p>
                    <p className="line-break">
                      スタッフ一同、心よりお待ちいたしております。
                    </p>
                    <p className="line-break">焼肉ダルマ青江店 スタッフ一同</p>
                  </Tab.Pane>

                  <Tab.Pane className="tab-contnet" eventKey="Article1">
                    <h3 className="title">3月の定休日</h3>
                    <p className="line-break">
                      日頃より、焼肉ダルマ青江店のホームページをご利用いただき、誠にありがとうございます。
                    </p>
                    <p>3月のお休みは、</p>
                    <p className="line-break font-attention">
                      <strong>3月3日</strong>&nbsp;/&nbsp;
                      <strong>3月10日</strong>&nbsp;/&nbsp;
                      <strong>3月17日</strong>&nbsp;/&nbsp;
                      <strong>3月24日</strong>&nbsp;/&nbsp;
                      <strong>3月25日</strong>&nbsp;/&nbsp;
                      <strong>3月31日</strong>
                    </p>
                    <p className="line-break">
                      スタッフ一同、心よりお待ちいたしております。
                    </p>
                    <p className="line-break">焼肉ダルマ青江店 スタッフ一同</p>
                  </Tab.Pane>

                  {/* 臨時休業のお知らせ
                  
                  <Tab.Pane className="tab-contnet" eventKey="Article1">
                    <h3 className="title">臨時休業のお知らせ</h3>
                    <p className="line-break">
                      いつもご愛顧いただき、ありがとうございます。
                      誠に勝手ではございますが、下記日程は臨時休業とさせていただきます。
                    </p>
                    <p className="line-break font">
                      <strong>2月12日</strong>&nbsp;/&nbsp;
                      <strong>2月13日</strong>
                    </p>
                    <p className="line-break">
                      お客様にはご不便とご迷惑をお掛けいたしますが、ご了承の程、よろしくお願いいたします。
                    </p>
                    <p className="line-break">焼肉ダルマ青江店 スタッフ一同</p>
                  </Tab.Pane> */}

                  <Tab.Pane className="tab-contnet" eventKey="Article2">
                    <h3 className="title">
                      🎍 新年あけましておめでとうございます 🐍
                    </h3>
                    <p className="line-break">
                      皆様におかれましては輝かしい新年をお迎えのこととお喜び申し上げます。
                      <line-break />
                      まだまだ寒さ厳しき折ではございますが、皆様方におかれましては風邪など引かないようお気をつけくださいませ。
                    </p>
                    <p>2025年1月の定休日は、</p>
                    <p className="line-break font-attention">
                      <strong>6日</strong>&nbsp;/&nbsp;
                      <strong>7日</strong>&nbsp;/&nbsp;
                      <strong>15日</strong>&nbsp;/&nbsp;
                      <strong>20日</strong>&nbsp;/&nbsp;
                      <strong>27日</strong>
                    </p>
                    <p className="line-break">
                      今年もたくさんのお客様にご満足いただけるよう、スタッフ一同力を尽くしてまいります！
                      本年も何卒よろしくお願い申し上げます。
                    </p>
                    <p className="line-break">焼肉ダルマ青江店 スタッフ一同</p>
                  </Tab.Pane>

                  <Tab.Pane className="tab-contnet" eventKey="Article3">
                    <h3 className="title">
                      ホームページリニューアルのお知らせ
                    </h3>
                    <p className="line-break">
                      日頃より、焼肉ダルマ青江店のホームページをご利用いただき、誠にありがとうございます。
                    </p>
                    <p className="line-break">
                      本日、ホームページの全面リニューアルをいたしました。
                    </p>
                    <p className="line-break">
                      当ホームページは、スマートフォンやタブレット端末からもご覧いただけるレスポンシブサイトで作成してます。
                    </p>
                    <p className="line-break">
                      今後とも、内容の充実を図るとともに、わかりやすく・最新の情報を発信してまいりますので、何卒よろしくお願い申し上げます。
                    </p>
                  </Tab.Pane>

                  <Tab.Pane className="tab-contnet" eventKey="Article4">
                    <h3 className="title">義援金、店頭募金送金のご報告</h3>
                    <p className="line-break">
                      被災地の少しでも早い復興をお祈り申し上げます。
                    </p>
                    企業としては微力でありますが、日本赤十字社を通じて義援金をお送りいたしました。
                    引き続き店頭募金や出来る限りの支援活動は行ってまいります。
                    <p className="line-break">義援金</p>
                    <p className="line-break">
                      焼肉ダルマ　浜店・青江店　　15万円
                    </p>
                    <p className="line-break">店頭募金</p>
                    <p className="line-break">浜店　　　　　 　14,454円</p>
                    <p className="line-break">青江店　　　　　24,551円</p>
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
