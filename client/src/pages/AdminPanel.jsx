import React, { useState } from "react";
import GenreForm from "../components/GenreForm";
import AddMovieForm from "../components/AddMovieForm";
import { useContext } from "react";
import movieContext from "../context/MovieContext";

const AdminPanel = () => {
   const [activeForm, setActiveForm] = useState("genre");
   const {genres} = useContext(movieContext)
   return (
      <div className="container py-5 text-white">
         <h2
            className="mb-4 text-uppercase"
            style={{ fontFamily: "Bebas Neue", letterSpacing: "2px" }}
         >
            Admin Panel
         </h2>
         <div className="mb-4 d-flex gap-3">
            <button
               className={`btn ${
                  activeForm === "genre" ? "btn-danger" : "btn-outline-danger"
               }`}
               onClick={() => setActiveForm("genre")}
            >
               ➕ Add Genre
            </button>
            <button
               className={`btn ${
                  activeForm === "movie" ? "btn-danger" : "btn-outline-danger"
               }`}
               onClick={() => setActiveForm("movie")}
               disabled={genres.length === 0}
            >
               🎬 Add Movie
            </button>
         </div>
         {activeForm === "genre" && <GenreForm/>}
         {activeForm === "movie" && <AddMovieForm/>}
      </div>
   );
};

export default AdminPanel;