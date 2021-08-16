import { NavLink } from "react-router-dom";

const NavMain = () => {
  return (
    <div>
      <NavLink to="/wanted">Wanted</NavLink>
      <NavLink to="/dashboard">Dashboard</NavLink>
    </div>
  );
};

export default NavMain;
