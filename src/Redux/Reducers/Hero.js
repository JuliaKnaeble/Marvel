//State
const initialState = {
  loading: false,
  hero: {},
  error: "",
};

const hero = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case `FETCH_HERO_SUCCESS`:
      return {
        loading: false,
        hero: action.payload,
        error: "",
      };

    case `FETCH_HERO_FAILURE`:
      return {
        loading: false,
        hero: {},
        error: action.payload,
      };
    default:
      return state;
  }
};

export default hero;
