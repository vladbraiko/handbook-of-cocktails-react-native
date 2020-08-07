import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { drinkReducer } from './reducers/drinks-reducer';
import { filterReducer } from './reducers/fIlters-reducer';

const rootReducer = combineReducers({
  drinks: drinkReducer,
  filters: filterReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
