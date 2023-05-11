import React from 'react';
import { Card, Button } from 'react-bootstrap';

const CartItem = ({ item, handleRemoveFromCart, handleAddToCart }) => (
    <Card>
        <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>Quantity: {item.quantity}</Card.Text>
            <Button variant="primary" onClick={() => handleAddToCart(item)} style={{ margin: '0.2rem' }}>+</Button>
            <Button variant="danger" onClick={() => handleRemoveFromCart(item.id)} style={{ margin: '0.2rem' }}>-</Button>

        </Card.Body>
    </Card>
);

export default CartItem;
