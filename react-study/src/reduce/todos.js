import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    todos: [],
}

// reduce
const todosSlice = createSlice({
    // reducer name
    name: 'todos',
    // reduce의 초기값
    initialState,
    // reducer의 action들
    // todos의 데이터들
    reducers: {
        setTodos: (state, action) => {
            const { payload } = action;
            state.todos = payload;
        },
        createTodo: (state, action) => {
            const { payload } = action;
            state.todos = [...state.todos, payload];
        },
        deleteTodo: (state, action) => {
            const { payload } = action;
            state.todos = state.todos.filter(todo => todo.id !== payload);
        },
        deleteSelectedTodos: (state, action) => {
            const { payload } = action;
            state.todos = state.todos.filter(todo => !payload.includes(todo.id));
        },
    },
});

export const { setTodos, createTodo, deleteTodo, deleteSelectedTodos } = todosSlice.actions;
export default todosSlice.reducer;