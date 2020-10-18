// wrapper that connects the component to the sate
// connect reducer with component
import { connect } from "react-redux";
import ComicsDetail from "./ComicsDetail";

export const mapStateToProps = (state, ownProps) => {
  return {
    hero: state.hero.hero,
    comic: state.comic.comic,
    indexKey: state.comicDetail.indexKey,
  };
};

// mapStateToProps, goes to the store gets the keys we need
//and gives it back to the component as props

const ComicsDetailContainer = connect(mapStateToProps)(ComicsDetail);

// connecting mapState and mapDispatch to the relevant component

export default ComicsDetailContainer;
