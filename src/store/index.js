import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { contactReducer } from "./reducers/contactReducer";
import { userReducer } from "./reducers/userReducer"
const composeEnhancers  = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose  //with 2 : '__' at beginning and end
const rootReducer = combineReducers({
    // contactReducer,
    // userReducer
    contactModule : contactReducer,
    userModule : userReducer
})

export const store = createStore(rootReducer,composeEnhancers(applyMiddleware(thunk))) 
// export const store = createStore(contactReducer,composeEnhancers(applyMiddleware(thunk))) 
// console.log(store.getState());