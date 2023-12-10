import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Container } from "../../utils";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Swiper.scss";

import Img from "../../assets/images/heroSwiperImg.png"
import Img2 from "../../assets/images/hero2SwipperImg.png"
import Img3 from "../../assets/images/hero3.png"
import Img4 from "../../assets/images/hero4.jpg"
import Img5 from "../../assets/images/hero5.png"

const Swipper = () => {
    const data = [
        {
            images: Img, product_type: "blush"
        },
        {
            images: Img2, product_type: "blush"
        },
        {
            images: Img3, product_type: "blush"
        },
        {
            images: Img4, product_type: "blush"
        },
        {
            images: Img5, product_type: "bronzer"
        }
    ]
  return (
    <>
      <Container>
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          startedSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {data.map((data, index) => (
            <SwiperSlide className="swiper-card" key={index}>
              <Link to={`/`}>
                <img src={data.images} alt="" />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </>
  );
};

export default Swipper;
