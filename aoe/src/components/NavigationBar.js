import React from "react";
import { Nav, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Styles = styled.div`
  .navbar {
    margin: 0% 6% 0% 6%;
    position: relative;
    z-index: 1000;
    font-weight: bold;
    letter-spacing: 0.15em;
  }

  @media screen and (max-width: 992px) {
    .navbar {
      margin: 6% 0 0 6%;
    }
  }

  .LinkRent {
    color: #5a8fcb;
    text-decoration: none;
    transition: 0.9s cubic-bezier(0.22, 1, 0.36, 1);
    &:hover {
      color: #c73d13;
    }
  }

  .Link {
    color: #ffffff;
    text-decoration: none;
    transition: 0.9s cubic-bezier(0.22, 1, 0.36, 1);
    &:hover {
      color: #5a8fcb;
    }
  }

  .mr-auto {
    padding: 24px 0 0 0;

    @media screen and (min-width: 1920px) {
      padding: 24px 0 6vw 0;
    }
  }

  @media screen and (max-width: 992px) {
    .mr-auto {
      padding: 6% 0 0 0;

      button {
        width: 230px;
      }
    }
  }

  .ml-auto {
    padding: 24px 0 0 0;

    @media screen and (min-width: 1920px) {
      padding: 24px 0 6vw 0;
    }
  }

  @media screen and (max-width: 992px) {
    .ml-auto {
      padding: 3% 0;
    }
  }
`;

export const NavigationBar = () => (
  <React.Fragment>
    <Styles>
      <Navbar expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Button variant="light btn-lg shadow" waves-effect>
              <Link to="/rent" className="LinkRent">
                BBQ 無料貸し出し 🌸
              </Link>
            </Button>
          </Nav>

          <Nav className="ml-auto">
            <Nav.Item>
              <Nav.Link>
                <Link to="/" className="Link">
                  HOME
                </Link>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>
                <Link to="/news" className="Link">
                  NEWS
                </Link>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>
                <Link to="/menu" className="Link">
                  MENU
                </Link>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>
                <Link to="/info" className="Link">
                  INFO
                </Link>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>
                <Link to="/recruit" className="Link">
                  RECRUIT
                </Link>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Styles>
  </React.Fragment>
);
