import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './reducers/todosReducer';

// tao kho xu ly
const store = configureStore({
    reducer: {
        todosReducer,
    },
});

export default store;
