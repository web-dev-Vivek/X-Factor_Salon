import React from "react";
import bg from "../assets/handsome-man-cutting-beard-barber-salon.jpg";
import bg1 from "../assets/female-hairstylist-drying-curly-girl-s-hair-using-big-plastic-brush.jpg";
import bg2 from "../assets/close-up-hairdresser-shop-instruments.jpg";

function Journey() {
  return (
    <div className="w-screen md:pt-10 flex flex-col gap-10 bg-yellow-50">
      <div className="w-full grid grid-cols-2 md:p-15 p-5 ">
        <div className="grid gap-y-1">
          <h1
            style={{ fontFamily: "Cormorant Garamond, serif" }}
            className="text-5xl"
          >
            JOURNEY SO FAR
          </h1>
          <h3 style={{ fontFamily: "Winky Rough, cursive" }}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente,
            aliquid?
          </h3>
          <p style={{ fontFamily: "Winky Rough, cursive" }}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam
            soluta obcaecati esse molestias commodi, maiores sequi provident
            vitae nobis totam amet, velit eaque quos culpa delectus sit ab. Sunt
            ipsa blanditiis, quam eius quos earum sit est voluptatibus vel culpa
            odit, doloribus ea harum. Aperiam blanditiis corrupti quis porro eos
            quod aut officia quaerat temporibus minima enim sint, est dolore?
          </p>
          <button className="md:w-[12vw] p-3 border-2 border-black">
            KNOW MORE
          </button>
        </div>
        <div className="flex justify-end items-center">
          <img className="w-[500px]" src={bg} alt="" />
        </div>
      </div>
      <div className="w-full grid grid-cols-2 md:p-15 p-5   ">
        <div className="flex justify-start items-center">
          <img className="w-[500px]" src={bg1} alt="" />
        </div>
        <div className=" grid gap-y-1">
          <h1
            style={{ fontFamily: "Cormorant Garamond, serif" }}
            className="text-5xl"
          >
            FOUNDER
          </h1>
          <h3 style={{ fontFamily: "Winky Rough, cursive" }}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente,
            aliquid?
          </h3>
          <p style={{ fontFamily: "Winky Rough, cursive" }}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam
            soluta obcaecati esse molestias commodi, maiores sequi provident
            vitae nobis totam amet, velit eaque quos culpa delectus sit ab. Sunt
            ipsa blanditiis, quam eius quos earum sit est voluptatibus vel culpa
            odit, doloribus ea harum. Aperiam blanditiis corrupti quis porro eos
            quod aut officia quaerat temporibus minima enim sint, est dolore?
          </p>
          <button className="md:w-[12vw] p-3 border-2 border-black">
            KNOW MORE
          </button>
        </div>
      </div>
    </div>
  );
}

export default Journey;
