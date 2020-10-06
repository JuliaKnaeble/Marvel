// wrapper that connects the component to the sate
// connect reducer with component

import { connect } from "react-redux";
import { requestComicDetail } from "../../../Redux/Actions/index";
import AllComicsDetail from "./AllComicsDetail";

export const mapStateToProps = (state, ownProps) => {
  return {
    hero: state.hero.hero,
    comic: state.comic.comic,
  };
};

// mapStateToProps, goes to the store gets the keys we need
//and gives it back to the component as props

const mapDispatchToProps = {
  requestComicDetail,
};

const AllComicsDetailContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AllComicsDetail);

// connecting mapState and mapDispatch to the relavant component

export default AllComicsDetailContainer;
