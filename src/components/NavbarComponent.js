import React from 'react';
import { useSelector } from 'react-redux';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const NavbarComponent = () => {
    const cart = useSelector((state) =>
        Object.entries(state.cart).map(([id, item]) => ({ ...item, id }))
    );

    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand>My Store</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <LinkContainer to="/">
                            <Nav.Link>Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/cart">
                            <Nav.Link>Cart ({totalItems} items, ${totalPrice.toFixed(2)})</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavbarComponent;
