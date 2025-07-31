import Slider from "react-slick";
import MovieCard from "../components/MovieCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeroComponent from "../components/HeroComponent";
import { sliderSettings } from "../utils";
import { useContext } from "react";
import movieContext from "../context/MovieContext";

const Home = () => {
   const { genres, movies, featuredMovie } = useContext(movieContext);
   return (
      <div className="container-fluid py-5 px-3 text-white">
         <HeroComponent featuredMovie={featuredMovie} />
         {genres.map((genreObj) => {
            const genreName = genreObj.genres;
            const moviesForGenre = movies.filter(
               (movie) => movie.genres === genreName
            );
            if (moviesForGenre.length === 0) return null;
            return (
               <div className="mb-5" key={genreName}>
                  <h1 className="mb-4">{genreName}</h1>
                  <Slider {...sliderSettings}>
                     {moviesForGenre.map((movie) => (
                        <div key={movie.id} className="px-2">
                           <div className="w-100 h-100">
                              <MovieCard
                                 id={movie.id}
                                 movie={movie}
                              />
                           </div>
                        </div>
                     ))}
                  </Slider>
               </div>
            );
         })}
      </div>
   );
};

export default Home;