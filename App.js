import React from "react";
import Mainbar from "./components/Mainbar/Mainbar";
import Dekho from "./components/Dekho/Dekho";
import Diseases from "./components/Diseases/Diseases";
import Search from "./components/search/Search";
import Selects from "./components/Selects/Selects";
import ImgCarousel from "./components/Carousel/ImgCarousel";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Mainbar />
      <Dekho />
      <Diseases />
      <Search />
      <Selects />
      <ImgCarousel />
      <Footer />
    </div>
  );
}

export default App;
