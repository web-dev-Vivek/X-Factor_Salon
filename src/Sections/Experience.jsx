import React from "react";
import Location from "../assets/location.svg";
import Expert from "../assets/team-support.svg";
import Star from "../assets/3448485.png";
import Award from "../assets/award-symbol.svg";

function Experience() {
  return (
    <div className="md:h-[50vh] p-10 md:p-0  gap-10 w-screen bg-gray-50 md:flex md:justify-evenly md:items-center grid grid-cols-2 grid-rows-2 text-white text-center text-2xl pt-10">
      <div className="flex flex-col gap-2 items-center">
        <div>
          <img className="w-[70px]" src={Location} alt="" />
        </div>
        <div className="text-black text-5xl font-bold"> 185+</div>
        <div
          style={{ fontFamily: "Playfair Display, serif" }}
          className="text-black "
        >
          Location Pan India
        </div>
      </div>
      <div className="flex flex-col gap-2 items-center">
        <div>
          <img className="w-[70px]" src={Expert} alt="" />
        </div>
        <div className="text-black text-5xl font-bold"> 4,000+</div>
        <div
          style={{ fontFamily: "Playfair Display, serif" }}
          className="text-black "
        >
          Experts and Technicians
        </div>
      </div>
      <div className="flex flex-col gap-2 items-center">
        <div>
          <img className="w-[70px]" src={Star} alt="" />
        </div>
        <div className="text-black text-5xl font-bold"> 4.5</div>
        <div
          style={{ fontFamily: "Playfair Display, serif" }}
          className="text-black "
        >
          Decades of Excellence
        </div>
      </div>
      <div className="flex flex-col gap-2 items-center">
        <div>
          <img className="w-[70px]" src={Award} alt="" />
        </div>
        <div className="text-black text-5xl font-bold"> 16+</div>
        <div
          style={{ fontFamily: "Playfair Display, serif" }}
          className="text-black "
        >
          Global Awards & Recognition
        </div>
      </div>
    </div>
  );
}

export default Experience;
