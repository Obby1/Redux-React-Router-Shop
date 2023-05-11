import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from './actions';
import { Card, Button } from 'react-bootstrap';
import Cart from './Cart';

const ProductDetails = () => {
    const { id } = useParams();
    // useSelector to access specific product given it's id from params
    const product = useSelector(state => state.products[id]);
    const dispatch = useDispatch();
    const handleAddToCart = () => {
        dispatch(addToCart(product));
    };

    return (
        <div>
            <Card>
                <Card.Img variant="top" src={product.image_url} />
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>{product.description}</Card.Text>
                    <Card.Text>${product.price.toFixed(2)}</Card.Text>
                    <Button variant="primary" onClick={handleAddToCart}>Add to Cart</Button>
                </Card.Body>
            </Card>
            <Cart />
        </div>


    );
};

export default ProductDetails;
