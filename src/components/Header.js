import React from 'react';

import {
  Container, Row, Col, Navbar, Nav,
  NavLink, NavItem
} from 'reactstrap';

class Header extends React.Component {
  render() {
    return (
      <header>
        <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />

        <Navbar fixed="top" color="light" light expand="xs" className="border-bottom border-gray bg-white" style={{ width:300,height: 80 }}>

          <Container  style={{ width:300}}>
            <Row noGutters className="position-relative w-100 align-items-center">

              <Col className="d-none d-lg-flex justify-content-start">
                <Nav className="mrx-auto" navbar>

                  <NavItem className="d-flex align-items-center">
                    <NavLink className="font-weight-bold" href="/home">Home</NavLink>
                  </NavItem>

                  <NavItem className="d-flex align-items-center">
                    <NavLink className="font-weight-bold" href="https://github.com/sungsunghyun/portfolio" target="_blank">Github</NavLink>
                  </NavItem>

                  <NavItem className="d-flex align-items-center">
                    <NavLink className="font-weight-bold" href="https://blog.naver.com/songshyun1" target="_blank">Blog</NavLink>
                  </NavItem>

                </Nav>
              </Col>
            </Row>
          </Container>

        </Navbar>
      </header>
    )
  };
}
export default Header;