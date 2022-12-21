import { createAsyncThunk, createSlice, nanoid } from '@reduxjs/toolkit';
import axios from 'axios';

export const todoResponse = createAsyncThunk('todos/getData', async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5');
    return response.data;
});

export const addTodos = createAsyncThunk('todos/addTodos', async (title) => {
    const newTodo = {
        id: nanoid(),
        title,
        completed: false,
    };
    await axios.post('https://jsonplaceholder.typicode.com/todos', newTodo);
    return newTodo;
});

export const deleteTodos = createAsyncThunk('todos/deleteTodos', async (id) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
    return id;
});

// khoi tao gia tri nhan ban dau
const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        allTodos: [],
    },
    reducers: {
        // addTodos: (state, action) => {
        //     state.allTodos.unshift({
        //         id: nanoid(),
        //         title: action.payload,
        //         completed: false,
        //     });
        // },
        markCompleted: (state, action) => {
            const todoId = action.payload;
            state.allTodos = state.allTodos.map((todo) => {
                if (todo.id === todoId) todo.completed = !todo.completed;
                return todo;
            });
        },
        // deleteTodos: (state, action) => {
        //     const todoId = action.payload;
        //     state.allTodos = state.allTodos.filter((todo) => todo.id !== todoId);
        // },
    },
    extraReducers: {
        [todoResponse.fulfilled]: (state, action) => {
            state.allTodos = action.payload;
        },
        [addTodos.fulfilled]: (state, action) => {
            state.allTodos.unshift(action.payload);
        },
        [deleteTodos.fulfilled]: (state, action) => {
            state.allTodos = state.allTodos.filter((todo) => todo.id !== action.payload);
        },
    },
});

// tao reducer xu ly
const todosReducer = todoSlice.reducer;

// xuat du lieu cho component su dung
export const todoSeclector = (state) => state.todosReducer.allTodos;

// xuat action cho component su dung
export const { /*addTodos,*/ markCompleted /*, deleteTodos */ } = todoSlice.actions;

export default todosReducer;
