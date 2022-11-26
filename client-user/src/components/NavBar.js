import { NavLink } from "react-router-dom";

const NavBar = () => (
  <>
    <div className="navbar text-center bg-white text-neutral-content justify-center p-2">
      <a href="$" className="btn btn-ghost normal-case text-black text-center text-xl">
        SHOP NOW! WE DELIVER EVERYDAY, 7 DAYS A WEEK
      </a>
    </div>

    {/* bawah */}
    <div className="navbar bg-black">
      <NavLink to="/" className="navbar-start">
        <img
          alt="icons"
          src="https://cdn.shopify.com/s/files/1/0421/7887/1458/files/output-onlinepngtools-removebg-preview_180x.png?v=1613765226"
        />
      </NavLink>
      <div className="navbar-center gap-2 text-white">
        <span className="uppercase font-bold">new arrivals</span>
        <NavLink to="/category/women" className="uppercase font-bold">
          women
        </NavLink>

        <NavLink to="/category/men" className="uppercase font-bold">
          men
        </NavLink>
        <NavLink to="/category/kids" className="uppercase font-bold">
          kids
        </NavLink>

        <span className="uppercase font-bold">collaboration</span>
        <span className="uppercase font-bold">release</span>
        <span className="uppercase font-bold">accesories</span>
        <span className="uppercase font-bold">sale</span>
      </div>
      <div className="navbar-end">
        <span className="material-symbols-outlined">search</span>
        <span className="material-symbols-outlined">shopping_bag</span>
        <span className="material-symbols-outlined">person</span>
      </div>
    </div>
  </>
);

export default NavBar;
