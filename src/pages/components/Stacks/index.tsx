import { useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


export default function Stacks() {



  const images = [
    "/logos/bss.png",
    "/logos/total.png",

    "/logos/benefit.png",
    // "/logos/foment.png",
    "/logos/drose.png",
    "/logos/rei.png",
    "/logos/multas.png",

    "/logos/time.png",
    "/logos/next.png",
    "/logos/panama.png",
    "/logos/pontohot.png",
    // "/logos/rade.png",
    "/logos/cash.png",
    "/logos/convicta.png",
    "/logos/lih.png",

    "/logos/up.png",
    "/logos/stig.png",
    "/logos/spada.png",
  ];

  const settings = {
    dots: false,
    arrows: false,

    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    // Adicione outras configurações se necessário
  };

  return (
    <>
      <div className={styles.Container}>
        <Slider {...settings}>
          {images.map((img, index) => (
            <div key={index}>
              <img src={img} alt={`logo-${index}`} className={styles.SliderImage} />
            </div>
          ))}
        </Slider>
      </div>
    </>
  )
}