import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../css/MovieDetails.css";
import movieContext from "../context/MovieContext";
import TrailerSection from "../components/TrailerSection";

const MovieDetails = () => {
   const { movies } = useContext(movieContext);
   const { id } = useParams();
   const navigate = useNavigate();
   const movie = movies.find((m) => m.id === parseInt(id));
   if (!movie) {
      return (
         <div className="text-center py-5 text-danger">Movie not found</div>
      );
   }
   const trailerKey = movie.trailer?.split("/").pop();
   return (
      <div className="container-fluid bg-light min-vh-100 py-5">
         <button
            className="btn btn-outline-secondary mb-4"
            onClick={() => navigate("/")}
         >
            ← Back to Home
         </button>
         <div className="row">
            <div className="col-md-4 d-flex justify-content-center mb-4">
               <div className="position-sticky top-5">
                  <img
                     src={movie.image}
                     alt={movie.title}
                     className="img-fluid rounded shadow"
                     style={{ maxHeight: "500px", objectFit: "cover" }}
                  />
               </div>
            </div>
            <div className="col-md-8">
               <div className="bg-white p-4 rounded shadow-sm animate__animated animate__fadeIn">
                  <h1 className="fw-bold text-dark">{movie.title}</h1>
                  <p className="text-muted mb-2">
                     Release Year: {movie.releaseYear}
                  </p>
                  <p className="text-secondary fs-5">{movie.description}</p>
                  <p className="fw-semibold">
                     Genre:{" "}
                     <span className="badge bg-secondary">{movie.genres}</span>
                  </p>
                  <p className="text-warning fw-bold fs-5">
                     IMDB: ★ {movie.rating}
                  </p>
                  <TrailerSection trailerKey={trailerKey} movie={movie} />
               </div>
            </div>
         </div>
      </div>
   );
};

export default MovieDetails;