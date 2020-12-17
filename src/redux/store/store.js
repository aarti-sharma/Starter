import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import rootReducer from "../reducers/rootReducer.js" ;
import thunk from "redux-thunk";
const composedEnhancer = compose(
    applyMiddleware(thunk),
  );
  

export const initStore = () => createStore(rootReducer, {},composedEnhancer);
  
export default store = initStore()
  