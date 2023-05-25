import { Dispatch } from "redux";
import { getCities } from "../../api/postService";
import { CITIES } from "../../libs/constants";
import { IAction } from "../../types/types";

const fetchCities = () => {
  return async (dispatch: Dispatch<IAction>) => {
    try {
      dispatch({ type: CITIES.FETCH_CITIES });
      const response = await getCities();
      dispatch({
        type: CITIES.FETCH_CITIES_SUCCESS,
        payload: response.data,
      });
    } catch (e: any) {
      dispatch({
        type: CITIES.FETCH_CITIES_ERROR,
        payload: e.response.data.message,
      });
    }
  };
};

export default fetchCities;
