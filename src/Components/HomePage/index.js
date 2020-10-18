// wrapper that connects the component to the sate
// connect reducer with component

import { connect } from "react-redux";
// imports the action needs
import {
  requestHero,
  requestRandomHero,
  requestSearch,
} from "../../Redux/Actions";
import Home from "./Home";

export const mapStateToProps = (state, ownProps) => {
  return {
    clicked: state.search.clicked,
    // state = from the store, ownProps = props coming from the component
  };
};

// mapStateToProps, goes to the store gets the keys we need
//and gives it back to the component as props

const mapDispatchToProps = {
  requestHero,
  requestRandomHero,
  requestSearch,
};

// mapDispatchToProps, for importing the action

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);

// connecting mapState and mapDispatch to the relevant component

export default HomeContainer;
