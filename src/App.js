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
      ...rootReducer(undefined, {}),
      ...persistedState,
    };
    const createdStore = configureStore({ reducer: rootReducer, preloadedState });
    setStore(createdStore);

    createdStore.subscribe(() => {
      setPersistedState({
        cart: createdStore.getState().cart
      });
    });
  }, [persistedState, setPersistedState]);

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



// // ------------------------------- working below: 

// import React, { useEffect, useState } from 'react';
// import { configureStore } from '@reduxjs/toolkit';
// import { Provider } from 'react-redux';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import rootReducer from './reducer';
// import Store from "./Store";
// import ProductDetails from './ProductDetails';
// import Cart from './Cart';
// import NavbarComponent from './NavbarComponent';
// import { Container } from 'react-bootstrap';
// import { loadState, saveState } from './localStorage';
// import './App.css';



// const App = () => {
//   const [store, setStore] = useState(null);

//   useEffect(() => {
//     let persistedState = loadState();
//     persistedState = {
//       ...rootReducer(undefined, {}), // get the initial state from reducer
//       ...persistedState, // update initial state with localStorage cart items 
//     };
//     const createdStore = configureStore({ reducer: rootReducer, preloadedState: persistedState });
//     setStore(createdStore);

//     // subscribe method is built into redux's store in configureStore. It takes a listener callback. 
//     // Will invoke saveState anytime store is updated. 
//     createdStore.subscribe(() => {
//       saveState({
//         cart: createdStore.getState().cart
//       });
//     });
//   }, []);

//   // Don't render store until it's ready. Display loading message to avoid error. 
//   if (!store) {
//     return <div>Loading...</div>;
//   }


//   return (
//     <Provider store={store}>
//       <Router>
//         <NavbarComponent />
//         <Container>
//           <Routes>
//             <Route path="/products/:id" element={<ProductDetails />} />
//             <Route path="/cart" element={<Cart />} />
//             <Route path="/" element={<Store />} />
//           </Routes>
//         </Container>
//       </Router>
//     </Provider>
//   );
// };

// export default App;

// // -------------------------------

// import useLocalStorage from './hooks/useLocalStorage';
// import { setCart } from './actions';

// const store = configureStore({ reducer: rootReducer });

  // const [storedCart, setStoredCart] = useLocalStorage('cart', {});
  // const [storedCart, setStoredCart] = useLocalStorage('cart', {});
  // const store = configureStore({ reducer: rootReducer, preloadedState: { cart: storedCart } });

  // useEffect(() => {
  //   const unsubscribe = store.subscribe(() => {
  //     setStoredCart(store.getState().cart);
  //   });

  //   return () => {
  //     unsubscribe();
  //   };
  // }, [store, setStoredCart]);

// To Do List:
// Finalize Building Local Storage and hook and save cart to local storage. Currently started coding but not done. 
// Ask mentor Krunal for help to finish this? 
// Add coupon codes and taxes