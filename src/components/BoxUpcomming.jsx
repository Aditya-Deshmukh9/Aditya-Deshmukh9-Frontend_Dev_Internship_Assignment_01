import { MapPin } from "lucide-react";
import React from "react";

function BoxUpcomming({
  eventName,
  imgUrl,
  cityName,
  date,
  weather,
  distanceKm,
}) {
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
    <div className="border shadow-md h-[270px] w-[300px]">
      <div className="h-[200px] relative">
        <img
          src={img_url}
          alt="image-01"
          className="object-cover bg-cover w-full h-full"
        />
        <div className="absolute inset-x-0 z-10 bottom-1 pl-4 p-1 bg-white opacity-80 font-semibold w-full">
          <p>{formattedDate}</p>
        </div>
        <div className="p-4">
          <p className="font-bold whitespace-nowrap mr-5 overflow-hidden text-start">
            {eventName}
          </p>
          <div className="flex justify-between items-center font-normal text-sm">
            <p className="flex items-center gap-1">
              <MapPin size={17} />
              {cityName}
            </p>
            <p>
              {" "}
              {textreplace} | {roundedDistance}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BoxUpcomming;
