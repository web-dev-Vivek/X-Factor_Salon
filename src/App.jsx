import React from "react";
import Home from "./Sections/Home";
import OurServices from "./Sections/OurServices";
import Experience from "./Sections/Experience";
import Whychoose from "./Sections/Whychoose";
import Whatclientsay from "./Sections/Whatclientsay";
import Socialhandle from "./Sections/Socialhandle";
import Footer from "./Sections/Footer";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Experience />
      <OurServices />
      <Whychoose />
      <Whatclientsay />
      <Socialhandle />
      <Footer />
    </div>
  );
}

export default App;
