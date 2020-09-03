const inistalState = {
  loading: false,
  comic: {},
  errorComic: "",
};

const comic = (state = inistalState, action) => {
  console.log(action);
  switch (action.type) {
    case `FETCH_COMIC_SUCCESS`:
      return {
        loading: false,
        comic: action.payload,
        errorComic: "",
      };

    default:
      return state;
  }
};

export default comic;
