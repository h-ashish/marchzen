import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import CountReducer from '../reducers/CountReducer';
import TodoReducer from '../reducers/TodoReducer';
import ForumReducer from '../reducers/ForumReducer'
import ProductsReducer from '../reducers/ProductsReducer';
import LoginReducer from '../reducers/LoginReducer';
let rootReducer = combineReducers({count:CountReducer, products:ProductsReducer, todo:TodoReducer, register: LoginReducer})
const store = createStore(rootReducer, applyMiddleware(thunk));
// const todoStore = createStore(TodoReducer);
export default store;