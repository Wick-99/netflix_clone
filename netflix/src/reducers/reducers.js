import {
   ADD_GENRES,
   ADD_MOVIES,
   ADD_FEATURED_MOVIE,
   ADD_FAVOURITES,
   REMOVE_FAVOURITE,
} from "../actionCreators";

const reducer = (state, action) => {
   switch (action.type) {
      case ADD_MOVIES:
         return {
            ...state,
            movies: action.payload,
         };
      case ADD_GENRES:
         return {
            ...state,
            genres: action.payload,
         };
      case ADD_FEATURED_MOVIE:
         return {
            ...state,
            featuredMovie: action.payload,
         };
      case ADD_FAVOURITES:
         return {
            ...state,
            favourites: [...state.favourites, action.payload],
         };
      case REMOVE_FAVOURITE:
         return {
            ...state,
            favourites: state.favourites.filter(
               (movie) => movie.id !== action.payload
            ),
         };
      default:
         return state;
   }
};

export { reducer };
