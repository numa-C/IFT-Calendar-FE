import firebaseReducer from "./reducers";

export { default as firebaseSelectors } from "./selectors";
export { default as firebaseOperations } from "./operations";
export { default as firebaseTypes } from "./types";

export default firebaseReducer;

// import { initializeApp } from 'firebase/app';

// export class Firebase {

//   firebaseConfig = {
//     apiKey: "AIzaSyA9Uv2ZHfDco0eOhJnzPe3WiQodrFEEpCw",
//     authDomain: "ift-any.firebaseapp.com",
//     projectId: "ift-any",
//     storageBucket: "ift-any.appspot.com",
//     messagingSenderId: "400528320028",
//     appId: "1:400528320028:web:390b38315157bfa5f6a1d9",
//     measurementId: "G-L4S28HB2NP"
//   }

//   app: object | undefined;

//   constructor() {}

//   initialize() {
//     initializeApp(this.firebaseConfig)
//   }
// }
