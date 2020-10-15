import { connect } from "react-redux";
// imports the action neededs
import { requestHero, requestSearch } from "../../../Redux/Actions";
import ActiveSearch from "./ActiveSearch";

export const mapStateToProps = (state, ownProps) => {
  return {
    clicked: ownProps.clicked,
    clickedTwo: state.search.clicked,
    // state = from the store, ownProps = props coming from the component
  };
};

// mapStateToProps, goes to the store gets the keys we need
//and gives it back to the component as props

const mapDispatchToProps = {
  requestHero,
  requestSearch,
};

// mapDispatchToProps, for importing the action

const ActiveSearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ActiveSearch);

// connecting mapState and mapDispatch to the relavant component

export default ActiveSearchContainer;
