import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { drinkReducer } from "./reducers/DrinksReducer";
import { filterReducer } from "./reducers/FIltersReducer";

const rootReducer = combineReducers({
  drinks: drinkReducer,
  filters: filterReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
