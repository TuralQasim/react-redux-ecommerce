import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { useEffect } from "react";
function Header({ favoriteLength }) {
  return (
    <header className="container">
      <NavLink to="/">Products</NavLink>
      <NavLink to="/favorites">Favorites {`(${favoriteLength})`}</NavLink>
      <NavLink to="/latest">Latest</NavLink>
      <NavLink to="/deleted">Deleted</NavLink>
    </header>
  );
}
const t = (a) => {
  return {
    favoriteLength: a.favlen,
  };
};
export default connect(t)(Header);
