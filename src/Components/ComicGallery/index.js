// wrapper that connects the component to the sate
// connect reducer with component

import { connect } from "react-redux";
import { requestComicDetail } from "../../Redux/Actions/index";
import ComicGallery from "./ComicGallery";

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

const ComicGalleryContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ComicGallery);

// connecting mapState and mapDispatch to the relevant component

export default ComicGalleryContainer;