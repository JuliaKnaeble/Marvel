import { FETCH_COMIC_SUCCESS } from ".";

const initialState = {
  loading: false,
  comic: [],
  error: "",
};

const comic = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COMIC_SUCCESS:
      return {
        loading: false,
        comic: action.payload,
        error: "",
      };

    default:
      return state;
  }
};

export default comic;
