import React, { useState, useEffect } from "react";
import { Nav, Navbar, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom"; // Using NavLink for active class
import styled from "styled-components";

const Styles = styled.div`
  .navbar {
    margin: 0% 6% 3% 6%;
    position: fixed; /* Make the navbar fixed on the screen */
    top: 0; /* Place at the top */
    width: 90%;
    z-index: 1000;
    font-weight: bold;
    letter-spacing: 0.15em;
    transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
  }

  .LinkRent {
    color: #495057;
    text-decoration: none;
    transition: 0.9s cubic-bezier(0.22, 1, 0.36, 1);
    &:hover {
      color: #5a8fcb;
    }
  }

  .Link {
    color: #fff;
    text-decoration: none;
    transition: 0.9s cubic-bezier(0.22, 1, 0.36, 1);
    &:hover {
      color: #5a8fcb;
    }
  }

  /* Add active class styling */
  .active {
    color: #007bff !important; /* Change this to whatever active color you want */
    /* font-weight: bold; */
  }

  .ml-auto {
    padding-top: 24px;
  }

  @media screen and (max-width: 992px) {
    /* Change background color when navbar is expanded */
    .Link {
      color: #007bff;
      padding-left: 24px;
    }
    .navbar {
      width: 100%;
      margin: 0;
      padding: 30px;
    }
    .navbar-collapse {
      transition: all 0.3s ease-in-out;
    }
    .navbar-collapse.show {
      margin-top: 15px;
      padding: 15px;
      background-color: #fff;
      border-radius: 6px;
    }
    .nav-item {
      font-size: 19px;
      padding: 6px 0;
      transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
    }
    button {
      background: #fff;
    }
    .btn {
      border: 2px solid #007bff;
    }
    .kmKAxr .LinlkRent {
      color: #fff !important;
    }
  }
`;

export const NavigationBar = () => {
  const [expanded, setExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleLinkClick = () => setExpanded(false);

  const scrollThreshold = 45;

  const handleScroll = () => {
    const currentScroll = window.scrollY;

    if (currentScroll === 0) {
      setIsVisible(true);
      setLastScrollY(0);
      return;
    }

    if (Math.abs(currentScroll - lastScrollY) < scrollThreshold) {
      return;
    }

    if (currentScroll > lastScrollY) {
      setIsVisible(false); // scrolling down
    } else {
      setIsVisible(true); // scrolling up
    }

    setLastScrollY(currentScroll);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    // Show the navbar when at the top
    if (window.scrollY === 0) {
      setIsVisible(true);
    }
  }, []);

  return (
    <React.Fragment>
      <Styles>
        <Navbar
          expand="lg"
          expanded={expanded}
          onToggle={setExpanded}
          style={{
            transform: isVisible ? "translateY(0)" : "translateY(-100%)", // Hide navbar when scrolling
          }}
        >
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className={expanded ? "show" : ""}
          >
            <Nav className="mr-auto">
              <Button variant="light btn-lg shadow" waves-effect>
                <NavLink
                  to="/rent"
                  className="LinkRent"
                  activeClassName="active" // Apply active class when route matches
                  onClick={handleLinkClick}
                >
                  BBQ 無料貸し出し 🌸
                </NavLink>
              </Button>
            </Nav>

            <Nav className="ml-auto">
              <Nav.Item>
                <Nav.Link>
                  <NavLink
                    to="/"
                    exact
                    className="Link"
                    activeClassName="active" // Apply active class when route matches
                    onClick={handleLinkClick}
                  >
                    HOME
                  </NavLink>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>
                  <NavLink
                    to="/news"
                    className="Link"
                    activeClassName="active"
                    onClick={handleLinkClick}
                  >
                    NEWS
                  </NavLink>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>
                  <NavLink
                    to="/menu"
                    className="Link"
                    activeClassName="active"
                    onClick={handleLinkClick}
                  >
                    MENU
                  </NavLink>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>
                  <NavLink
                    to="/info"
                    className="Link"
                    activeClassName="active"
                    onClick={handleLinkClick}
                  >
                    INFO
                  </NavLink>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>
                  <NavLink
                    to="/recruit"
                    className="Link"
                    activeClassName="active"
                    onClick={handleLinkClick}
                  >
                    RECRUIT
                  </NavLink>
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Styles>
    </React.Fragment>
  );
};

// Fixed Navbar
// // import React, { useState } from "react";
// // import { Nav, Navbar, Button } from "react-bootstrap";
// // import { Link } from "react-router-dom";
// // import styled from "styled-components";

// // const Styles = styled.div`
// //   .navbar {
// //     margin: 0% 6% 3% 6%;
// //     position: relative;
// //     z-index: 1000;
// //     font-weight: bold;
// //     letter-spacing: 0.15em;
// //   }

// //   @media screen and (max-width: 992px) {
// //     .navbar {
// //       margin: 5% 0 0 6%;
// //     }
// //   }

// //   .LinkRent {
// //     color: #5a8fcb;
// //     text-decoration: none;
// //     transition: 0.9s cubic-bezier(0.22, 1, 0.36, 1);
// //     &:hover {
// //       color: #c73d13;
// //     }
// //   }

// //   .Link {
// //     color: #fff;
// //     text-decoration: none;
// //     transition: 0.9s cubic-bezier(0.22, 1, 0.36, 1);
// //     &:hover {
// //       color: #5a8fcb;
// //     }
// //   }

// //   .ml-auto {
// //     padding: 24px 0 0 0;
// //   }

// //   @media screen and (max-width: 992px) {
// //     .ml-auto {
// //       padding: 3% 0;
// //     }
// //   }

// //   .mr-auto {
// //     padding: 24px 0 0 0;
// //   }

// //   @media screen and (max-width: 992px) {
// //     .mr-auto {
// //       padding: 6% 0 0 0;

// //       button {
// //         width: 230px;
// //       }
// //     }
// //   }
// // `;

// // export const NavigationBar = () => {
// //   const [expanded, setExpanded] = useState(false);

// //   const handleLinkClick = () => setExpanded(false);

// //   return (
// //     <React.Fragment>
// //       <Styles>
// //         <Navbar expand="lg" expanded={expanded} onToggle={setExpanded}>
// //           <Navbar.Toggle aria-controls="basic-navbar-nav" />
// //           <Navbar.Collapse id="basic-navbar-nav">
// //             <Nav className="mr-auto">
// //               <Button variant="light btn-lg shadow" waves-effect>
// //                 <Link to="/rent" className="LinkRent" onClick={handleLinkClick}>
// //                   BBQ 無料貸し出し 🌸
// //                 </Link>
// //               </Button>
// //             </Nav>

// //             <Nav className="ml-auto">
// //               <Nav.Item>
// //                 <Nav.Link>
// //                   <Link to="/" className="Link" onClick={handleLinkClick}>
// //                     HOME
// //                   </Link>
// //                 </Nav.Link>
// //               </Nav.Item>
// //               <Nav.Item>
// //                 <Nav.Link>
// //                   <Link to="/news" className="Link" onClick={handleLinkClick}>
// //                     NEWS
// //                   </Link>
// //                 </Nav.Link>
// //               </Nav.Item>
// //               <Nav.Item>
// //                 <Nav.Link>
// //                   <Link to="/menu" className="Link" onClick={handleLinkClick}>
// //                     MENU
// //                   </Link>
// //                 </Nav.Link>
// //               </Nav.Item>
// //               <Nav.Item>
// //                 <Nav.Link>
// //                   <Link to="/info" className="Link" onClick={handleLinkClick}>
// //                     INFO
// //                   </Link>
// //                 </Nav.Link>
// //               </Nav.Item>
// //               <Nav.Item>
// //                 <Nav.Link>
// //                   <Link
// //                     to="/recruit"
// //                     className="Link"
// //                     onClick={handleLinkClick}
// //                   >
// //                     RECRUIT
// //                   </Link>
// //                 </Nav.Link>
// //               </Nav.Item>
// //             </Nav>
// //           </Navbar.Collapse>
// //         </Navbar>
// //       </Styles>
// //     </React.Fragment>
// //   );
// // };

// import React, { useState, useEffect } from "react";
// import { Nav, Navbar, Button } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import styled from "styled-components";

// const Styles = styled.div`
//   .navbar {
//     margin: 0% 6% 3% 6%;
//     position: relative;
//     z-index: 1000;
//     font-weight: bold;
//     letter-spacing: 0.15em;
//     background-color: transparent;
//     transition: background-color 0.3s ease, opacity 0.3s ease;
//     opacity: 0; /* Initially hidden */
//   }

//   /* Sticky navbar styling */
//   .navbar.sticky-navbar {
//     position: fixed;
//     top: 0;
//     left: 0;
//     right: 0;
//     z-index: 1000;
//     background-color: transparent;
//     animation: slideDown 0.5s ease-out forwards;
//     opacity: 1; /* Become visible after animation */
//   }

//   /* Slide down animation */
//   @keyframes slideDown {
//     0% {
//       transform: translateY(-100%);
//       opacity: 0;
//     }
//     100% {
//       transform: translateY(0);
//       opacity: 1;
//     }
//   }

//   .LinkRent {
//     color: #5a8fcb;
//     text-decoration: none;
//     transition: 0.9s cubic-bezier(0.22, 1, 0.36, 1);
//     &:hover {
//       color: #c73d13;
//     }
//   }

//   .Link {
//     color: #fff;
//     text-decoration: none;
//     transition: 0.9s cubic-bezier(0.22, 1, 0.36, 1);
//     &:hover {
//       color: #5a8fcb;
//     }
//   }

//   .ml-auto {
//     padding: 24px 0 0 0;
//   }

//   @media screen and (max-width: 992px) {
//     .ml-auto {
//       padding: 3% 0;
//     }
//   }

//   .mr-auto {
//     padding: 24px 0 0 0;
//   }

//   @media screen and (max-width: 992px) {
//     .mr-auto {
//       padding: 6% 0 0 0;

//       button {
//         width: 230px;
//       }
//     }
//   }
// `;

// export const NavigationBar = () => {
//   const [expanded, setExpanded] = useState(false);
//   const [isSticky, setIsSticky] = useState(false);

//   const handleLinkClick = () => setExpanded(false);

//   // Handle scrolling behavior
//   useEffect(() => {
//     const handleScroll = () => {
//       const homeSection = document.getElementById("home");
//       const scrollPosition = window.scrollY;
//       const homeHeight = homeSection ? homeSection.offsetHeight : 0;

//       if (scrollPosition > homeHeight) {
//         setIsSticky(true); // Only show navbar once past Home section
//       } else {
//         setIsSticky(false); // Hide navbar before passing Home section
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <React.Fragment>
//       <Styles>
//         <Navbar
//           expand="lg"
//           expanded={expanded}
//           onToggle={setExpanded}
//           className={`${isSticky ? "sticky-navbar" : ""}`}
//         >
//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="mr-auto">
//               <Button variant="light btn-lg shadow" waves-effect>
//                 <Link to="/rent" className="LinkRent" onClick={handleLinkClick}>
//                   BBQ 無料貸し出し 🌸
//                 </Link>
//               </Button>
//             </Nav>

//             <Nav className="ml-auto">
//               {[
//                 { path: "/", label: "HOME" },
//                 { path: "/news", label: "NEWS" },
//                 { path: "/menu", label: "MENU" },
//                 { path: "/info", label: "INFO" },
//                 { path: "/recruit", label: "RECRUIT" },
//               ].map((item) => (
//                 <Nav.Item key={item.path}>
//                   <Nav.Link>
//                     <Link
//                       to={item.path}
//                       className="Link"
//                       onClick={handleLinkClick}
//                     >
//                       {item.label}
//                     </Link>
//                   </Nav.Link>
//                 </Nav.Item>
//               ))}
//             </Nav>
//           </Navbar.Collapse>
//         </Navbar>
//       </Styles>
//     </React.Fragment>
//   );
// };

// import React, { useState, useEffect } from "react";
// import { Nav, Navbar, Button } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import styled from "styled-components";

// const Styles = styled.div`
//   .navbar {
//     margin: 0% 6% 3% 6%;
//     position: fixed; /* Make the navbar fixed on the screen */
//     top: 0; /* Place at the top */
//     width: 90%;
//     z-index: 1000;
//     font-weight: bold;
//     letter-spacing: 0.15em;
//     transition: transform 0.3s ease-out; /* Smooth transition */
//   }

//   @media screen and (max-width: 992px) {
//     .navbar {
//       margin: 5% 0 0 6%;
//     }
//   }

//   .LinkRent {
//     color: #5a8fcb;
//     text-decoration: none;
//     transition: 0.9s cubic-bezier(0.22, 1, 0.36, 1);
//     &:hover {
//       color: #c73d13;
//     }
//   }

//   .Link {
//     color: #fff;
//     text-decoration: none;
//     transition: 0.9s cubic-bezier(0.22, 1, 0.36, 1);
//     &:hover {
//       color: #5a8fcb;
//     }
//   }

//   .ml-auto {
//     padding: 24px 0 0 0;
//   }

//   @media screen and (max-width: 992px) {
//     .ml-auto {
//       padding: 3% 0;
//     }
//   }

//   .mr-auto {
//     padding: 24px 0 0 0;
//   }

//   @media screen and (max-width: 992px) {
//     .mr-auto {
//       padding: 6% 0 0 0;

//       button {
//         width: 230px;
//       }
//     }
//   }
// `;

// export const NavigationBar = () => {
//   const [expanded, setExpanded] = useState(false);
//   const [isVisible, setIsVisible] = useState(true);
//   const [lastScrollY, setLastScrollY] = useState(0);

//   const handleLinkClick = () => setExpanded(false);

//   const handleScroll = () => {
//     if (window.scrollY > lastScrollY) {
//       // If scrolling down, hide the navbar
//       setIsVisible(false);
//     } else {
//       // If scrolling up, show the navbar
//       setIsVisible(true);
//     }
//     setLastScrollY(window.scrollY);
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [lastScrollY]);

//   useEffect(() => {
//     // Show the navbar when at the top
//     if (window.scrollY === 0) {
//       setIsVisible(true);
//     }
//   }, []);

//   return (
//     <React.Fragment>
//       <Styles>
//         <Navbar
//           expand="lg"
//           expanded={expanded}
//           onToggle={setExpanded}
//           style={{
//             transform: isVisible ? "translateY(0)" : "translateY(-100%)", // Hide navbar when scrolling
//           }}
//         >
//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="mr-auto">
//               <Button variant="light btn-lg shadow" waves-effect>
//                 <Link to="/rent" className="LinkRent" onClick={handleLinkClick}>
//                   BBQ 無料貸し出し 🌸
//                 </Link>
//               </Button>
//             </Nav>

//             <Nav className="ml-auto">
//               <Nav.Item>
//                 <Nav.Link>
//                   <Link to="/" exact onClick={handleLinkClick}>
//                     HOME
//                   </Link>
//                 </Nav.Link>
//               </Nav.Item>
//               <Nav.Item>
//                 <Nav.Link>
//                   <Link to="/news" className="Link" onClick={handleLinkClick}>
//                     NEWS
//                   </Link>
//                 </Nav.Link>
//               </Nav.Item>
//               <Nav.Item>
//                 <Nav.Link>
//                   <Link to="/menu" className="Link" onClick={handleLinkClick}>
//                     MENU
//                   </Link>
//                 </Nav.Link>
//               </Nav.Item>
//               <Nav.Item>
//                 <Nav.Link>
//                   <Link to="/info" className="Link" onClick={handleLinkClick}>
//                     INFO
//                   </Link>
//                 </Nav.Link>
//               </Nav.Item>
//               <Nav.Item>
//                 <Nav.Link>
//                   <Link
//                     to="/recruit"
//                     className="Link"
//                     onClick={handleLinkClick}
//                   >
//                     RECRUIT
//                   </Link>
//                 </Nav.Link>
//               </Nav.Item>
//             </Nav>
//           </Navbar.Collapse>
//         </Navbar>
//       </Styles>
//     </React.Fragment>
//   );
// };
