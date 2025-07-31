import * as yup from "yup";

export const genreSchema = (existingGenres) =>
   yup.object().shape({
      genres: yup
         .string()
         .required("This field is required")
         .min(3, "Min 3 characters")
         .max(50, "Max 50 characters")
         .test("unique", "Genre already exists", function (value) {
            const lowercased = value?.toLowerCase().trim();
            return !existingGenres
               .map((g) => g.genres.toLowerCase().trim())
               .includes(lowercased);
         }),
   });

export const movieSchema = (existingMovies) =>
   yup.object().shape({
      title: yup
         .string()
         .required("This field is required")
         .min(3, "Min 3 characters")
         .max(50, "Max 50 characters")
         .test("unique", "Movie already exists", function (value) {
            const lowercased = value?.toLowerCase().trim();
            return !existingMovies
               .map((m) => m.title.toLowerCase().trim())
               .includes(lowercased);
         }),
      releaseYear: yup
         .number()
         .typeError("Release year must be a number")
         .required("This field is required"),

      rating: yup
         .number()
         .typeError("Release year must be a number")
         .required("This field is required"),

      description: yup
         .string()
         .required("This field is required")
         .min(3, "Min 3 characters")
         .max(300, "Max 300 characters"),

      trailer: yup
         .string()
         .required("This field is required")
         .min(3, "Min 3 characters")
         .max(50, "Max 50 characters"),

      genres: yup.string().required("This field is required"),

      image: yup
         .mixed()
         .required("This field is required")
         .test("fileExists", "You must upload a file", (value) => {
            return value && value.length > 0;
         }),
   });
   