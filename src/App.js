import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import rootReducer from './reducer';
import Store from "./Store";
import ProductDetails from './ProductDetails';
import Cart from './Cart';
import NavbarComponent from './NavbarComponent';
import { Container } from 'react-bootstrap';
import './App.css';

const store = configureStore({ reducer: rootReducer });

const App = () => {
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
// Build Local Storage and hook and save cart to local storage
// Add coupon codes and taxes