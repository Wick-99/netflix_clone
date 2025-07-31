import { createContext, useCallback, useEffect } from "react";
import { getGenres, getMovies } from "../services/apis";
import { useReducer } from "react";
import { reducer } from "../reducers/reducers";
import { addGenres } from "../actionCreators";
import {
   addMovies,
   addFeaturedMovie,
   addFavourites,
   removeFavourite,
} from "../actionCreators";
import { notify } from "../utils";

const movieContext = createContext();

const Provider = ({ children }) => {
   const [state, dispatch] = useReducer(reducer, {
      movies: [],
      genres: [],
      featuredMovie: {},
      favourites: [],
   });

   const fetchGenres = useCallback(async () => {
      try {
         const { data } = await getGenres();
         dispatch(addGenres(data));
      } catch (err) {
         console.error(err);
      }
   }, []);

   const fetchMovies = useCallback(async () => {
      const { data } = await getMovies();
      dispatch(addMovies(data));
      const heighestRatedMovie = data.reduce((prev, curr) =>
         curr.rating > prev.rating ? curr : prev
      );
      dispatch(addFeaturedMovie(heighestRatedMovie));
   }, []);

   const toggleFavourite = (movie) => {
      const exists = state.favourites.some((fav) => fav.id === movie.id);
      if (exists) {
         dispatch(removeFavourite(movie.id));
         notify("Removed from favourites", "info");
      } else {
         dispatch(addFavourites(movie));
         notify("Added to favourites", "success");
      }
   };

   useEffect(() => {
      fetchGenres();
   }, [fetchGenres]);

   useEffect(() => {
      fetchMovies();
   }, [fetchMovies]);

   useEffect(() => {
      const stored = localStorage.getItem("favourites");
      if (stored) {
         try {
            const parsed = JSON.parse(stored);
            parsed.forEach((movie) => {
               dispatch(addFavourites(movie));
            });
         } catch (e) {
            console.error("Failed to parse favourites from localStorage");
         }
      }
   }, []);

   useEffect(() => {
      localStorage.setItem("favourites", JSON.stringify(state.favourites));
   }, [state.favourites]);

   return (
      <movieContext.Provider
         value={{
            genres: state.genres,
            refetchGenres: fetchGenres,
            movies: state.movies,
            refetchMovies: fetchMovies,
            featuredMovie: state.featuredMovie,
            toggleFavourite,
            favourites: state.favourites,
         }}
      >
         {children}
      </movieContext.Provider>
   );
};

export { Provider };

export default movieContext;