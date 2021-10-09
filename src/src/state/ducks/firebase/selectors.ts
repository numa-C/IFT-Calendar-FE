import type { firebase, VisibilityFilter } from "./types";

const getVisiblefirebase = (firebase: firebase, filter: VisibilityFilter): firebase => {
  switch (filter) {
    case "SHOW_ALL":
      return firebase;
    case "SHOW_COMPLETED":
      return firebase.filter(t => t.completed);
    case "SHOW_ACTIVE":
      return firebase.filter(t => !t.completed);
    default:
      throw new Error("Unknown filter: " + filter);
  }
};

export default {
  getVisiblefirebase
};
