import { connect } from "react-redux";
import { requestHero } from "../../Redux/Actions";
import NavbarNew from "./NavbarNew";

export const mapStateToProps = (state, ownProps) => {
  return {
    hero: state.hero.hero,
  };
};

const mapDispatchToProps = {
  requestHero,
};

const NavbarNewContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NavbarNew);

export default NavbarNewContainer;
