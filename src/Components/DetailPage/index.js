import { connect } from "react-redux";
import DetailPage from "./DetailPage";

export const mapStateToProps = (state, ownProps) => {
  return {
    hero: state.hero.hero,
    error: state.hero.error,
  };
};

const mapDispatchToProps = {};

const DetailPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailPage);

export default DetailPageContainer;
