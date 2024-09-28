// import React from 'react';
// import Navbar from './Navbar'; // 导航栏组件
// import Container from 'react-bootstrap/Container';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const Layout = ({ children }) => {
//     return (
//         <>
//             <Navbar />
//             <Container className="mt-4">
//                 {children}
//             </Container>
//         </>
//     );
// };

// export default Layout;


import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import Link from 'next/link';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import { Container } from '@mui/material';

const theme = createTheme({
    palette: {
        primary: {
            main: '#556cd6', // 主题颜色
        },
        secondary: {
            main: '#00e676', // 辅助颜色
        },
    },
});

const GradientButton = styled(Button)(({ theme }) => ({
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
    '&:hover': {
        background: 'linear-gradient(45deg, #FF8E53 30%, #FE6B8B 90%)',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .6)',
    },
}));

const Layout = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        網上書店
                    </Typography>
                    <Link href="/">
                        <GradientButton>關於我們</GradientButton>
                    </Link>
                    <Link href="/cart">
                        <GradientButton>購物車</GradientButton>
                    </Link>
                    <Link href="/account">
                        <GradientButton>個人中心</GradientButton>
                    </Link>
                    <Link href="/orders/history">
                        <GradientButton>歷史訂單</GradientButton>
                    </Link>
                    <Link href="/address">
                        <GradientButton>地址管理</GradientButton>
                    </Link>
                    <Link href="/comments">
                        <GradientButton>客戶留言</GradientButton>
                    </Link>
                </Toolbar>
            </AppBar>
            <Container component="main" maxWidth="lg" sx={{ mt: 8, mb: 4 }}>
                {children}
            </Container>
        </ThemeProvider>
    );
};

export default Layout;