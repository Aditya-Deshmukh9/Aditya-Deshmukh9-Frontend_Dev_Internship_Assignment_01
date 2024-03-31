import { ArrowRight, Loader } from "lucide-react";
import React, { useEffect, useState, useRef } from "react";
import EventBox from "./EventBox";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import GlobalApi from "../Utilts/GlobalApi";

function RecommendedShows() {
  const [recomdata, setRecomdata] = useState([]);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(false);
  const [num, setnum] = useState(8);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    getRecomShow();
  }, [page]);

  const getRecomShow = () => {
    GlobalApi.RecommendedEvents(page)
      .then((res) => {
        setRecomdata((prevData) => [...prevData, ...res.data.events]);
        setloading(false);
      })
      .catch((error) => {
        console.error(error);
        setError(true);
      });
  };

  if (error === true) {
    return <h1>Not Found</h1>;
  }

  const handleSlideChange = (swiper) => {
    const activeIndex = swiper.activeIndex;
    if (activeIndex === num) {
      // Call API and increment page number when the first slide is active

      setPage((prevPage) => prevPage + 1);
      setloading(true);
      setnum(num + 7);
    }
  };

  return (
    <div className="h-[550px] -mt-52 text-white relative z-20 px-24">
      <div className="flex items-center mb-4 py-1 justify-between">
        <p className="flex items-center font-semibold text-xl gap-x-2">
          Recommended shows <ArrowRight />
        </p>
        <p className="underline">See all</p>
      </div>

      <div>
        <Swiper
          lazy="true"
          watchSlidesProgress={true}
          slidesPerView={1}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            "@0.00": {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            "@0.75": {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            "@1.00": {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            "@1.50": {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          className="mySwiper"
          onSlideChange={(swiper) => handleSlideChange(swiper)}
        >
          {recomdata.map((event, index) => (
            <SwiperSlide key={index}>
              <EventBox {...event} />
            </SwiperSlide>
          ))}
          {loading && (
            <div className="flex items-center justify-center">
              <Loader className="animate-spin" />
            </div>
          )}
        </Swiper>
      </div>
    </div>
  );
}
export default RecommendedShows;
