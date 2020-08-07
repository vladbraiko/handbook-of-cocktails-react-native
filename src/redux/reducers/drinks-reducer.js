import { createReducer } from "@reduxjs/toolkit";
import {
  fetchDrinksSuccess,
  setSectionCount,
  clearDrinks,
} from "../actions/app-actions";

const initialState = {
  sectionCount: 0,
  drinks: [],
};

export const drinkReducer = createReducer(initialState, {
  [fetchDrinksSuccess]: (state, { payload }) => ({
    ...state,
    drinks: [...state.drinks, payload.drinks],
  }),
  [setSectionCount]: (state, { payload }) => ({
    ...state,
    sectionCount: payload.count,
  }),
  [clearDrinks]: (state) => state,
});
