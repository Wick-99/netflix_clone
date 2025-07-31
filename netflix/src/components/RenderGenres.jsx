import React from "react";

const RenderGenres = ({ genres }) => {
   return (
      <>
         {genres.length > 0 && (
            <div className="mt-4">
               <h6 className="text-uppercase mb-4">Existing Genres:</h6>
               <div className="d-flex flex-wrap gap-2">
                  {genres.map((genre, idx) => (
                     <span key={idx} className="badge bg-secondary fs-6">
                        {genre.genres}
                     </span>
                  ))}
               </div>
            </div>
         )}
      </>
   );
};

export default RenderGenres;
