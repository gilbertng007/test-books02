import React from 'react';
import Navbar from './Navbar'; // 导航栏组件
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <Container className="mt-4">
                {children}
            </Container>
        </>
    );
};

export default Layout;