import { ADD_TO_CART, REMOVE_FROM_CART, SET_CART } from './actionTypes';

export const addToCart = (product) => ({
    type: ADD_TO_CART,
    product
});

export const removeFromCart = (productId) => ({
    type: REMOVE_FROM_CART,
    productId
});

// export const initializeCart = (cart) => ({
//     type: INITIALIZE_CART,
//     cart
// });


export const setCart = (cart) => {
    return {
        type: SET_CART,
        cart
    };
};