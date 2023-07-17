import React from 'react'
import { useEffect } from "react";
import { Carousel } from "@fancyapps/ui/dist/carousel/carousel.esm.js";
import { Thumbs } from "@fancyapps/ui/dist/carousel/carousel.thumbs.esm.js";
import { Fancybox } from "@fancyapps/ui/dist/fancybox/fancybox.esm.js";
import "@fancyapps/ui/dist/carousel/carousel.css";
import "@fancyapps/ui/dist/carousel/carousel.thumbs.css";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import "./ProductsCarousel.css";
import CarouselItem from './CarouselItem';

const ProductsCarousel = () => {
         useEffect(() => {
           new Carousel(
             document.getElementById("myCarousel"),
             {
               // Özel Carousel seçenekleri
               Dots: false,
             },
             {
               Thumbs,
             }
           );

           Fancybox.bind('[data-fancybox="gallery"]', {
             // Özel Fancybox seçenekleri
           });
         }, []);
  return (
   <>
   <CarouselItem/>
   </>
  );
}

export default ProductsCarousel