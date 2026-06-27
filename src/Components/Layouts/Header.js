import React from 'react';
import '../../Styles/HeaderStyle.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Logo from '../../Assets/assets/logo/logo.png';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <>
        <header>
        <Navbar collapseOnSelect expand="lg">
        <Container>
            <Navbar.Brand href="#home">
                <link to="/" className='logo'>
                    <img scr={Logo} alt="Logo" className='img-fluid' />
                </link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/about">About</Nav.Link>
                <Nav.Link as={Link} to="/menu">Our menu</Nav.Link>
                <Nav.Link as={Link} to="/shop">Shop</Nav.Link>
                <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
                <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                <Nav.Link as={Link} to="/">
                    <div className='cart'>
                        <i class="bi bi-bag fs-5"></i>
                        <em className='roundpoint'>2</em>
                    </div>
                </Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
        </header>
        </>
    );
}

export default Header