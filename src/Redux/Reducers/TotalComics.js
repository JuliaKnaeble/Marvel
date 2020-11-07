const initialState = {
  totalNumber: [],
};

const totalComicsToShow = (state = initialState, action) => {
  switch (action.type) {
    case `FETCH_TOTAL_NUMBER`:
      return {
        totalNumber: action.payload,
      };

    default:
      return state;
  }
};

export default totalComicsToShow;