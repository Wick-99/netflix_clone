import React, { useContext } from "react";
import MovieCard from "../components/MovieCard";
import movieContext from "../context/MovieContext";
import "../css/Favorites.css";

const Favorites = () => {
   const { favourites } = useContext(movieContext);
   if (favourites.length > 0) {
      return (
         <div className="container py-5 text-white">
            <h2 className="text-center mb-5 display-5 text-shadow">
               Your Favorites
            </h2>
            <div className="row g-4">
               {favourites.map((movie) => (
                  <div
                     className="col-12 col-sm-6 col-md-4 col-lg-3 fade-in"
                     key={movie.id}
                  >
                     <MovieCard movie={movie} id={movie.id} />
                  </div>
               ))}
            </div>
         </div>
      );
   } else {
      return (
         <div className="container py-5 d-flex justify-content-center">
            <div
               className="bg-light bg-opacity-10 text-center p-5 rounded-4 w-100"
               style={{ maxWidth: "600px" }}
            >
               <h2 className="text-danger mb-3 fs-2">
                  No Favorites movies yet
               </h2>
               <p className="text-secondary fs-5">
                  Start adding movies to your favorites and they will appear
                  here
               </p>
            </div>
         </div>
      );
   }
};

export default Favorites;