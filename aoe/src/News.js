import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import styled from 'styled-components';
// import NewsTitle from './assets/NewsTitle.svg';
import { NewsList } from './components/NewsList';
import CardList from './assets/CardList.svg';
import Contact from './assets/Contact.svg';
import Copylight from './assets/Copylight.svg';

const Styles = styled.div`
.News {
    text-align: center;
}

/* .NewsTitleMain {
    margin: 3%;
} */

.Article {
    margin: 3% 0 10% 0;
    padding: 7% 3%;
    background-color: #007BFF;
    border-radius: 15px;
    filter: drop-shadow(2px 3px 5px rgba(1, 1, 0, 0.3));
}
`;

export const News = () => (
    <Styles>
        {/* <Row className="News">
            <Col md={{ span: 6, offset: 3 }}>
                <Image className="NewsTitleMain" src={NewsTitle} alt="NewsTitle" fluid />
            </Col>
        </Row> */}
        <Row>
            <Col md={{ span: 10, offset: 1 }}>
                <div className="Article">
                    <NewsList />
                </div>
            </Col>
        </Row>
        <Row className="CardList">
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
        </Row>
    </Styles>
)