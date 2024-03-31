import { ArrowRight, Loader, ShieldAlert } from "lucide-react";
import React, { useEffect, useState } from "react";
import GlobalApi from "../Utilts/GlobalApi";
import BoxUpcomming from "./BoxUpcomming";

function Upcomingevents() {
  const [data, setdata] = useState([]);
  const [page, setpage] = useState(1);
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState(false);

  useEffect(() => {
    getUpcoData();
  }, [page]);

  useEffect(() => {
    window.addEventListener("scroll", handleInfiniteScroll);

    return () => {
      window.removeEventListener("scroll", handleInfiniteScroll);
    };
  }, []);

  const handleInfiniteScroll = () => {
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        setpage((prevPage) => prevPage + 1);
        setloading(true);
      }
    } catch (error) {
      seterror(true);
    }
  };

  const getUpcoData = async () => {
    try {
      const resp = await GlobalApi.upcomingEvents(page);
      const res = await resp.data.events;

      setdata((prev) => [...prev, ...res]);
      setloading(false);
    } catch (error) {
      seterror(true);
    }
  };

  return (
    <div className="h-[600px] text-black mb-10 relative z-20 px-24">
      <div className="flex items-center mb-4 py-1 justify-between">
        <p className="flex items-center font-semibold text-xl gap-x-2">
          Upcoming shows <ArrowRight />
        </p>
        <p className="underline">See all</p>
      </div>
      <div className="scroll grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {data &&
          data.map((event, index) => <BoxUpcomming {...event} key={index} />)}
        {loading ? (
          <div className="flex items-center justify-center">
            <Loader className="animate-spin" />
          </div>
        ) : (
          error && (
            <div className="flex items-center justify-center">
              <ShieldAlert />
            </div>
          )
        )}
      </div>
    </div>
  );
}
export default Upcomingevents;
