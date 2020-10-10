import React from 'react'
import './Home.css'
import { Container, Row, Col, Carousel, Image } from 'react-bootstrap';
import TitleMainDeco from './MTL/TitleMainDeco.svg';
import TitleHalfCircle from './MTL/TitleHalfCircle.svg';
import TopLogo from './MTL/TopLogo.svg';
import ScrollIcon from './MTL/ScrollIcon.svg';
import Fuji from './MTL/Fuji.png';
import Fuji2 from './MTL/Fuji2.png';
import TakeoutDeco from './MTL/TakeoutDeco.svg';
import Takeout from './MTL/Takeout.svg';
import PointCardDeco from './MTL/PointCardDeco.svg';
import PointCard from './MTL/PointCard.svg';
import Card from './MTL/Card.svg';
import Contact from './MTL/Contact.svg';

export const Home = () => (
    <React.Fragment>
        <Container fluid={true}>
            <Row className="Title">
                <Col>
                    <div>
                        <Image className="TitleHalfCircle" src={TitleHalfCircle} alt="HalfCircle" fluid />
                        <div className="TitleHead">
                            <h3 className="HeadSub">創業五十年岡山</h3>
                            <h2 className="HeadMain">焼肉と韓国料理のお店</h2>
                        </div>
                    </div>
                </Col>
                <Col >
                    <Image className="TopLogo" src={TopLogo} alt="Logo" fluid />
                    <div className="Title">
                        <Image className="TitleDeco" src={TitleMainDeco} alt="MainDeco" fluid />
                    </div>
                </Col>
                <Col className="ScrollSec">
                    <Image className="Scroll" src={ScrollIcon} alt="ScrollIcon" fluid />
                </Col>
            </Row>

            <Row className="Slider">
                <Col>
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
                <Col className="IntroPic_LS_Sec">
                    <Image className="IntroPic_LS" src={Fuji2} rounded fluid />
                </Col>
                <Col>
                    <div className="IntroCaption_LS">
                        <h3 className="IntroCaption_L">
                            ダルマオリジナルの秘伝のタレ</h3>
                        <p className="IntroCaption_S">
                            ダルマのタレは、10種類以上の厳選された素材を独自の 製法でブレンドした、秘伝の味。 創業から変わらず、守り続けているタレはコクと甘みの ある深い味わいになっています。 焼肉の味を引き立たせることはもちろん、幅広い年齢層 の方に美味しく召し上がって頂けます。</p>
                    </div>
                </Col>
            </Row>

            <Row className="IntroSec">
                <Col>
                    <div className="IntroCaption_RS">
                        <h3 className="IntroCaption_L">
                            豊富なサイドメニュー</h3>
                        <p className="IntroCaption_S">
                            多彩なサイドメニューは、こだわりの手作り。 ダルマ開店当時の人気メニュー「ホルモンうどん焼き」 から好評の豆腐チゲ、キムチチゲなどおいしい一品が勢 揃い。サラダやデザートも充実しているのでお子様にも 女性にも喜ばれています。</p>
                    </div>
                </Col>
                <Col className="IntroPic_RS_Sec">
                    <Image className="IntroPic_RS" src={Fuji2} rounded fluid />
                </Col>
            </Row>

            <Row className="IntroSec">
                <Col>
                    <Image className="IntroPic_LS" src={Fuji2} rounded fluid />
                </Col>
                <Col>
                    <div className="IntroCaption_LS">
                        <h3 className="IntroCaption_L">
                            ボリューム満点のお肉</h3>
                        <p className="IntroCaption_S">
                            ダルマのお肉はおいしくて、ボリューム満点!! 食肉業者直売だから実現したこのボリューム！この価格！ お腹いっぱい新鮮なお肉を楽しんで頂く為、スタッフ一同 日々お客様の為に精進しています。</p>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col>
                    <p>õõõ</p>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Image className="TakeoutDeco" src={TakeoutDeco} alt="TakeoutDeco" fluid />
                </Col>
                <Col>
                    <Image className="Takeout" src={Takeout} alt="Takeout" fluid />
                </Col>
            </Row>

            <Row>
                <Col>
                    <Image className="PointCard" src={PointCard} alt="PointCard" fluid />
                </Col>
                <Col>
                    <Image className="PointCardDeco" src={PointCardDeco} alt="PointCardDeco" fluid />
                </Col>
            </Row>

            <Row>
                <Col>
                    <Image className="Card" src={Card} alt="Card" fluid />
                </Col>
            </Row>

            <Row>
                <Col>
                    <Image className="Contact" src={Contact} alt="Contact" fluid />
                </Col>
            </Row>
        </Container>
    </React.Fragment>
)






