import { ChevronRight, MapPin } from "lucide-react";
import React from "react";

function Header2() {
  const navLink = [
    {
      link: "#",
      text: "Live Shows",
    },
    {
      link: "#",
      text: "Streams",
    },
    {
      link: "#",
      text: "Movies",
    },
    {
      link: "#",
      text: "Plays",
    },
    {
      link: "#",
      text: "Events",
    },
    {
      link: "#",
      text: "Sports",
    },
    {
      link: "#",
      text: "Activities",
    },
  ];

  return (
    <div className="flex justify-between px-8 pb-4">
      <div className="flex w-1/4 justify-start items-center gap-2 font-medium">
        <MapPin size={17} />
        Mumbai, India
        <ChevronRight size={17} />
      </div>
      <div className="flex w-3/4 items-center justify-start gap-x-5">
        {navLink.map((e, i) => (
          <a key={i} className="capitalize ml-5" href={e.link}>
            {e.text}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Header2;
