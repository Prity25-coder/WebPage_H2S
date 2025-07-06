import "./App.css";

import Astronaut from "./components/Astronaut";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Hackathon from "./components/Hackathon";
import Header from "./components/Header";
import Home from "./components/Home";
import Participate from "./components/Participate";
import Promo from "./components/Promo";

function App() {
  return (
    <>
      <div className="">
        <div className=" min-h-screen bg-[url('/img/background_1.jpg')] bg-cover bg-center">
          <Header />
          <Home />
        </div>

        <Promo />
        <Astronaut />
        <Participate />
        <Hackathon />
        <Faq />
        <Footer />
      </div>
    </>
  );
}

export default App;
