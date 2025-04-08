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
    color: #fff;

    img {
      max-width: 100%;
    }

    @media screen and (max-width: 576px) {
      margin-bottom: 20%;
    }

    .contact {
      margin: 0 auto;
      width: 100%;
      max-width: 727px;
    }

    .contact-container {
      border: solid 4px #007bff;
      border-radius: 130px;
      padding: 30px 106px;

      p {
        margin-bottom: 24px;
      }

      h2 {
        margin-bottom: 0;
      }

      h4 {
        margin-bottom: 24px;
      }

      @media screen and (max-width: 795px) {
        padding: 3.774vw 12.579vw;

        h4 {
          margin-bottom: 16px;
        }

        .bottom-spacing {
          margin-bottom: 2px;
        }
      }

      .no-decoration {
        text-decoration: none;
        color: inherit;
      }

      @media screen and (max-width: 576px) {
        border-radius: 30px;
        padding: 6.5vw 5vw;
      }
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
          <Col md={{ span: 6, offset: 3 }}>
            <div style={{ borderRadius: "30px", overflow: "hidden" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.862202099409!2d133.9139300772949!3d34.63292238684366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3554078f39efa369%3A0xb31d46e5bf98f192!2sYakiniku%20Daruma!5e0!3m2!1sen!2sca!4v1744074812328!5m2!1sen!2sca"
                width="100%"
                height="400"
                style={{ border: 0, display: "block" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </Col>
        </Row>

        <Row className="BottomSet d-flex justify-content-center">
          <Col>
            <Image src={CardList} alt="CardList" fluid />
          </Col>
        </Row>

        <Row className="BottomSet">
          <Col className="container-fluid">
            <div className="contact">
              <div className="contact-container">
                <h4>ご予約お問い合わせはこちらまで。</h4>
                <p>
                  ※ご予約は60名様まで承ります。お肉のお持ち帰りは基本的にFAXにて承っておりますが電話注文でも可能です。
                </p>
                <div className="d-none d-md-block">
                  <a href="tel:0862243525" className="no-decoration">
                    <h2>お問い合わせ・086 - 224 - 3525</h2>
                  </a>
                </div>
                <div className="d-block d-md-none">
                  <h4 className="bottom-spacing">お問い合わせ</h4>
                  <a href="tel:0862243525" className="no-decoration">
                    <h2>086 - 224 - 3525</h2>
                  </a>
                </div>
              </div>
            </div>
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
