import { Dispatch } from "redux";
import { getSights } from "../../api/postService";
import { SIGHTS } from "../../libs/constants";
import { IAction } from "../../types/types";

const fetchSights = (id: string) => {
  return async (dispatch: Dispatch<IAction>) => {
    try {
      dispatch({ type: SIGHTS.FETCH_SIGHTS });
      const response = await getSights(id);
      dispatch({
        type: SIGHTS.FETCH_SIGHTS_SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: SIGHTS.FETCH_SIGHTS_ERROR,
        payload: "Error loading sights",
      });
    }
  };
};

export default fetchSights;