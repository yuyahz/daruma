import React from 'react'
import './Home.css'
import { Container, Row, Col, Carousel, Image } from 'react-bootstrap';
import TitleMainDeco from './assets/TitleMainDeco.svg';
import TitleHalfCircle from './assets/TitleHalfCircle.svg';
import ScrollIcon from './assets/ScrollIcon.svg';
import Fuji from './assets/Fuji.png';
import Fuji2 from './assets/Fuji2.png';
import Takeout from './assets/Takeout.svg';
import TakeoutDeco from './assets/TakeoutDeco.svg';
import PointCard from './assets/PointCard.svg';
import PointCardDeco from './assets/PointCardDeco.svg';
import NewsTitle from './assets/NewsTitle.svg';
import { NewsList } from './components/NewsList';
import { MenuBottom } from './components/MenuBottom';

export const Home = () => (
    <Container fluid={true}>
        <Row className="Title">
            <Col sm>
                <div className="d-none d-sm-block">
                    <Image className="TitleHalfCircle" src={TitleHalfCircle} alt="HalfCircle" fluid />
                </div>
            </Col>
            <Col sm className="TitleDeco">
                <Image src={TitleMainDeco} alt="MainDeco" fluid />
            </Col>
            <Col sm className="ScrollSec d-none d-sm-block">
                <Image className="Scroll" src={ScrollIcon} alt="ScrollIcon" fluid />
            </Col>
        </Row>

        <Row className="Slider d-none d-sm-block">
            <Col md={{ span: 8, offset: 2 }} className="d-none d-sm-block">
                <Carousel>
                    <Carousel.Item>
                        <Image className="d-block w-100" src={Fuji} alt="First slide" rounded />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image className="d-block w-100" src={Fuji} alt="Second slide" rounded />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image className="d-block w-100" src={Fuji} alt="Third slide" rounded />
                    </Carousel.Item>
                </Carousel>
                <div className="SliderCaption">
                    <p>五 十 年 守 り 続 け た</p>
                    <p>味 を そ の ま ま に</p>
                    <p>昔 か ら 変 わ ら ぬ</p>
                    <p>伝 統 の 味 を 届 け る 為 に</p>
                    <p>そ し て こ れ か ら も</p>
                </div>
            </Col>
        </Row>

        <Row className="IntroSec">
            <Col md={{ span: 10, offset: 1 }}>
                <Row className="Takeout" xs={1} md={2}>
                    <Col>
                        <Image className="IntroPic_L" src={Fuji2} rounded />
                    </Col>
                    <Col>
                        <div className="IntroCaption">
                            <h2 className="IntroCaptionTitle">受け継がれる</h2>
                            <h2 className="br_TopPage">秘伝のタレ</h2>
                            <p>ダルマのタレは、10種類以上の厳選された素材を独自の 製法でブレンドした、秘伝の味。 創業から変わらず、
                                守り続けているタレはコクと甘みの ある深い味わいになっています。 焼肉の味を引き立たせることはもちろん、
                                幅広い年齢層 の方に美味しく召し上がって頂けます。</p>
                        </div>
                    </Col>
                </Row>
            </Col>
        </Row>

        <Row className="IntroSec">
            <Col md={{ span: 10, offset: 1 }}>
                <Row className="Takeout" xs={1} md={2}>
                    <Col>
                        <div className="IntroCaption">
                            <h2 className="IntroCaptionTitle">豊富な</h2>
                            <h2 className="br_TopPage">サイドメニュー</h2>
                            <p>多彩なサイドメニューは、こだわりの手作り。 ダルマ開店当時の人気メニュー「ホルモンうどん焼き」 から好評の豆腐チゲ、
                                キムチチゲなどおいしい一品が勢 揃い。サラダやデザートも充実しているのでお子様にも 女性にも喜ばれています。</p>
                        </div>
                    </Col>
                    <Col>
                        <Image className="IntroPic_R" src={Fuji2} rounded />
                    </Col>
                </Row>
            </Col>
        </Row>

        <Row className="IntroSec">
            <Col md={{ span: 10, offset: 1 }}>
                <Row className="Takeout" xs={1} md={2}>
                    <Col>
                        <Image className="IntroPic_L" src={Fuji2} rounded />
                    </Col>
                    <Col>
                        <div className="IntroCaption">
                            <h2 className="IntroCaptionTitle">
                                ボリューム満点</h2>
                            <h2 className="br_TopPage">のお肉</h2>
                            <p>ダルマのお肉はおいしくて、ボリューム満点 食肉業者直売だから実現したこのボリューム！この価格！
                                お腹いっぱい新鮮なお肉を楽しんで頂く為、スタッフ一同 日々お客様の為に精進しています。</p>
                        </div>
                    </Col>
                </Row>
            </Col>
        </Row>

        <Row className="NewsTitle">
            <Col md={{ span: 2, offset: 5 }}>
                <Image src={NewsTitle} alt="NewsTitle" fluid />
            </Col>
        </Row>
        <NewsList />

        <Row>
            <Col md={{ span: 8, offset: 2 }}>
                <Row className="PointCard" xs={1} md={2}>
                    <Col xs={6} md={4}>
                        <Image className="PointCardDeco" src={PointCardDeco} alt="PointCardDeco" fluid />
                    </Col>
                    <Col xs={12} md={8}>
                        <Image src={PointCard} alt="PointCard" fluid />
                    </Col>
                </Row>
            </Col>
        </Row>

        <Row>
            <Col md={{ span: 8, offset: 2 }}>
                <Row className="Takeout" xs={1} md={2}>
                    <Col xs={12} md={8}>
                        <Image src={Takeout} alt="Takeout" fluid />
                    </Col>
                    <Col xs={6} md={4}>
                        <Image className="TakeoutDeco" src={TakeoutDeco} alt="TakeoutDeco" fluid />
                    </Col>
                </Row>
            </Col>
        </Row>

        <MenuBottom />

        {/* <Row className="CardList">
            <Col md={{ span: 4, offset: 4 }}>
                <Image src={CardList} alt="CardList" fluid />
            </Col>
        </Row>

        <Row className="Contact">
            <Col md={{ span: 6, offset: 3 }}>
                <Image src={Contact} alt="Contact" fluid />
            </Col>
        </Row>

        <Row className="Copylight">
            <Col md={{ span: 4, offset: 4 }}>
                <Image className="CopylightIcon" src={Copylight} alt="Copylight" fluid />
            </Col>
        </Row> */}

    </Container>
)






