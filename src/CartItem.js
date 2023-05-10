import React from 'react';
import { Card, Button } from 'react-bootstrap';

const CartItem = ({ item, handleRemoveFromCart, handleAddToCart }) => (
    <Card>
        <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>Quantity: {item.quantity}</Card.Text>
            <Button variant="primary" onClick={() => handleAddToCart(item)}>+</Button>
            <Button variant="danger" onClick={() => handleRemoveFromCart(item.id)}>-</Button>

        </Card.Body>
    </Card>
);

export default CartItem;
