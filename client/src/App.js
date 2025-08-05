import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import AdminPanel from "./pages/AdminPanel";
import SearchPage from "./pages/SearchPage";
import { ToastContainer } from "react-toastify";
import Favorites from "./pages/Favorites";
import MovieDetails from "./pages/MovieDetails";

const App = () => {
   return (
      <>
         <NavBar />
         <ToastContainer
            position="top-right"
            autoClose={2000}
            style={{ top: "10vh" }} 
            toastClassName="bg-black text-white border-0 rounded-2 shadow"
            bodyClassName="text-sm" // optional smaller font on mobile
         />
         <main className="flex-grow-1 p-4 w-100 d-flex flex-column">
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/admin" element={<AdminPanel />} />
               <Route path="/search" element={<SearchPage />} />
               <Route path="/favorites" element={<Favorites />} />
               <Route path="/movies/:id" element={<MovieDetails />} />
            </Routes>
         </main>
      </>
   );
};

export default App;
