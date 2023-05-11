import React, { useEffect, useState } from 'react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import rootReducer from './reducer';
import Store from "./Store";
import ProductDetails from './ProductDetails';
import Cart from './Cart';
import NavbarComponent from './NavbarComponent';
import { Container } from 'react-bootstrap';
import { useLocalStorage } from './hooks/useLocalStorage';
import './App.css';

const App = () => {
  const [persistedState, setPersistedState] = useLocalStorage('state');
  const [store, setStore] = useState(null);

  useEffect(() => {
    const preloadedState = {
      ...rootReducer(undefined, {}), // get the initial state from reducer
      ...persistedState, // update initial state with localStorage cart items 
    };
    const createdStore = configureStore({ reducer: rootReducer, preloadedState });
    setStore(createdStore);

    // subscribe method is built into redux's store in configureStore. It takes a listener callback. 
    // Will invoke saveState anytime store is updated. 
    createdStore.subscribe(() => {
      setPersistedState({
        cart: createdStore.getState().cart
      });
    });
  }, [persistedState, setPersistedState]);

  // Don't render store until it's ready. Display loading message to avoid error. 
  if (!store) {
    return <div>Loading...</div>;
  }

  return (
    <Provider store={store}>
      <Router>
        <NavbarComponent />
        <Container>
          <Routes>
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/" element={<Store />} />
          </Routes>
        </Container>
      </Router>
    </Provider>
  );
};

export default App;


// To Do List:
// Add coupon codes and taxes
// Add tests