/* eslint-disable import/prefer-default-export */
import { creatStore } from 'redux';

const initialState = {
  todos: [
    {
      id: 4444,
      name: 'gogoogog',
      complete: false,
    },
    {
      id: 4444,
      name: 'gogoogog',
      complete: false,
    },

  ],
};

function reduser(state, { type, payload }) {
  switch (type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, payload],
      };
    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: state.todos.map((todo) => ((todo.id === payload) ? { ...todo, complete: !todo.complete } : todo)),
      };
    case 'DELETE_TODO':
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== payload),
      };
    default:
      return state;
  }
}

export const addTodoAction = (todo) => ({
  type: 'ADD_TODO',
  payload: todo,
});
export const toggleTodoAction = (todoId) => ({
  type: 'TOGGLE_TODO',
  payload: todoId,
});
export const deleteTodoAction = (todoId) => ({
  type: 'ADD_TODO',
  payload: todoId,
});

export const store = creatStore(
  reduser,
  initialState,
);
