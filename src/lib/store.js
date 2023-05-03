import { configureStore } from '@reduxjs/toolkit';
import firebaserReducer from "../reducers/firebaserReducer";


export const store = configureStore({
    reducer: {
        firebase: firebaserReducer,
    },
    // devTools: process.env.NODE_ENV !== 'production',    
});