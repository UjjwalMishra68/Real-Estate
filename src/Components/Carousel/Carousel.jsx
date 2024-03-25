import React from "react";
import "./Carousel.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { sliderSettings } from "../Common";
import "swiper/css";
import Image1 from "../../assets/r1.png";
import Image2 from "../../assets/r2.png";
import Image3 from "../../assets/r3.png";
const Carousel = () => {
  return (
    <div className="Carousel Container">
      <div className="Carousel-heading">
        <span className="Heading">
          <h2>Best Choices</h2>
        </span>
        <span className="Heading">
          <h1>Popular Residencies</h1>
        </span>
      </div>
      <div className="Carousel-scroller">
        <Swiper {...sliderSettings}>
          <SwiperSlide className="slider-card">
            <div className="card">
            <img src={Image1} alt="" />
            <h4>
              <span>$</span>47,043
            </h4>
            <h3>Aliva Priva Jardin</h3>
            <p>
              Jakarta Garden City Street, Cakung. Pulo Gadung, Jakarta Timur,
              DKI Jakarta
            </p>
            </div>
          </SwiperSlide>

          <SwiperSlide className="slider-card">
            <div className="card">
            <img src={Image2} alt="" />
            <h4>
              <span>$</span>66,353
            </h4>
            <h3>Asatti Garden City</h3>
            <p>
              Pahlawan Street XVII No.215, Cinangka, Sawangan, Depok, Jawa Barat
            </p>
            </div>
          </SwiperSlide>

          <SwiperSlide className="slider-card">
            <div className="card">
            <img src={Image3} alt="" />
            <h4>
              <span>$</span>47,043
            </h4>
            <h3>Citralan Puri Serang</h3>
            <p>
              Ruko Puri Indah Residence Block A7, Lingkar Street, Ciracas,
              Serang, Banten
            </p>
            </div>
          </SwiperSlide>

          <SwiperSlide className="slider-card">
            <div className="card">
            <img src={Image1} alt="" />
            <h4>
              <span>$</span>35,709
            </h4>
            <h3>Sunset Vista Apartments</h3>
            <p>
              Modern apartments atop Sunset Boulevard, offering panoramic city
              views and luxury living.
            </p>
            </div>
          </SwiperSlide>

          <SwiperSlide className="slider-card">
            <div className="card">
            <img src={Image2} alt="" />
            <h4>
              <span>$</span>5,000
            </h4>
            <h3>Riverfront Retreat</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias
              libero laborum possimus.
            </p>
            </div>
          </SwiperSlide>

          <SwiperSlide className="slider-card">
            <div className="card">
            <img src={Image3} alt="" />
            <h4>
              <span>$</span>8,500
            </h4>
            <h3>Mountain Haven Chalet</h3>
            <p>
              JCozy chalet nestled in the Rocky Mountains, featuring rustic-chic
              decor and breathtaking views.
            </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Carousel;
