// wrapper that connects the component to the sate
// connect reducer with component

import { connect } from "react-redux";
import { requestComic } from "../../Redux/Actions";
import DetailPage from "./DetailPage";

export const mapStateToProps = (state, ownProps) => {
  return {
    hero: state.hero.hero,
    error: state.hero.error,
    comic: state.comic.comic,
  };
};

// mapStateToProps, goes to the store gets the keys we need
//and gives it back to the component as props

const mapDispatchToProps = {
  requestComic,
};

// mapDispatchToProps, for importing the action

const DetailPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailPage);

// connecting mapState and mapDispatch to the relavant component

export default DetailPageContainer;
