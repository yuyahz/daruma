import React from "react";
import { Container, Row, Col, Button, Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { CardData } from "../config/data";
import * as FadeIn from "./FadeIn";

const Styles = styled.div`
  .card-block-container {
    padding: 2%;

    p {
      color: #495057;
      font-size: 14px;
    }
  }

  .card-decoration {
    border-radius: 20px;
    filter: drop-shadow(2px 3px 5px rgba(0, 0, 0, 0.5));
  }

  .card-image {
    border-radius: 20px 20px 0 0;
  }

  .card-title {
    color: #c73d13;
    font-size: 24px;
    font-family: "Noto Serif JP", serif;
    font-weight: bold;
  }

  .card-button {
    width: 100%;
    background-color: #007bff;
    color: white;
    border: none;
    transition: all 0.3s ease;

    text-align: center;
    width: 160px;
    font-size: 14px;
    font-weight: 500;
    padding: 1rem;
    border-radius: 50px;

    a {
      text-decoration: none;
    }
  }

  .card-button:hover {
    background-color: #0056b3; /* slightly darker for hover */
    color: white;
    filter: drop-shadow(2px 3px 5px rgba(0, 0, 0, 0.2));
  }

  .card-button::before {
    color: white;
  }

  .card-space {
    margin: 7% 5% 5% 5%;
    -webkit-flex-direction: row;
    flex-direction: row;
  }

  .card-text {
    padding-bottom: 8px;
  }

  @media screen and (max-width: 768px) {
    .card-space {
      margin: 44px 0;
    }
    .card-block-container {
      margin-top: 24px;
    }
    .card-block-container :first-child {
      margin-top: 0;
    }
    .card-body {
      padding: 1.25rem 12px;
    }
    .card-text {
      padding-bottom: 0;
    }
    .card-decoration {
      border-radius: 10px;
    }
    .card-image {
      border-radius: 10px 10px 0 0;
    }
  }
`;

const MenuCardColumn = ({ cardData }) => (
  <Col className="card-block-container " xs={12} md={4}>
    <FadeIn.Up>
      <Card className="card-decoration ">
        <Card.Img
          className="card-image"
          variant="top"
          src={cardData.cardImg}
          alt="Card"
        />
        <Card.Body>
          <Card.Title className="card-title">{cardData.cardTitle}</Card.Title>
          <Card.Text>
            <p>{cardData.cardText}</p>
          </Card.Text>
          <div className="d-flex justify-content-center">
            <Link to={`/menu/${cardData.id}`} className="d-block w-100 mt-3">
              <Button className="card-button w-100" variant="primary">
                詳しく
              </Button>
            </Link>
          </div>
        </Card.Body>
      </Card>
    </FadeIn.Up>
  </Col>
);

export const MenuCard = () => (
  <Styles>
    <Container fluid>
      <Row className="card-space">
        {CardData.map((data) => (
          <MenuCardColumn key={data.id} cardData={data} />
        ))}
      </Row>
    </Container>
  </Styles>
);
