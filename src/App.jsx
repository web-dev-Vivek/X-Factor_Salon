import React from "react";
import Home from "./Sections/Home";
import OurServices from "./Sections/OurServices";
import Experience from "./Sections/Experience";
import Whychoose from "./Sections/Whychoose";
import Whatclientsay from "./Sections/Whatclientsay";
import Socialhandle from "./Sections/Socialhandle";
import Footer from "./Sections/Footer";
import Navbar from "./components/Navbar.jsx";
import Journey from "./Sections/Journey.jsx";

function App() {
  return (
    <div className="w-screen overflow-x-hidden">
      <Navbar />
      <Home />
      <Experience />
      <Journey />
      <OurServices />
      <Whychoose />
      <Whatclientsay />
      <Socialhandle />
      <Footer />
    </div>
  );
}

export default App;
