import {toast} from "react-toastify"

export const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
       { breakpoint: 1200, settings: { slidesToShow: 4 } },
       { breakpoint: 1024, settings: { slidesToShow: 3 } },
       { breakpoint: 768, settings: { slidesToShow: 2 } },
       { breakpoint: 480, settings: { slidesToShow: 2 } },
    ],
 };

export const notify = (message, type) => {
   toast[type](message);
};
 