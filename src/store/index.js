import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { contactReducer } from "./reducers/contactReducer";
const composeEnhancers  = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose  //with 2 : '__' at beginning and end
export const store = createStore(contactReducer,composeEnhancers(applyMiddleware(thunk))) 