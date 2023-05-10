import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

const Product = ({ product, handleAddToCart, handleRemoveFromCart }) => (
    <Card>
        <div style={{ height: '200px', overflow: 'hidden' }}>
            <Card.Img variant="top" src={product.image_url} style={{ maxHeight: '100%', width: 'auto' }} />
        </div>
        <Card.Body>
            <Card.Title>
                <Link to={`/products/${product.id}`}>{product.name}</Link>
            </Card.Title>
            <Button variant="primary" onClick={() => handleAddToCart(product)}>Add to Cart</Button>
        </Card.Body>
    </Card>
);

export default Product;