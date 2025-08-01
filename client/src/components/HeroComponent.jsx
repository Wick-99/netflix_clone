import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const HeroComponent = ({ featuredMovie }) => {
   const navigate = useNavigate();
   return (
      <div
         className="hero-section position-relative mb-5"
         onClick={() => navigate(`/movies/${featuredMovie.id}`)}
      >
         <div
            className="hero-bg"
            style={{
               backgroundImage: `url(${featuredMovie.image})`,
               backgroundSize: "cover",
               backgroundPosition: "center",
               height: "60vh",
               minHeight: "360px",
               position: "relative",
            }}
         >
            <div
               className="hero-overlay position-absolute top-0 start-0 w-100 h-100"
               style={{
                  background:
                     "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.8))",
               }}
            >
               <Container className="h-100 d-flex align-items-center">
                  <Row className="w-100">
                     <Col lg={6} className="text-start px-3 px-sm-4">
                        <h1 className="fw-bold text-light mb-3 fs-4 fs-md-2 fs-lg-1">
                           {featuredMovie.title}
                        </h1>
                        <p className="text-light mb-4 fs-6 fs-md-5">
                           {featuredMovie?.description?.slice(0,151)}
                        </p>
                        <div className="d-flex flex-wrap gap-2">
                           <span className="badge bg-danger fs-7 fs-sm-6">
                              {featuredMovie.genres}
                           </span>
                           <span className="badge bg-secondary fs-7 fs-sm-6">
                              {featuredMovie.releaseYear}
                           </span>
                           <span className="badge bg-warning text-dark fs-7 fs-sm-6">
                              ★ {featuredMovie.rating}
                           </span>
                        </div>
                     </Col>
                  </Row>
               </Container>
            </div>
         </div>
      </div>
   );
};

export default HeroComponent;
