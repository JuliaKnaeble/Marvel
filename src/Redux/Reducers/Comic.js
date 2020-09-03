const inistalState = {
  loading: false,
  comic: [],
  error: "",
};

const comic = (state = inistalState, action) => {
  console.log(action);
  switch (action.type) {
    case `FETCH_COMIC_SUCCESS`:
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
