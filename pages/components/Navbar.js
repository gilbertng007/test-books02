import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';

const NavigationBar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">網上書店</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">首頁</Nav.Link>
                        <Nav.Link href="/cart">購物車</Nav.Link>
                        <Nav.Link href="/account">個人中心</Nav.Link>
                        <NavDropdown title="更多" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/orders/history">歷史訂單</NavDropdown.Item>
                            <NavDropdown.Item href="/address">地址管理</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/comments">客戶留言</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;