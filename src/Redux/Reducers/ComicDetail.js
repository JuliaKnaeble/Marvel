const initialState = {
  loading: false,
  indexKey: {},
  error: "",
};

const comicDetail = (state = initialState, action) => {
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
