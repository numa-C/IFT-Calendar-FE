import { combineReducers } from "redux";
import type { firebase, Todo, Id, Text, Action, VisibilityFilter } from "./types";

/* state shape
firebaseState {
  firebase: [],
  visibilityFilter: "SHOW_ALL"
} */

function createTodo(id: Id, text: Text): Todo {
  return { id, text, completed: false };
}

function toggleTodo(firebase: firebase, id: Id): firebase {
  return firebase.map(todo => {
    if (todo.id !== id) {
      return todo;
    }
    return Object.assign({}, todo, { completed: !todo.completed });
  });
}

const firebase = (state: firebase = [], action: Action): firebase => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, createTodo(action.id, action.text)];
    case "TOGGLE_TODO":
      return toggleTodo(state, action.id);
    default:
      return state;
  }
};

const visibilityFilter = (
  state: VisibilityFilter = "SHOW_ALL",
  action: Action
): VisibilityFilter => {
  switch (action.type) {
    case "SET_VISIBILITY_FILTER":
      return action.filter;
    default:
      return state;
  }
};

const firebaseReducer = combineReducers({
  firebase: firebase,
  visibilityFilter: visibilityFilter
});

export default firebaseReducer;
