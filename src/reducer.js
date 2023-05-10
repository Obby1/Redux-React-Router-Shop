import { ADD_TO_CART, REMOVE_FROM_CART } from './actionTypes';
import data from './data.json';

const initialState = {
    products: data.products,
    cart: {}
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const { product } = action;
            const currentQuantity = state.cart[product.id]?.quantity || 0;
            return {
                ...state,
                cart: {
                    ...state.cart,
                    [product.id]: {
                        ...product,
                        quantity: currentQuantity + 1
                    }
                }
            };
        case REMOVE_FROM_CART:
            const { productId } = action;
            const newCart = { ...state.cart };
            if (newCart[productId].quantity > 1) {
                newCart[productId] = {
                    ...newCart[productId],
                    quantity: newCart[productId].quantity - 1
                };
            } else {
                delete newCart[productId];
            }
            return {
                ...state,
                cart: newCart
            };

        default:
            return state;
    }
};


export default reducer;