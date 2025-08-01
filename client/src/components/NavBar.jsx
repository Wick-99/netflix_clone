import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { Collapse } from "bootstrap";
import "../css/Navbar.css";

const NavBar = () => {
   const [isNavbarOpen, setIsNavbarOpen] = useState(false);
   const collapseRef = useRef(null);

   const toggleNavbar = () => {
      const el = document.getElementById("navbarNav");
      const bsCollapse =
         Collapse.getInstance(el) || new Collapse(el, { toggle: false });

      if (el.classList.contains("show")) {
         bsCollapse.hide();
         setIsNavbarOpen(false);
      } else {
         bsCollapse.show();
         setIsNavbarOpen(true);
      }
   };

   const closeNavbar = () => {
      const el = document.getElementById("navbarNav");
      const bsCollapse =
         Collapse.getInstance(el) || new Collapse(el, { toggle: false });
      bsCollapse.hide();
      setIsNavbarOpen(false);
   };

   useEffect(() => {
      const el = document.getElementById("navbarNav");
      if (el) {
         collapseRef.current =
            Collapse.getInstance(el) || new Collapse(el, { toggle: false });
         el.addEventListener("hidden.bs.collapse", () =>
            setIsNavbarOpen(false)
         );
         el.addEventListener("shown.bs.collapse", () => setIsNavbarOpen(true));
      }
      return () => {
         if (el) {
            el.removeEventListener("hidden.bs.collapse", () =>
               setIsNavbarOpen(false)
            );
            el.removeEventListener("shown.bs.collapse", () =>
               setIsNavbarOpen(true)
            );
         }
      };
   }, []);

   return (
      <nav className="navbar navbar-expand-lg fixed-top shadow bg-dark">
         <div className="container-fluid px-4 py-2 d-flex justify-content-between align-items-center">
            <NavLink
               to="/"
               className="navbar-brand fw-bold fs-2 text-danger"
               onClick={closeNavbar}
            >
               MovieFLIX
            </NavLink>

            <div className="d-flex align-items-center d-lg-none">
               {!isNavbarOpen && (
                  <NavLink
                     to="/search"
                     className="fs-5 me-2 text-decoration-none mr-3"
                     onClick={closeNavbar}
                     style={({ isActive }) => ({
                        color: isActive ? "red" : "grey",
                     })}
                  >
                     Search
                  </NavLink>
               )}

               <button
                  className="navbar-toggler bg-dark border-0"
                  type="button"
                  onClick={toggleNavbar}
                  aria-expanded={isNavbarOpen}
                  aria-label="Toggle navigation"
               >
                  {isNavbarOpen ? (
                     <span className="text-white fs-3">&times;</span>
                  ) : (
                     <span
                        className="navbar-toggler-icon"
                        style={{ filter: "invert(1)" }}
                     ></span>
                  )}
               </button>
            </div>

            <div
               className="collapse navbar-collapse justify-content-lg-end w-100"
               id="navbarNav"
            >
               <div className="navbar-nav d-flex flex-column flex-lg-row align-items-center gap-3">
                  <NavLink
                     to="/"
                     onClick={closeNavbar}
                     className={({ isActive }) =>
                        `nav-link px-2 ${
                           isActive ? "text-danger fw-semibold" : "text-light"
                        }`
                     }
                  >
                     Home
                  </NavLink>

                  {/* Desktop Search */}
                  <NavLink
                     to="/search"
                     onClick={closeNavbar}
                     className={({ isActive }) =>
                        `nav-link px-2 d-none d-lg-block ${
                           isActive ? "text-danger fw-semibold" : "text-light"
                        }`
                     }
                  >
                     Search Movies
                  </NavLink>

                  <NavLink
                     to="/favorites"
                     onClick={closeNavbar}
                     className={({ isActive }) =>
                        `nav-link px-2 ${
                           isActive ? "text-danger fw-semibold" : "text-light"
                        }`
                     }
                  >
                     Favorites
                  </NavLink>

                  <NavLink
                     to="/admin"
                     onClick={closeNavbar}
                     className={({ isActive }) =>
                        `nav-link px-2 ${
                           isActive ? "text-danger fw-semibold" : "text-light"
                        }`
                     }
                  >
                     Add Movie
                  </NavLink>
               </div>
            </div>
         </div>
      </nav>
   );
};

export default NavBar;
