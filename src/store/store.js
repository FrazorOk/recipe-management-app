import { combineReducers, legacy_createStore, applyMiddleware } from 'redux';
import userReducer from './user-reducer';
import thunk from 'redux-thunk';
import recipesReducer from './recipes-reducer';

let reducers = combineReducers({
	user: userReducer,
	recipe: recipesReducer,
});

let store = legacy_createStore(reducers, applyMiddleware(thunk));

export default store;
window.store = store;
