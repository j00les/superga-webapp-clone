import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { setIsAuthenticatedFalse } from "../store/actions/user";

const NavBar = () => {
  const { user } = useSelector(state => state);
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(setIsAuthenticatedFalse());
    localStorage.clear();
  }

  return (
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
        <div className="navbar-end flex items-center">
          <div className="mr-3 mt-1">
            <span className="material-symbols-outlined">shopping_bag</span>
          </div>

          {user.isAuthenticated ? (
            <div className="flex gap-2 items-center">
              <p>Halo, {user.userData.name}</p>
              <button className="p-1 rounded-md bg-red-400" onClick={() => handleLogout()}>
                Logout
              </button>
            </div>
          ) : (
            <NavLink to="/login" className="material-symbols-outlined">
              person
            </NavLink>
          )}
        </div>
      </div>
    </>
  );
};

export default NavBar;
