import { AlignJustify, Heart, Search } from "lucide-react";
import React from "react";

function Header() {
  return (
    <div className="flex items-center justify-between px-8 py-5">
      <h1 className="text-[#CF2D2D] text-2xl font-bold">BookUsNow</h1>

      {/* Middle */}
      <div className="flex items-center gap-4">
        <button className="bg-black text-white px-4 py-2 rounded-md flex items-center gap-2">
          <AlignJustify size={18} />
          <span>Categories</span>
        </button>

        <div className="relative w-96">
          <div className="flex items-center border border-b-2 border-[#B0BABF] rounded-xl">
            <input
              className="bg-transparent border-none px-3 py-2 leading-tight focus:outline-none"
              type="text"
              placeholder="Movie Name"
            />
            <button type="submit" className="absolute right-0 top-0 mt-2 mr-4">
              <Search size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* End */}
      <div className="flex gap-4">
        <button className="btn-primary">
          <Heart size={18} /> Favorites
        </button>
        <button className="btn-primary ">Sign-in</button>
      </div>
    </div>
  );
}

export default Header;
