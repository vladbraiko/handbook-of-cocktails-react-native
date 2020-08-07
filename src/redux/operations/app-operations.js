import { getFilteredDrinks, getFilters } from "../../services/api";
import {
  fetchDrinksRequest,
  fetchDrinksSuccess,
  fetchDrinksError,
  fetchFiltersRequest,
  fetchFiltersSuccess,
  fetchFiltersError,
  setSectionCount,
  setCheckedFilter,
  clearDrinks,
} from "../actions/app-actions";

export const fetchDrinks = () => async (dispatch, getState) => {
  dispatch(fetchDrinksRequest());
  try {
    const { drinks, filters } = getState();
    const count = drinks.sectionCount;
    const filter = filters.checkedFilters[count];
    const { data } = await getFilteredDrinks(filter);
    dispatch(fetchDrinksSuccess({ filter, data: data.drinks }));
  } catch (error) {
    dispatch(fetchDrinksError(error));
  }
};

export const loadNextSection = () => async (dispatch, getState) => {
  const { drinks, filters } = getState();
  const count = ++drinks.sectionCount;
  if (count >= filters.checkedFilters.length) return true;
  dispatch(setSectionCount(count));
  await dispatch(fetchDrinks());
  return false;
};

export const setCheckedFilters = (filters) => (dispatch) => {
  dispatch(setCheckedFilter(filters));
  dispatch(clearDrinks());
  dispatch(fetchDrinks());
};

export const fetchFilters = () => async (dispatch) => {
  dispatch(fetchFiltersRequest());
  try {
    const { data } = await getFilters();
    const filters = data.drinks.map((item) => item.strCategory);
    dispatch(fetchFiltersSuccess(filters));
    dispatch(setCheckedFilter(filters));
  } catch (error) {
    dispatch(fetchFiltersError());
  }
};
