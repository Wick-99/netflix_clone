import axios from "axios";

const gateWay = axios.create({
   baseURL: "http://localhost:3001",
   headers: {
      "Content-Type": "application/json",
   },
});

const postGenres = (data) => gateWay.post("/genres", data);

const getGenres = () => gateWay.get("/genres");

const postMovies = (data) => gateWay.post("/movies", data);

const getMovies = () => gateWay.get("/movies");

const getMoviesByID = (id) => gateWay.get(`/movies/${id}`);

const searchedMovies = (query) => gateWay.get(`/movies?q=${query}`);

export {
   postGenres,
   getGenres,
   postMovies,
   getMovies,
   searchedMovies,
   getMoviesByID,
};
