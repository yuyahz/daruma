import React from 'react';
import { Nav, Navbar, Button } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
.navbar {
    padding:30px 170px 10px 120px;
    position:relative;
    z-index:1000;
}

.navbar-nav .nav-link {
    color: #FFFFFF;

    &:hover {
        color: #5A8FCB;
        }
    }
} 
`;

export const NavigationBar = () => (
    <Styles>
        <Navbar expand="lg">

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">

                <Nav className="mr-auto">
                    <Button variant="light btn-lg shadow">RENT BBQ</Button>
                </Nav>

                <Nav className="ml-auto">
                    <Nav.Item><Nav.Link href="/">HOME</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/news">NEWS</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/info">INFO</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/menu">MENU</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/quality">QUALITY</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/recuruit">RECURUIT</Nav.Link></Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
)