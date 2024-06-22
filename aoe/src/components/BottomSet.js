import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import styled from "styled-components";
import CardList from "../assets/CardList-v2.svg";
import Contact from "../assets/Contact.svg";
import Copylight from "../assets/Copylight.svg";

const Styles = styled.div`
  .BottomSet {
    padding: 2% 0;
    margin-bottom: 10%;
    text-align: center;
    color: #ffff;
  }
`;

export const BottomSet = () => (
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
          <p>昼の営業時間 : 11:00 ～ 15:00 ( オーダーストップ 14:30 ) </p>
          <p>夜の営業時間 : 17:00 ～ 22:00 ( オーダーストップ 21:30 ) </p>
          <p>定休日: 毎週月曜日(祝日の場合は水曜)</p>
        </Col>
      </Row>

      <Row className="BottomSet">
        <Col md={{ span: 4, offset: 4 }}>
          <Image
            className="CopylightIcon"
            src={Copylight}
            alt="Copylight"
            fluid
          />
        </Col>
      </Row>
    </Container>
  </Styles>
);
