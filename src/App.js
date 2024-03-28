import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import MorseCode from "./Pages/MorseCode";
import Contacts from "./Pages/Contact";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Resume from "./Pages/Resume";
import Breakout from "./Pages/Breakout";
import Anuitate from "./Pages/Anuitate";
import DesktopApp from "./Pages/DesktopApp";
import Binary from "./Pages/Binary";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />z
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/breakout-game" element={<Breakout />} />
          <Route path="/projects/loan-calculator" element={<Anuitate />} />
          <Route path="/projects/desktop-app" element={<DesktopApp />} />
          <Route path="/contact" element={<Contacts />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/home/decimal-binary" element={<Binary />} />
          <Route path="/home/morse-code" element={<MorseCode />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
