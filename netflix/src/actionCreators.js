export const ADD_FAVOURITES = "ADD_FAVOURITES";
export const REMOVE_FAVOURITE = "REMOVE_FAVOURITE";
export const ADD_GENRES = "ADD_GENRES";
export const ADD_MOVIES = "ADD_MOVIES";
export const ADD_FEATURED_MOVIE = "ADD_FEATURED_MOVIE";

export const addGenres = (payload) => {
   return {
      type: ADD_GENRES,
      payload,
   };
};

export const addMovies = (payload) => {
   return {
      type: ADD_MOVIES,
      payload,
   };
};

export const addFeaturedMovie = (payload) => {
   return {
      type: ADD_FEATURED_MOVIE,
      payload,
   };
};

export const addFavourites = (payload) => ({
   type: ADD_FAVOURITES,
   payload,
});

export const removeFavourite = (id) => ({
   type: REMOVE_FAVOURITE,
   payload: id,
});
