import React, { useState, useEffect } from "react";
import bg from "../assets/handsome-man-cutting-beard-barber-salon.jpg";
import bg1 from "../assets/female-hairstylist-drying-curly-girl-s-hair-using-big-plastic-brush.jpg";
import bg2 from "../assets/close-up-hairdresser-shop-instruments.jpg";

function Home() {
  const images = [bg, bg1, bg2];
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % images.length);
    }, 1000);

    return;
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${images[currentBg]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        width: "100%",
        transition: "background-image 1s ease-in-out", // smooth fade
      }}
      className="pt-[60px]"
    >
      <div className="h-[90vh] pb-10 p-10 gap-5 flex flex-col justify-end">
        <h1
          className="text-9xl"
          style={{ color: "white", fontFamily: "Merriweather, serif" }}
        >
          X-factor Salon
        </h1>
        <h3
          className="text-4xl"
          style={{ color: "white", fontFamily: "Montserrat, sans-serif" }}
        >
          WHERE BEAUTY MEETS EXCELLENCE
        </h3>
        <div
          className="flex md:w-[20%] md:flex-row flex-col justify-between"
          style={{ color: "white", fontFamily: "Lora, serif" }}
        >
          <button
            className="border-2 border-white bg-white rounded-full p-3"
            style={{ color: "black", fontFamily: "Bubblegum Sans, cursive" }}
          >
            Book Appointment
          </button>
          <button
            className="border-2 hover:bg-white hover:text-black border-white rounded-full p-3"
            style={{ fontFamily: "Bubblegum Sans, cursive" }}
          >
            View Services
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
