import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { genreSchema } from "./validation";
import { postGenres } from "../services/apis";
import { toast } from "react-toastify";
import { useContext } from "react";
import movieContext from "../context/MovieContext";
import RenderGenres from "./RenderGenres";
import FormInput from "./FormInput";

const GenreForm = () => {
   const { genres, refetchGenres } = useContext(movieContext);
   const inputKey = genres.length;
   const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
   } = useForm({
      resolver: yupResolver(genreSchema(genres)),
   });
   const onGenreSubmit = async (data) => {
      try {
         toast.success("Genre Added Successfully");
         await postGenres(data);
         await refetchGenres();
         reset();
      } catch (err) {
         console.error(err);
         toast.error("Failed to add genre");
      }
   };
   return (
      <div
         className="card bg-dark border-0 shadow p-4 mb-4"
         style={{ color: "white" }}
      >
         <h4 className="mb-4 text-uppercase">Add Genre</h4>
         <form onSubmit={handleSubmit(onGenreSubmit)}>
            <div className="mb-3">
               <FormInput
                  key={inputKey}
                  label="Genre Name"
                  name="genres"
                  type="text"
                  placeholder="Enter genre..."
                  register={register}
                  errors={errors}
               />
            </div>
            <button type="submit" className="btn btn-danger">
               Add Genre
            </button>
         </form>
         <RenderGenres genres={genres} />
      </div>
   );
};
export default GenreForm;