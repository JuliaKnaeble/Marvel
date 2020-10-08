// wrapper that connects the component to the sate
// connect reducer with component

import { connect } from "react-redux";
// imports the action neededs
import { requestHero, requestRandomHero } from "../../Redux/Actions";
import Home from "./Home";

export const mapStateToProps = (state, ownProps) => {
  return {
    // state = from the store, ownProps = props coming from the component
  };
};

// mapStateToProps, goes to the store gets the keys we need
//and gives it back to the component as props

const mapDispatchToProps = {
  requestHero,
  requestRandomHero,
};

// mapDispatchToProps, for importing the action

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);

// connecting mapState and mapDispatch to the relavant component

export default HomeContainer;