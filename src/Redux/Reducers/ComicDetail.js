const inistalState = {
  loading: false,
  indexKey: {},
  error: "",
};

const comicDetail = (state = inistalState, action) => {
  switch (action.type) {
    case `FETCH_COMIC_DETAIL_SUCCESS`:
      return {
        loading: false,
        indexKey: action.payload,
        error: "",
      };

    default:
      return state;
  }
};

export default comicDetail;
