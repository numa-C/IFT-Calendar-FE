import type { Store as ReduxStore, Dispatch as ReduxDispatch } from "redux";

export type Id = number;

export type Text = string;

export type Todo = {
  id: Id,
  text: Text,
  completed: boolean
};

export type VisibilityFilter = "SHOW_ALL" | "SHOW_ACTIVE" | "SHOW_COMPLETED";

export type firebase = Array<Todo>;

export type firebaseState = {
  firebase: firebase,
  visibilityFilter: VisibilityFilter
};

export type Action =
  | { type: "ADD_TODO", id: Id, text: Text }
  | { type: "SET_VISIBILITY_FILTER", filter: VisibilityFilter }
  | { type: "TOGGLE_TODO", id: Id };

export type Store = ReduxStore<firebaseState, Action>;

export type Dispatch = ReduxDispatch<Action>;
