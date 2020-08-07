import { createReducer } from "@reduxjs/toolkit";

import { fetchFiltersSuccess, setCheckedFilter } from "../actions/app-actions";

const initialState = {
  filters: [],
  checkedFilters: [],
};

export const filterReducer = createReducer(initialState, {
  [fetchFiltersSuccess]: (state, { payload }) => ({
    ...state,
    filters: payload.filters,
  }),
  [setCheckedFilter]: (state, { payload }) => ({
    ...state,
    checkedFilters: [...payload.filters],
  }),
});
