import React from "react";
import styled from "styled-components";
import * as FadeIn from "./components/FadeIn";
import { Row, Col, Image } from "react-bootstrap";
import { NewsList } from "./components/NewsList";
import { BottomSet } from "./components/BottomSet";

const Styles = styled.div`
  .Article {
    margin: 3% 0 20% 0;
    border-radius: 15px;
  }

  .NewsTitleWrapper {
    color: #007bff;
    font-weight: bold;
    letter-spacing: 0.2em;
    text-align: center;
    padding-top: 10%;

    p {
      color: white;
      font-size: 24px;
    }
  }

  @media screen and (max-width: 992px) {
    .NewsTitleWrapper {
      padding-top: 60px;
    }
  }

  @media screen and (max-width: 576px) {
    .Article {
      margin: 3% 0 30% 0;
    }
  }
`;

export const News = () => (
  <Styles>
    <div className="restrict-width">
      <FadeIn.Down>
        <Row className="NewsTitleWrapper">
          <Col>
            <p>新着情報</p>
          </Col>
        </Row>
        <Row>
          <Col lg={{ span: 10, offset: 1 }}>
            <div className="Article">
              <NewsList />
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 10, offset: 1 }}>
            <div>
              <BottomSet />
            </div>
          </Col>
        </Row>
      </FadeIn.Down>
    </div>
  </Styles>
);
