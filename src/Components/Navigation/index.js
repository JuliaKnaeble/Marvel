// wrapper that connects the component to the sate
// connect reducer with component

import { connect } from "react-redux";
// imports the action needs
import {
  requestHero,
  requestRandomHero,
  requestSearch,
} from "../../Redux/Actions";
import Nav from "./Nav";

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
  requestSearch,
};

// mapDispatchToProps, for importing the action

const NavbarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav);

// connecting mapState and mapDispatch to the relevant component

export default NavbarContainer;
