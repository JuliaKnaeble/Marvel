// wrapper that connects the component to the sate
// connect reducer with component

import { connect } from "react-redux";
// imports the action neededs
import { requestHero, requestRandomHero } from "../../Redux/Actions";
import NavbarNew from "./NavbarNew";

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

const NavbarNewContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NavbarNew);

// connecting mapState and mapDispatch to the relavant component

export default NavbarNewContainer;