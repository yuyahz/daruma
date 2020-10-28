import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import styled from "styled-components";
import { MenuBottom } from './components/MenuBottom';
import Fuji5 from './assets/Fuji5.png';

const Styles = styled.div`

.RecruitSecTitle {
    padding-top: 2%;
    text-align: center;
}

.RecruitSecTop {
    padding: 5% 0;
}

.RecruitSecBottom {
    padding-bottom: 8%;
}

.RecruitTitle {
    padding-bottom: 3%;
    margin-bottom: 5%;
    font-family: 'Noto Serif JP', serif;
    background: linear-gradient(transparent 0%, #C73D13 50%);
    filter: drop-shadow(2px 3px 5px rgba(0, 0, 0, 0.2));
}

.RecruitSubTitle {
    padding: 5% 0;
    margin-bottom: 5%;
    font-family: 'Noto Serif JP', serif;
    border-bottom: solid 1px #007BFF;
}

.RecruitText {
    font-size: 90%;
    color: #F3F0DB;
}

.RecruitPicSec {
    text-align: center;
    filter: drop-shadow(2px 3px 5px rgba(0, 0, 0, 0.2));
}

.RecruitPic {
    ${'' /* width: 100%; */}
}
`;

export const Rent = () => (

    <Styles>
        <Container fluid={true}>
            <Row className="RecruitSecTitle">
                <Col md={{ span: 6, offset: 3 }}>
                    <div className="RecruitText">
                        <h2 className="RecruitTitle">器具無料貸し出し</h2>
                        <p>お肉10人前以上、またセットメニュー 5人前以上ご注文の方に限り無料貸し出し
                        可能必要な客様には炭 1 袋  ¥780 で販売していますおります。内容( 1kg , 着火剤付き , 約 1 台分)</p>
                    </div>
                </Col>
            </Row>

            <Row className="RecruitSecBottom">
                <Col md={{ span: 8, offset: 2 }}>
                    <Row xs={1} md={2}>
                        <Col className="RecruitPicSec">
                            <Image className="RecruitPic" src={Fuji5} rounded />
                        </Col>
                        <Col>
                            <div className="RecruitText">
                                <h3 className="RecruitSubTitle">キッチンスタッフ</h3>
                                <p>条件　16歳以上　土日勤務可能な方</p>
                                <p>・11時～22時の内5時間程度　※ラストまで入れる方歓迎</p>
                                <p>・時給 ￥970   ・研修期間中 ￥920</p>
                                <p>・勤務時間、勤務日数は相談に応じます</p>
                                <p>・食事付き・制服給与</p>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>

            <Row className="RecruitSecTop">
                <Col md={{ span: 8, offset: 2 }}>
                    <Row xs={1} md={2}>
                        <Col className="RecruitPicSec">
                            <Image className="RecruitPic" src={Fuji5} rounded />
                            <p>条件　16歳以上　土日勤務可能な方</p>
                        </Col>
                        <Col>
                            <Image className="RecruitPic" src={Fuji5} rounded />
                            <p>条件　16歳以上　土日勤務可能な方</p>
                        </Col>
                    </Row>
                </Col>
            </Row>

            <Row className="RecruitSecTop">
                <Col md={{ span: 8, offset: 2 }}>
                    <Row xs={1} md={2}>
                        <Col className="RecruitPicSec">
                            <Image className="RecruitPic" src={Fuji5} rounded />
                            <p>条件　16歳以上　土日勤務可能な方</p>
                        </Col>
                        <Col>
                            <Image className="RecruitPic" src={Fuji5} rounded />
                            <p>条件　16歳以上　土日勤務可能な方</p>
                        </Col>
                    </Row>
                </Col>
            </Row>

            <MenuBottom />

        </Container>
    </Styles>



)