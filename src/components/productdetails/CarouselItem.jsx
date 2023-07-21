import React from 'react'

const CarouselItem = () => {
  return (
    <div>
      <div id="app">
        <div class="f-carousel" id="myCarousel">
          <div
            class="f-carousel__slide"
            data-thumb-src="https://lipsum.app/id/68/256x144"
            data-fancybox="gallery"
            data-src="https://lipsum.app/id/68/1600x900"
          >
            <img
              width="640"
              height="360"
              data-lazy-src="https://lipsum.app/id/68/640x360"
            />
          </div>
          <div
            class="f-carousel__slide"
            data-thumb-src="https://lipsum.app/id/58/256x144"
            data-fancybox="gallery"
            data-src="https://lipsum.app/id/58/1600x900"
          >
            <img
              width="640"
              height="360"
              data-lazy-src="https://lipsum.app/id/58/640x360"
            />
          </div>
          <div
            class="f-carousel__slide"
            data-thumb-src="https://lipsum.app/id/9/256x144"
            data-fancybox="gallery"
            data-src="https://lipsum.app/id/9/1600x900"
          >
            <img
              width="640"
              height="360"
              data-lazy-src="https://lipsum.app/id/9/640x360"
            />
          </div>
          <div
            class="f-carousel__slide"
            data-thumb-src="https://lipsum.app/id/62/256x144"
            data-fancybox="gallery"
            data-src="https://lipsum.app/id/62/1600x900"
          >
            <img
              width="640"
              height="360"
              data-lazy-src="https://lipsum.app/id/62/640x360"
            />
          </div>
          <div
            class="f-carousel__slide"
            data-thumb-src="https://lipsum.app/id/63/256x144"
            data-fancybox="gallery"
            data-src="https://lipsum.app/id/63/1600x900"
          >
            <img
              width="640"
              height="360"
              data-lazy-src="https://lipsum.app/id/63/640x360"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarouselItem