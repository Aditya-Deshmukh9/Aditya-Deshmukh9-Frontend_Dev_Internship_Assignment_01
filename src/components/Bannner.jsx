import React from "react";
import bannerImage from "../assets/Banner.svg";

function Bannner() {
  return (
    <div
      className="h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${bannerImage})` }}
    >
      <div className="absolute w-[95%] md:w-[80%] text-center  top-[50%] left-[50%] -translate-x-[50%]  -translate-y-[50%] md:space-y-8  text-white ">
        <p className="text-xl md:text-6xl  font-bold">
          Discover Exciting Events Happening
        </p>
        <p className="text-xl md:text-6xl font-bold ">
          Near You - Stay Tuned for Updates
        </p>
        <p className="mx-4 hidden md:visible content-center ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          consectetur non voluptates veritatis, provident autem porro
          exercitationem corrupti, sed saepe fuga atque reprehenderit accusamus
          dolore et accusantium voluptatum. Tenetur!
        </p>
        <p className="mx-4 mt-2 md:hidden content-center ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          consectetur non voluptates veritatis
        </p>
      </div>
    </div>
  );
}

export default Bannner;
