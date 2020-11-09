// wrapper that connects the component to the sate
// connect reducer with component

import { connect } from "react-redux";
import { requestComicDetail } from "../../../Redux/Actions/index";
import AllComics from "./AllComics";

export const mapStateToProps = (state, ownProps) => {
  return {
    hero: state.hero.hero,
    comic: state.comic.comic,
    comicsToShow: ownProps.comicsToShow,
  };
};

// mapStateToProps, goes to the store gets the keys we need
//and gives it back to the component as props

const mapDispatchToProps = {
  requestComicDetail,
};

const AllComicsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AllComics);

// connecting mapState and mapDispatch to the relevant component

export default AllComicsContainer;
