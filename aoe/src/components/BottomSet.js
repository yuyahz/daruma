import React, { useState } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import styled from "styled-components";
import CardList from "../assets/CardList-v2.svg";
import Contact from "../assets/Contact.svg";
import Copylight from "../assets/Copylight_logo.svg";

const Styles = styled.div`
  .BottomSet {
    padding: 2% 0;
    margin-bottom: 7%;
    text-align: center;
    color: #ffff;

    @media screen and (max-width: 576px) {
      margin-bottom: 20%;
    }

    .hour-day {
      @media screen and (max-width: 576px) {
        margin-bottom: 6px;
      }
    }
  }

  .BottomSet:last-child {
    padding: 0;
    margin-bottom: 30px;

    p {
      @media screen and (max-width: 576px) {
        font-size: 12px;
      }
    }
  }
`;

export const BottomSet = () => {
  const [year] = useState(new Date().getFullYear());

  return (
    <Styles>
      <Container fluid>
        <Row className="BottomSet">
          <Col md={{ span: 4, offset: 4 }}>
            <Image src={CardList} alt="CardList" fluid />
          </Col>
        </Row>

        <Row className="BottomSet">
          <Col md={{ span: 6, offset: 3 }}>
            <Image src={Contact} alt="Contact" fluid />
          </Col>
        </Row>

        <Row className="BottomSet">
          <Col md={{ span: 6, offset: 3 }}>
            <p className="hour-day">
              昼の営業時間 : 11:00 ～ 15:00 ( オーダーストップ 14:30 ){" "}
            </p>
            <p className="hour-day">
              夜の営業時間 : 17:00 ～ 22:00 ( オーダーストップ 21:30 ){" "}
            </p>
            <p className="hour-day">定休日: 毎週月曜日(祝日の場合は水曜)</p>
          </Col>
        </Row>

        <Row className="BottomSet">
          <Col md={{ span: 6, offset: 3 }}>
            <Image src={Copylight} alt="Copylight" fluid />
            <p style={{ margin: "16px 0 0 0" }}>
              &copy; {year} 焼肉ダルマ 青江店 All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </Styles>
  );
};
