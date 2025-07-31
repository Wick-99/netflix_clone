import React, { useState } from "react";

const TrailerSection = ({ trailerKey, movie }) => {
   const [showTrailer, setShowTrailer] = useState(false);
   return (
      <>
         {trailerKey && (
            <div className="mt-4">
               {trailerKey && (
                  <div className="mt-4">
                     {!showTrailer ? (
                        <div className="col-12 d-flex justify-content-center mb-4">
                           <div
                              className="position-relative w-100"
                              style={{
                                 maxWidth: "800px",
                                 cursor: "pointer",
                              }}
                              onClick={() => setShowTrailer(true)}
                           >
                              <img
                                 src={`https://img.youtube.com/vi/${trailerKey}/hqdefault.jpg`}
                                 alt={`${movie.title} Trailer`}
                                 className="img-fluid rounded shadow"
                                 style={{
                                    width: "100%",
                                    height: "500px",
                                    objectFit: "cover",
                                    filter: "brightness(0.75)",
                                 }}
                              />
                              <span
                                 className="position-absolute top-50 start-50 translate-middle"
                                 style={{
                                    fontSize: "4rem",
                                    color: "white",
                                    textShadow: "0 0 10px rgba(0,0,0,0.7)",
                                    pointerEvents: "none",
                                 }}
                              >
                                 ▶
                              </span>
                           </div>
                        </div>
                     ) : (
                        <div className="ratio ratio-16x9">
                           <iframe
                              src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1`}
                              title="YouTube trailer"
                              allow="autoplay; encrypted-media"
                              allowFullScreen
                           ></iframe>
                        </div>
                     )}
                  </div>
               )}
            </div>
         )}
      </>
   );
};

export default TrailerSection;