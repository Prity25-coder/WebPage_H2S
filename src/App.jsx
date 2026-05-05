import "./App.css";

import Astronaut from "./components/Astronaut";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Hackathon from "./components/Hackathon";
import Header from "./components/Header";
import Home from "./components/Home";
import Participate from "./components/Participate";
import Promo from "./components/Promo";
import CustomCursor from "./components/CustomCursor";

function App() {
  return (
    <div className="relative">
      <CustomCursor />
      <Header />
      <Home />
      <Promo />
      <Astronaut />
      <Participate />
      <Hackathon />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
