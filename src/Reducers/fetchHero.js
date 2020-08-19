//State
const inistalState = {
  loading: false,
  hero: [],
  error: ``,
};

const reducer = (state = inistalState, action) => {
  switch (action.type) {
    case `FETCH_HERO_REQUEST`:
      return {
        ...state,
        loading: true,
      };

    case `FETCH_HERO_SUCCESS`:
      return {
        loading: false,
        hero: action.payload,
        error: ``,
      };

    case `FETCH_HERO_FAILURE`:
      return {
        loading: false,
        hero: [],
        error: action.payload,
      };
  }
};

export default reducer;
