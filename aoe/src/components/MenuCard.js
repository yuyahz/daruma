import React from "react";
import { Container, Row, Col, Button, Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { CardData } from "../config/data";
import * as FadeIn from "./FadeIn";

const Styles = styled.div`
  .SideSpace {
    margin: 0% 10% 10% 10%;
    -webkit-flex-direction: row;
    flex-direction: row;
  }

  .CardSec {
    padding: 4% 4% 10%;
  }

  .CardRadius {
    border-radius: 50px 70px 70px 0;
    filter: drop-shadow(2px 3px 5px rgba(0, 0, 0, 0.5));
  }

  .CardPic {
    border-radius: 50px 70px 0 0;
  }

  .CardTitle {
    color: #c73d13;
    font-size: 140%;
    font-family: "Noto Serif JP", serif;
    font-weight: bold;
  }

  .CardText {
    font-size: 80%;
  }

  .CardButton {
    font-size: 80%;
    border-radius: 50px 70px 70px 0;
    filter: drop-shadow(1px 2px 1px rgba(0, 0, 0, 0.2));
  }

  .CardButtonText {
    text-decoration: none;
    color: #fff;
  }
`;

const MenuCardColumn = ({ cardData }) => (
  <Col className="CardSec" xs={12} md={4}>
    <FadeIn.Up>
      <Card className="CardRadius">
        <Card.Img
          className="CardPic"
          variant="top"
          src={cardData.cardImg}
          alt="Card"
        />
        <Card.Body>
          <Card.Title className="CardTitle">{cardData.cardTitle}</Card.Title>
          <Card.Text>
            <p className="CardText">{cardData.cardText}</p>
          </Card.Text>
          <Link to={`/menu/${cardData.id}`} className="CardButtonText">
          <Button className="CardButton" variant="primary">
              詳しく
          </Button>
          </Link>
        </Card.Body>
      </Card>
    </FadeIn.Up>
  </Col>
);

export const MenuCard = () => (
  <Styles>
    <Container fluid>
      <Row className="SideSpace">
        {CardData.map((data) => (
          <MenuCardColumn key={data.id} cardData={data} />
        ))}
      </Row>
    </Container>
  </Styles>
);
