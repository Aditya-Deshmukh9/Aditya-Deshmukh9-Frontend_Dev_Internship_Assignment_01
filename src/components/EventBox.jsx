import { MapPin } from "lucide-react";
import React from "react";

function EventBox({ eventName, imgUrl, cityName, date, weather, distanceKm }) {
  const id = imgUrl.match(/\/([^/]+)\/view/)[1];
  const img_url = `https://lh3.googleusercontent.com/d/${id}=s220?authuser=0`;

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const roundedDistance = `${(distanceKm / 1000).toFixed(0)} km`;
  const textreplace = weather.replace("C", "°C");

  return (
    <div className="pr-5 shadow-md">
      <div className="relative cursor-pointer h-[450px] w-[250px] rounded-md">
        <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        <img
          src={img_url}
          className="absolute select-none rounded-md inset-0 w-full h-full object-cover bg-center"
          alt="image_icon"
        />
        <div className="absolute inset-x-0 bottom-0 z-10 bg-black bg-opacity-50 p-2 grid grid-cols-2 items-center text-xs text-white">
          <p className="text-gray-100 whitespace-nowrap overflow-hidden text-start font-semibold">
            {eventName}
          </p>
          <p className="text-gray-400 text-end font-medium">{formattedDate}</p>
          <p className="text-start font-light flex items-center gap-1">
            <MapPin size={14} color="#fff" strokeWidth="2" />
            {cityName}
          </p>
          <p className="text-end font-light">
            {textreplace} | {roundedDistance}
          </p>
        </div>
      </div>
    </div>
  );
}

export default EventBox;
