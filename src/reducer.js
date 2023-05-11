import { ADD_TO_CART, REMOVE_FROM_CART, SET_CART } from './actionTypes';
import data from './data.json';

const initialState = {
    products: data.products,
    cart: {}
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const { product } = action;
            // check if state.cart contains product.id and assign it to var, else set qty to 0. 
            // we will later increment qty by +1 in return statement
            const currentQuantity = state.cart[product.id]?.quantity || 0;
            // spread existing state to copy it, update cart with new cart object that has previous
            // items but we update matching product.id quantity + 1
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

        // case SET_CART:
        //     return {
        //         ...state,
        //         cart: action.cart
        //     };

        default:
            return state;
    }
};


export default reducer;



        // case INITIALIZE_CART:
        //     return {
        //         ...state,
        //         cart: action.cart.reduce((cart, item) => {
        //             cart[item.id] = item;
        //             return cart;
        //         }, {})
        //     };
