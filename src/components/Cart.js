import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../redux/actions';
import { Row, Col } from 'react-bootstrap';
import CartItem from './CartItem';

const Cart = () => {
    const cart = useSelector((state) =>
        Object.entries(state.cart).map(([id, item]) => ({ ...item, id }))
    );
    const dispatch = useDispatch();

    const handleRemoveFromCart = (productId) => {
        dispatch(removeFromCart(productId));
    };


    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };


    const total = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div>
            <h1>Shopping Cart</h1>
            <Row>
                {cart.map((item) => (
                    <Col sm={4} key={item.id}>
                        <CartItem item={item} handleRemoveFromCart={handleRemoveFromCart} handleAddToCart={handleAddToCart} />
                    </Col>
                ))}
            </Row>
            <h2>Total: ${total.toFixed(2)}</h2>
        </div>
    );
};

export default Cart;