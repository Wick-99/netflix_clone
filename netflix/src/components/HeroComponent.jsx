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
                  <Row>
                     <Col lg={6}>
                        <h1 className="display-4 text-light fw-bold mb-3">
                           {featuredMovie.title}
                        </h1>
                        <p className="lead text-light mb-4 ml-0">
                           {featuredMovie.description}
                        </p>
                        <div className="d-flex gap-2">
                           <span className="badge bg-danger fs-6">
                              {featuredMovie.genres}
                           </span>
                           <span className="badge bg-secondary fs-6">
                              {featuredMovie.releaseYear}
                           </span>
                           <span className="badge bg-warning text-dark fs-6">
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
