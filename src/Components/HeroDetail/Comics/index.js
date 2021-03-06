// wrapper that connects the component to the sate
// connect reducer with component

import { connect } from "react-redux";
import { requestComic, requestComicDetail } from "../../../Redux/Actions/index";
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
  requestComicDetail,
};

// mapDispatchToProps, for importing the action

const ComicsContainer = connect(mapStateToProps, mapDispatchToProps)(Comics);

// connecting mapState and mapDispatch to the relevant component

export default ComicsContainer;
