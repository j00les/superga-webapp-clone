import { useAppDispatch, useAppSelector } from 'hooks/hooks'
import { NavLink } from 'react-router-dom'

export const NavBar: React.FC = () => {
  // const { users } = useAppSelector((state) => state);
  const dispatch = useAppDispatch()

  // function handleLogout() {
  //   dispatch(setIsAuthenticatedFalse());
  //   localStorage.clear();
  // }

  // dispatch(setIsAuthenticatedFalse());

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
          {/*
      *
          {users.isAuthenticated ? (
            <div className="flex gap-2 items-center">
              <p>Halo, {users.userData.name}</p>
              <button className="p-1 rounded-md bg-red-400">Logout</button>
            </div>
          ) : (
            <NavLink to="/login" className="material-symbols-outlined">
              person
            </NavLink>
          )}
      */}
        </div>
      </div>
    </>
  )
}
