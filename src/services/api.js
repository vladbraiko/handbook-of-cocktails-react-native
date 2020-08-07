import axios from "axios";
axios.defaults.baseURL = "https://www.thecocktaildb.com/api/json/v1/1/";

export const getFilteredDrinks = (filter) =>
  axios.get(`filter.php?c=${filter}`);

export const getFilters = () => axios.get(`list.php?c=list`);
