import React from 'react';
import Image from 'next/image';
import img from '../../assets/image/banner1.jpg';
import img1 from '../../assets/image/banner2.jpg';
import img2 from '../../assets/image/banner3.jpg';

const BannerCarousel = () => {
  return (
    <section className="banner">
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel" // Enables auto-sliding
        data-bs-interval="3000" // Set interval time in milliseconds (3 seconds here)
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <Image src={img} layout="responsive" width={800} height={400} alt="banner" className="d-block w-100" />
          </div>
          <div className="carousel-item">
            <Image src={img1} layout="responsive" width={800} height={400} alt="banner" className="d-block w-100" />
          </div>
          <div className="carousel-item">
            <Image src={img2} layout="responsive" width={800} height={400} alt="banner" className="d-block w-100" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
};

export default BannerCarousel;
