import { createAction } from "@reduxjs/toolkit";

export const fetchDrinksRequest = createAction("drinksDB/fetchDrinksRequest");
export const fetchDrinksSuccess = createAction("drinksDB/fetchDrinksSuccess");
export const fetchDrinksError = createAction("drinksDB/fetchDrinksError");

export const setSectionCount = createAction("drinksDB/setSectionCount");
export const clearDrinks = createAction("drinksDB/clearDrinks");

export const fetchFiltersRequest = createAction("drinksDB/fetchFiltersRequest");
export const fetchFiltersSuccess = createAction("drinksDB/fetchFiltersSuccess");
export const fetchFiltersError = createAction("drinksDB/fetchFiltersError");

export const setCheckedFilter = createAction("drinksDB/setCheckedFilter");
