import { Carousel } from "flowbite-react";

export default function HeaderCarousel() {
  return (
    <div className="flex justify-center  ">
      <Carousel className=" max-w-full h-[600px] m-auto ">
        <img alt="..." src="./assets/img1.jpg" className="w-full " />
        <img alt="..." src="./assets/img2.jpg" className="w-full" />
        <img alt="..." src="./assets/img3.jpg" className="w-full " />
      </Carousel>
    </div>
  );
}
