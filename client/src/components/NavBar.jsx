import React from "react";
import { NavLink } from "react-router-dom";
import "../css/Navbar.css";

const NavBar = () => {
   return (
      <nav className="navbar navbar-expand-lg fixed-top shadow">
         <div className="container-fluid d-flex justify-content-between align-items-center px-4 py-2">
            <NavLink
               to="/"
               className="navbar-brand fw-bold fs-2"
               style={{ color: "red" }}
            >
               MovieFLIX
            </NavLink>
            <div className="d-flex gap-4">
               <NavLink
                  to="/"
                  className={({ isActive }) =>
                     `nav-link ${
                        isActive ? "text-danger fw-semibold" : "text-light"
                     }`
                  }
               >
                  Home
               </NavLink>
               <NavLink
                  to="/search"
                  className={({ isActive }) =>
                     `nav-link ${
                        isActive ? "text-danger fw-semibold" : "text-light"
                     }`
                  }
               >
                  Search Movies
               </NavLink>
               <NavLink
                  to="/favorites"
                  className={({ isActive }) =>
                     `nav-link ${
                        isActive ? "text-danger fw-semibold" : "text-light"
                     }`
                  }
               >
                  Favorites
               </NavLink>
               <NavLink
                  to="/admin"
                  className={({ isActive }) =>
                     `nav-link ${
                        isActive ? "text-danger fw-semibold" : "text-light"
                     }`
                  }
               >
                  Add Movies
               </NavLink>
            </div>
         </div>
      </nav>
   );
};

export default NavBar;
