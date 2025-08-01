import React from "react";
import MovieCard from "../components/MovieCard";
import { useForm } from "react-hook-form";
import { useContext, useState, useEffect } from "react";
import movieContext from "../context/MovieContext";
import useDebounce from "../hooks/useDebounce";
import { searchedMovies } from "../services/apis";

const SearchPage = () => {
   const { movies } = useContext(movieContext);
   const { register, watch } = useForm({
      defaultValues: {
         search: "",
      },
   });
   const searchValue = watch("search");
   const debouncedSearch = useDebounce(searchValue, 400);
   const [results, setResults] = useState([]);
   useEffect(() => {
      const fetchResults = async () => {
         if (debouncedSearch.trim() === "") {
            setResults(movies);
            return;
         }
         try {
            const { data } = await searchedMovies(debouncedSearch);
            setResults(data);
         } catch (err) {
            console.error("Search error:", err);
         }
      };
      fetchResults();
   }, [debouncedSearch, movies]);
   return (
      <div className="container py-5 text-white">
         <div className="mb-5">
            <h2 className="mb-3 fw-bold">Search Movies</h2>
            <form className="d-flex">
               <input
                  type="text"
                  className="form-control me-2"
                  placeholder="Search by title..."
                  {...register("search")}
               />
            </form>
         </div>
         <div className="row g-4">
            {results.length > 0 ? (
               results.map((movie) => (
                  <div key={movie.id} className="col-6 col-sm-4 col-md-3">
                     <MovieCard id={movie.id} movie={movie} />
                  </div>
               ))
            ) : (
               <p
                  
                  style={{
                     display: "flex",
                     width: "100%",
                     justifyContent: "center",
                     color: "red",
                  }}
               >
                  No movies found.
               </p>
            )}
         </div>
      </div>
   );
};

export default SearchPage;
