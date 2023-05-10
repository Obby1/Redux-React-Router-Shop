import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Product from './Product';
import { addToCart } from './actions';
import { Container, Row, Col } from 'react-bootstrap';
import Cart from './Cart';



function Store() {
    const dispatch = useDispatch();
    const products = useSelector((state) =>
        Object.entries(state.products).map(([id, product]) => ({ ...product, id }))
    );

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };


    return (
        <Container>
            <h1>Product List</h1>
            <Row>
                {products.map((product) => (
                    <Col sm={4} key={product.id}>
                        <Product product={product} handleAddToCart={handleAddToCart} />
                    </Col>
                ))}
            </Row>
            <Cart />
        </Container>
    );
}

export default Store;

