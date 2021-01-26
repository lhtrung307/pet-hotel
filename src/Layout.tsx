import React, { ReactElement, ReactNode } from "react";
import { Link, NavLink } from "react-router-dom";
import { routes } from "routes";

interface IProps {
  children: ReactNode;
}

function Layout({ children }: IProps): ReactElement {
  return (
    <div className="flex bg-blue-700 px-8 py-5">
      <nav className="pr-5 pb-16 overflow-x-hidden w-64">
        <Link to="/">
          <span className="block text-lg text-white ml-3">Home</span>
        </Link>
        <div className="border-t border-gray-300 border-opacity-25 my-5"></div>
        <div className="text-white">
          {routes.map(({ path, exact, pathName, icon }) => (
            <NavLink
              key={pathName}
              to={path}
              exact={exact}
              activeClassName="side-menu--active"
              className="side-menu"
            >
              <div className="rounded-l-full">{icon}</div>
              <div className="ml-3">{pathName}</div>
            </NavLink>
          ))}
        </div>
      </nav>
      <div className="bg-white rounded-3xl w-full px-6 min-h-screen">
        {children}
      </div>
    </div>
  );
}

export default Layout;
