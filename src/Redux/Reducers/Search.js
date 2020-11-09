import { FETCH_SEARCH } from ".";

const initialState = {
  clicked: false,
};

const searchClicked = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SEARCH:
      return {
        clicked: action.payload,
      };

    default:
      return state;
  }
};

export default searchClicked;
