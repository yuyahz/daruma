import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import styled from "styled-components";
import { NewsList } from "./components/NewsList";
import { BottomSet } from "./components/BottomSet";

const Styles = styled.div`
  .News {
    text-align: center;
  }

  .Article {
    margin: 3% 0 10% 0;
    padding: 7% 3%;
    background-color: white;
    border-radius: 15px;
    /* filter: drop-shadow(2px 3px 5px rgba(1, 1, 0, 0.3)); */
  }

  .NewsTitle {
    color: #007bff;
    font-weight: bold;
    letter-spacing: 0.2em;
    text-align: center;

    p {
      color: white;
      font-size: 1.5rem;
    }

    @media screen and (max-width: 992px) {
      margin-top: 3rem;
    }
  }
`;

export const News = () => (
  <Styles>
    <Row className="NewsTitle">
      <Col>
        <p>新着情報</p>
      </Col>
    </Row>
    <Row>
      <Col md={{ span: 10, offset: 1 }}>
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
  </Styles>
);
