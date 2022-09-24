import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ChangesBeingMadeLandingpage from "./ChangesBeingMadeLandingpage";
import Landingpage from "./pomosaurier/Landingpage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/changes" element={<ChangesBeingMadeLandingpage />} />
          <Route path="/" element={<Landingpage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
