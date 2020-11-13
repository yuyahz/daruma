import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import styled from 'styled-components';
import { NewsList } from './components/NewsList';
import { BottomSet } from './components/BottomSet';

const Styles = styled.div`
.News {
    text-align: center;
}

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
)