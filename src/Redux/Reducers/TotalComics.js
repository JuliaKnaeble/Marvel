import { FETCH_TOTAL_NUMBER, RESET_TOTAL_NUMBER } from ".";

const initialState = {
  totalNumber: 8,
};

const totalComicsToShow = (state = initialState, action) => {
  switch (action.type) {
    case RESET_TOTAL_NUMBER:
      return initialState;
    case FETCH_TOTAL_NUMBER:
      return {
        totalNumber: action.payload,
      };

    default:
      return state;
  }
};

export default totalComicsToShow;
