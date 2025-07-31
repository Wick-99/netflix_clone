import React, { useMemo } from "react";
import "../css/MovieCard.css";
import { useContext } from "react";
import movieContext from "../context/MovieContext";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ id, movie }) => {
   const { favourites, toggleFavourite } = useContext(movieContext);
   const navigate = useNavigate();
   const isFavorite = useMemo(() => {
      return favourites.some((fav) => fav.id === id);
   }, [favourites, id]);
   const handleClick = () => {
      toggleFavourite(movie);
   };

   return (
      <div
         className="movie-card card bg-dark text-white border-0 rounded-3 w-100"
         onClick={() => navigate(`/movies/${id}`)}
      >
         <div className="movie-poster">
            <img
               src={movie.image}
               alt={movie?.title || "movie-poster"}
               className="img-fluid w-100 h-80 object-fit-cover"
            />
            <div className="movie-overlay">
               <button
                  className={`favorite-btn ${isFavorite ? "active" : ""}`}
                  onClick={(e) => {
                     e.stopPropagation();
                     handleClick();
                  }}
               >
                  {isFavorite ? "♥" : "♡"}
               </button>
            </div>
         </div>
         <div className="movie-info">
            <div className="d-flex justify-content-between align-items-center mb-1">
               <h5 className="fs-5 fw-bold mb-1">{movie?.title}</h5>
               <span className="badge bg-warning text-dark fw-bold">
                  ★ {movie?.rating}
               </span>
            </div>
            <p className="text-white-50 mb-0">{movie?.releaseYear}</p>
         </div>
      </div>
   );
};

export default MovieCard;