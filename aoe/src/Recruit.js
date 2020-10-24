import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import styled from "styled-components";
import { MenuBottom } from './components/MenuBottom';
import Fuji3 from './assets/Fuji3.png';

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

.RecruitPic {
    text-align: center;
    filter: drop-shadow(2px 3px 5px rgba(0, 0, 0, 0.2));
}
`;

export const Recruit = () => (

    <Styles>
        <Container fluid={true}>
            <Row className="RecruitSecTitle">
                <Col md={{ span: 6, offset: 3 }}>
                    <div className="RecruitText">
                        <h1 className="RecruitTitle">アルバイト募集中</h1>
                        <p>未経験でも大丈夫！先輩スタッフが丁寧にお教えいたしますので、ご安心下さい。
                    興味のある方は 086 - 224 - 3525 までお気軽にお電話下さい。</p>
                    </div>
                </Col>
            </Row>

            <Row className="RecruitSecTop">
                <Col md={{ span: 8, offset: 2 }}>
                    <Row className="" xs={1} md={2}>
                        <Col className="RecruitPic">
                            <Image src={Fuji3} rounded />
                        </Col>
                        <Col>
                            <div className="RecruitText">
                                <h2 className="RecruitSubTitle">ホールスタッフ</h2>
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

            <Row className="RecruitSecBottom">
                <Col md={{ span: 8, offset: 2 }}>
                    <Row className="" xs={1} md={2}>
                        <Col className="RecruitPic">
                            <Image src={Fuji3} rounded />
                        </Col>
                        <Col>
                            <div className="RecruitText">
                                <h2 className="RecruitSubTitle">キッチンスタッフ</h2>
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

            <MenuBottom />

        </Container>
    </Styles>



)