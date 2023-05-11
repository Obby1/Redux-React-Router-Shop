import { useEffect, useState } from 'react';

export const useLocalStorage = (key, defaultValue = '') => {
    const [state, setState] = useState(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : defaultValue;
        } catch (error) {
            console.warn(`Error reading "${key}" from localStorage`, error);
            return defaultValue;
        }
    });

    useEffect(() => {
        try {
            const serializedState = JSON.stringify(state);
            window.localStorage.setItem(key, serializedState);
        } catch (error) {
            console.warn(`Error setting "${key}" in localStorage`, error);
        }
    }, [state, key]);

    return [state, setState];
};


// import { useState } from "react";

// function useLocalStorage(key, initialValue) {
//     const [storedValue, setStoredValue] = useState(() => {
//         try {
//             const item = window.localStorage.getItem(key);
//             return item ? JSON.parse(item) : initialValue;
//         } catch (error) {
//             console.log(error);
//             return initialValue;
//         }
//     });

//     const setValue = (value) => {
//         try {
//             const valueToStore = value instanceof Function ? value(storedValue) : value;
//             setStoredValue(valueToStore);
//             window.localStorage.setItem(key, JSON.stringify(valueToStore));
//         } catch (error) {
//             console.log(error);
//         }
//     };

//     return [storedValue, setValue];
// }

// export default useLocalStorage;

// // old local storage hook: 

// import { useState, useEffect } from "react";

// const useLocalStorage = (key, initialValue) => {
//     const [state, setState] = useState(() => {
//         const value = localStorage.getItem(key);
//         if (value) {
//             return JSON.parse(value);
//         } else {
//             return initialValue;
//         }
//     });

//     useEffect(() => {
//         const previousValue = JSON.parse(localStorage.getItem(key));
//         if (JSON.stringify(previousValue) !== JSON.stringify(state)) {
//             localStorage.setItem(key, JSON.stringify(state));
//         }
//     }, [state, key]);

//     return [state, setState];
// };

// export default useLocalStorage;

// import { useState, useEffect } from "react";

// const useLocalStorage = (key, initialValue) => {
//     const [state, setState] = useState(initialValue);

//     useEffect(() => {
//         const getItem = () => {
//             const value = localStorage.getItem(key);
//             if (value) {
//                 return JSON.parse(value);
//             } else {
//                 return initialValue;
//             }
//         };

//         setState(getItem());
//     }, [key, initialValue]);

//     const setItem = (value) => {
//         localStorage.setItem(key, JSON.stringify(value));
//         setState(value);
//     };

//     return [state, setItem];
// };

// export default useLocalStorage;