// wrapper that connects the component to the sate
// connect reducer with component

import { connect } from "react-redux";
import { requestTotalComics } from "../../Redux/Actions/index";
import ComicGallery from "./ComicGallery";

export const mapStateToProps = (state, ownProps) => {
  return {
    hero: state.hero.hero,
    comic: state.comic.comic,
    totalNumber: state.totalComicsToShow.totalNumber
  };
};

// mapStateToProps, goes to the store gets the keys we need
//and gives it back to the component as props

const mapDispatchToProps = {
  requestTotalComics,
};

const ComicGalleryContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ComicGallery);

// connecting mapState and mapDispatch to the relevant component

export default ComicGalleryContainer;
