// wrapper that connects the component to the sate
// connect reducer with component

import { connect } from "react-redux";
import { requestComic } from "../../Redux/Actions";
import Comics from "./Comics";

export const mapStateToProps = (state, ownProps) => {
  return {
    hero: state.hero.hero,
    comic: state.comic.comic,
  };
};

// mapStateToProps, goes to the store gets the keys we need
//and gives it back to the component as props

const mapDispatchToProps = {
  requestComic,
};

// mapDispatchToProps, for importing the action

const ComicsContainer = connect(mapStateToProps, mapDispatchToProps)(Comics);

// connecting mapState and mapDispatch to the relavant component

export default ComicsContainer;
