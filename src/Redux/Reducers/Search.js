const inistalState = {
  clicked: false,
};

const searchClicked = (state = inistalState, action) => {
  switch (action.type) {
    case `FETCH_SEARCH`:
      return {
        clicked: action.payload,
      };

    default:
      return state;
  }
};

export default searchClicked;
