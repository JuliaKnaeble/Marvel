// wrapper that connects the component to the sate
// connect reducer with component

import { connect } from "react-redux";
import { requestComic, resetTotalComics } from "../../Redux/Actions";
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
  resetTotalComics,
};

// mapDispatchToProps, for importing the action

const HeroDetailContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailPage);

// connecting mapState and mapDispatch to the relevant component

export default HeroDetailContainer;
