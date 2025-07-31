import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { movieSchema } from "./validation";
import { postMovies } from "../services/apis";
import { useContext } from "react";
import movieContext from "../context/MovieContext";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import FormFileInput from "./FormFileInput";
import { toast } from "react-toastify";
import FormTextarea from "./FormTextArea";

const AddMovieForm = () => {
   const [preview, setPreview] = useState(null);
   const { genres, refetchMovies,movies } = useContext(movieContext);
   const {
      register,
      formState: { errors },
      handleSubmit,
      reset,
      watch,
   } = useForm({ resolver: yupResolver(movieSchema(movies)) });
   const imageUrl = watch("image");
   const onSubmit = async (data) => {
      try {
         await postMovies({ ...data, image: preview });
         await refetchMovies();
         toast.success("Movie Added Successfully");
         reset();
      } catch (err) {
         console.error(err);
      }
   };
   useEffect(() => {
      if (imageUrl && imageUrl.length > 0) {
         const file = imageUrl[0];
         const reader = new FileReader();
         reader.onloadend = () => {
            setPreview(reader.result);
         };
         reader.readAsDataURL(file);
      } else {
         setPreview(null);
      }
   }, [imageUrl]);
   return (
      <div className="card bg-dark border-0 shadow p-4 text-white">
         <h4 className="mb-4 text-uppercase">Add Movie</h4>
         <form onSubmit={handleSubmit(onSubmit)}>
            <FormInput
               label="Movie Title"
               name="title"
               placeholder="Enter title..."
               register={register}
               errors={errors}
            />
            <FormTextarea
               label="Description"
               name="description"
               register={register}
               errors={errors}
            />
            <FormFileInput
               label="Upload Poster Image"
               name="image"
               register={register}
               errors={errors}
            />
            <FormInput
               label="Release Year"
               name="releaseYear"
               type="number"
               placeholder="e.g. 2024"
               register={register}
               errors={errors}
            />
            <FormInput
               label="Movie Rating"
               name="rating"
               type="number"
               step="any"
               placeholder="8.5"
               register={register}
               errors={errors}
            />
            <FormInput
               label="YouTube Trailer"
               name="trailer"
               placeholder="e.g. https://youtu.be/43R9l7EkJwE"
               register={register}
               errors={errors}
            />
            <FormSelect
               label="Genre"
               name="genres"
               register={register}
               errors={errors}
               options={genres}
            />
            <button type="submit" className="btn btn-danger">
               Add Movie
            </button>
         </form>
      </div>
   );
};
export default AddMovieForm;
