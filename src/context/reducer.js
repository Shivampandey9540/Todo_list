import { ADD_TODO, REMOVE_TODO } from "./actions.type";

//TODO
export const TodoReducer = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];

    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.payload);

    default:
      break;
  }
};
