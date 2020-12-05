import React from "react";
import "./Home.css";
import { Container, Row, Col, Carousel, Image } from "react-bootstrap";
import TitleMainDeco from "./assets/TitleMainDeco.svg";
import TitleHalfCircle from "./assets/TitleHalfCircle.svg";
import ScrollIcon from "./assets/ScrollIcon.svg";
import Slider_1 from "./assets/Slider_1.png";
import Slider_2 from "./assets/Slider_2.png";
import Slider_3 from "./assets/Slider_3.png";
import IntroPic_1 from "./assets/IntroPic_1.png";
import IntroPic_2 from "./assets/IntroPic_2.png";
import IntroPic_3 from "./assets/IntroPic_3.png";
import Takeout from "./assets/Takeout.svg";
import TakeoutDeco from "./assets/TakeoutDeco.svg";
import PointCard from "./assets/PointCard.svg";
import PointCardDeco from "./assets/PointCardDeco.svg";
import { NewsList } from "./components/NewsList";
import { BottomSet } from "./components/BottomSet";

export const Home = () => (
  <Container fluid={true}>
    <Row className="Title">
      <Col sm>
        <div className="d-none d-sm-block">
          <Image
            className="TitleHalfCircle"
            src={TitleHalfCircle}
            alt="HalfCircle"
            fluid
          />
        </div>
      </Col>
      <Col sm className="TitleDeco">
        <Image src={TitleMainDeco} alt="MainDeco" fluid />
      </Col>
      <Col sm className="ScrollSec d-none d-sm-block">
        <Image className="Scroll" src={ScrollIcon} alt="ScrollIcon" fluid />
      </Col>
    </Row>

    <Container fluid className="CarouselBg">
      <Row>
        <Col sm={6} className="CarouselCap">
          <div className="CarouselText">
            <p>五 十 年 守 り 続 け た</p>
            <p>味 を そ の ま ま に</p>
            <p>昔 か ら 変 わ ら ぬ</p>
            <p>伝 統 の 味 を 届 け る 為 に</p>
            <p>そ し て こ れ か ら も 。</p>
          </div>
        </Col>
        <Col sm={6}>
          <Carousel className="CarouselShadow">
            <Carousel.Item>
              <Image
                className="d-block w-100"
                src={Slider_1}
                alt="First slide"
                rounded
              />
            </Carousel.Item>
            <Carousel.Item>
              <Image
                className="d-block w-100"
                src={Slider_2}
                alt="Second slide"
                rounded
              />
            </Carousel.Item>
            <Carousel.Item>
              <Image
                className="d-block w-100"
                src={Slider_3}
                alt="Third slide"
                rounded
              />
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>

    <Row className="IntroSecTop">
      <Col md={{ span: 10, offset: 1 }}>
        <Row className="IntroInsideSec" xs={1} md={2}>
          <Col>
            <Image className="IntroPic_L" src={IntroPic_1} rounded />
          </Col>
          <Col className="IntroCaption">
            <div>
              <h2 className="IntroCaptionTitle">受け継がれる</h2>
              <h2 className="br_TopPage">秘伝のタレ</h2>
              <p>
                ダルマのタレは、10種類以上の厳選された素材を独自の製法でブレンドした、秘伝の味。
                創業から変わらず、
                守り続けているタレはコクと甘みのある深い味わいになっています。
                焼肉の味を引き立たせることはもちろん、 幅広い年齢層
                の方に美味しく召し上がって頂けます。
              </p>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>

    <Row className="IntroSec">
      <Col md={{ span: 10, offset: 1 }}>
        <Row className="IntroInsideSec" xs={1} md={2}>
          <Col className="IntroCaption">
            <div>
              <h2 className="IntroCaptionTitle">豊富な</h2>
              <h2 className="br_TopPage">サイドメニュー</h2>
              <p>
                多彩なサイドメニューは、こだわりの手作り。ダルマ開店当時の人気メニュー「ホルモンうどん焼き」から好評の豆腐チゲ、
                キムチチゲなどおいしい一品が勢
                揃い。サラダやデザートも充実しているのでお子様にも
                女性にも喜ばれています。
              </p>
            </div>
          </Col>
          <Col>
            <Image className="IntroPic_R" src={IntroPic_2} rounded />
          </Col>
        </Row>
      </Col>
    </Row>

    <Row className="IntroSecBottom">
      <Col md={{ span: 10, offset: 1 }}>
        <Row className="IntroInsideSec" xs={1} md={2}>
          <Col>
            <Image className="IntroPic_L" src={IntroPic_3} rounded />
          </Col>
          <Col className="IntroCaption">
            <div>
              <h2 className="IntroCaptionTitle">ボリューム満点</h2>
              <h2 className="br_TopPage">のお肉</h2>
              <p>
                ダルマのお肉はおいしくて、ボリューム満点
                食肉業者直売だから実現したこのボリューム！この価格！
                お腹いっぱい新鮮なお肉を楽しんで頂く為、スタッフ一同
                日々お客様の為に精進しています。
              </p>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>

    <Container fluid className="NewsBg">
      <Row className="NewsTitle">
        <Col md={{ span: 2, offset: 5 }}>
          <p className="NewsTitleFlashing">News</p>
          <p>新着情報</p>
        </Col>
      </Row>
      <NewsList />
    </Container>

    <Row className="bg">
      <Col md={{ span: 10, offset: 1 }}>
        <Row className="Point" xs={1} md={2}>
          <Col xs={6} md={4}>
            <Image
              className="PointDeco"
              src={PointCardDeco}
              alt="PointCardDeco"
              fluid
            />
          </Col>
          <Col xs={12} md={8}>
            <Image className="PointBtn" src={PointCard} alt="PointCard" fluid />
          </Col>
        </Row>
      </Col>
    </Row>

    <Row>
      <Col md={{ span: 10, offset: 1 }}>
        <Row className="Takeout" xs={1} md={2}>
          <Col xs={12} md={8}>
            <a href={require("./assets/Document.pdf")} target="_blank">
              <Image
                className="TakeoutBtn"
                src={Takeout}
                alt="Takeout"
                ontouchstart=""
                fluid
              />
            </a>
          </Col>
          <Col xs={6} md={4}>
            <Image
              className="TakeoutDeco"
              src={TakeoutDeco}
              alt="TakeoutDeco"
              fluid
            />
          </Col>
        </Row>
      </Col>
    </Row>

    <BottomSet />
  </Container>
);
