import { NavLink } from "react-router-dom";

const NavBar = () => (
  <>
    {/* bawah */}
    <div className="navbar bg-black p-2 px-4">
      <NavLink to="/" className="navbar-start">
        <img
          alt="icons"
          src="https://cdn.shopify.com/s/files/1/0421/7887/1458/files/output-onlinepngtools-removebg-preview_180x.png?v=1613765226"
        />
      </NavLink>
      <div className="navbar-center gap-2 text-white">
        <NavLink to="/category/men" className="uppercase font-bold">
          men
        </NavLink>
        <NavLink to="/category/women" className="uppercase font-bold">
          women
        </NavLink>
        <NavLink to="/category/kids" className="uppercase font-bold">
          kids
        </NavLink>
      </div>
      <div className="navbar-end">
        <span className="material-symbols-outlined">search</span>
        <span className="material-symbols-outlined">shopping_bag</span>
        <NavLink to="/login" className="material-symbols-outlined">
          person
        </NavLink>
      </div>
    </div>
  </>
);

export default NavBar;
