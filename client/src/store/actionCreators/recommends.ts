import { Dispatch } from "redux";
import { getRecommends } from "../../api/postService";
import { RECOMMENDS } from "../../libs/constants";
import { IAction } from "../../types/types";

const fetchRecommends = () => {
  return async (dispatch: Dispatch<IAction>) => {
    try {
      dispatch({ type: RECOMMENDS.FETCH_RECOMMENDS });
      const response = await getRecommends();
      dispatch({
        type: RECOMMENDS.FETCH_RECOMMENDS_SUCCESS,
        payload: response.data,
      });
    } catch (e: any) {
      dispatch({
        type: RECOMMENDS.FETCH_RECOMMENDS_ERROR,
        payload: e.response.data.message,
      });
    }
  };
};

export default fetchRecommends;
